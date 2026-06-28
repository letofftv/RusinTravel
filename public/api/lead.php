<?php
/**
 * lead.php — приём заявки с формы → сохранение в БД + email-уведомление.
 *
 * POST /api/lead.php
 * Body: { name, phone, tour, date, guests, children, contactMethod, comment, sourcePage }
 *
 * Ответы:
 *   200 { success: true, leadId: N }            — сохранено в БД (+ отправлено письмо)
 *   200 { success: true, fallback: true }        — БД недоступна, но письмо+лог сработали
 *   400 { success: false, message: "..." }
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

// ── CORS ──────────────────────────────────────────────────────────────────────
$origin = ALLOWED_ORIGIN ?: '*';
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Only POST allowed'], JSON_UNESCAPED_UNICODE);
    exit;
}

// ── Входные данные ─────────────────────────────────────────────────────────────
$body = json_decode(file_get_contents('php://input'), true);
if (!$body) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON'], JSON_UNESCAPED_UNICODE);
    exit;
}

$name  = trim($body['name']  ?? '');
$phone = trim($body['phone'] ?? '');
if (!$name || !$phone) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Имя и телефон обязательны'], JSON_UNESCAPED_UNICODE);
    exit;
}

$tour          = trim($body['tour']          ?? 'Не указана');
$date          = trim($body['date']          ?? '');
$guests        = intval($body['guests']   ?? 0);
$children      = intval($body['children'] ?? 0);
$contactMethod = trim($body['contactMethod'] ?? '');
$comment       = trim($body['comment']       ?? '');
$sourcePage    = trim($body['sourcePage']    ?? '');
$ip            = $_SERVER['REMOTE_ADDR'] ?? '';

// ── Письмо-уведомление ─────────────────────────────────────────────────────────
function send_lead_email(array $d): void {
    $guestsText = $d['guests'] . ' взр' . ($d['children'] > 0 ? " + {$d['children']} дет" : '');
    $body = "Новая заявка с сайта TravelRusin.ru\n\n"
          . "Имя:        {$d['name']}\n"
          . "Телефон:    {$d['phone']}\n"
          . "Связь:      {$d['contactMethod']}\n"
          . "Экскурсия:  {$d['tour']}\n"
          . "Дата:       {$d['date']}\n"
          . "Состав:     {$guestsText}\n"
          . "Комментарий: {$d['comment']}\n"
          . "Источник:   {$d['sourcePage']}\n"
          . "Время:      " . date('Y-m-d H:i:s') . "\n";
    $subject = '=?UTF-8?B?' . base64_encode("Заявка с сайта: {$d['name']} — {$d['tour']}") . '?=';
    $headers = 'From: ' . SITE_NAME . ' <' . MAIL_FROM . ">\r\n"
             . "Reply-To: {$d['phone']}\r\n"
             . "Content-Type: text/plain; charset=UTF-8\r\n";
    @mail(LEAD_NOTIFY_EMAIL, $subject, $body, $headers);
}

$lead = compact('name', 'phone', 'tour', 'date', 'guests', 'children', 'contactMethod', 'comment', 'sourcePage');

// ── Сохранение в БД ────────────────────────────────────────────────────────────
$pdo = db();
if ($pdo) {
    try {
        $stmt = $pdo->prepare(
            'INSERT INTO leads (name, phone, tour, preferred_date, guests, children, contact_method, comment, source_page, ip)
             VALUES (:name, :phone, :tour, :date, :guests, :children, :cm, :comment, :src, :ip)'
        );
        $stmt->execute([
            ':name' => $name, ':phone' => $phone, ':tour' => $tour, ':date' => $date,
            ':guests' => $guests, ':children' => $children, ':cm' => $contactMethod,
            ':comment' => $comment, ':src' => $sourcePage, ':ip' => $ip,
        ]);
        $leadId = (int)$pdo->lastInsertId();

        send_lead_email($lead);

        echo json_encode(['success' => true, 'leadId' => $leadId], JSON_UNESCAPED_UNICODE);
        exit;
    } catch (Throwable $e) {
        error_log('[rusin_lead] DB insert failed: ' . $e->getMessage());
        // падаем в резерв ниже
    }
}

// ── Резерв: БД недоступна → лог + письмо ───────────────────────────────────────
$logFile = __DIR__ . '/../../logs/leads_fallback.log';
if (!is_dir(dirname($logFile))) { @mkdir(dirname($logFile), 0750, true); }
@file_put_contents(
    $logFile,
    date('Y-m-d H:i:s') . " | $name | $phone | $tour | $date | $comment\n",
    FILE_APPEND | LOCK_EX
);
send_lead_email($lead);

echo json_encode(['success' => true, 'fallback' => true], JSON_UNESCAPED_UNICODE);
