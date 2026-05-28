<?php
/**
 * lead.php — приём заявки с формы и создание Задачи в Битрикс24
 *
 * POST /api/lead.php
 * Body: { name, phone, tour, date, guests, children, contactMethod, comment }
 *
 * Ответы:
 *   200 { success: true,  taskId: N }
 *   200 { success: true,  fallback: true }   — Bitrix недоступен, но резерв сработал
 *   400 { success: false, message: "..." }
 *   500 { success: false, message: "..." }
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/bitrix/client.php';

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

// ── Парсинг входящих данных ────────────────────────────────────────────────────
$body = json_decode(file_get_contents('php://input'), true);

if (!$body) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON'], JSON_UNESCAPED_UNICODE);
    exit;
}

// Валидация обязательных полей
$name  = trim($body['name']  ?? '');
$phone = trim($body['phone'] ?? '');

if (!$name || !$phone) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Имя и телефон обязательны'], JSON_UNESCAPED_UNICODE);
    exit;
}

// Санитизация
$tour          = htmlspecialchars($body['tour']          ?? 'Не указана',   ENT_QUOTES, 'UTF-8');
$date          = htmlspecialchars($body['date']          ?? 'Не указана',   ENT_QUOTES, 'UTF-8');
$guests        = intval($body['guests']   ?? 0);
$children      = intval($body['children'] ?? 0);
$contactMethod = htmlspecialchars($body['contactMethod'] ?? 'Не указан',    ENT_QUOTES, 'UTF-8');
$comment       = htmlspecialchars($body['comment']       ?? '',             ENT_QUOTES, 'UTF-8');
$sourcePage    = htmlspecialchars($body['sourcePage']    ?? '',             ENT_QUOTES, 'UTF-8');

// ── Формируем описание задачи ─────────────────────────────────────────────────
$guestsText = $guests . ' взр' . ($children > 0 ? " + $children дет" : '');

$description = <<<TEXT
📋 ЗАЯВКА С САЙТА TRAVELRUSIN.RU

👤 Имя:         $name
📞 Телефон:     $phone
📱 Связь:       $contactMethod

🗺 Экскурсия:   $tour
📅 Дата:        $date
👥 Состав:      $guestsText

💬 Комментарий: $comment

🌐 Источник:    $sourcePage
⏰ Время заявки: {$_SERVER['REQUEST_TIME']} UTC
TEXT;

// Дедлайн задачи — дата экскурсии (или +3 дня если дата не указана)
$deadline = '';
if ($date && $date !== 'Не указана') {
    $ts = strtotime($date);
    if ($ts !== false) {
        $deadline = date('Y-m-d\TH:i:s', $ts);
    }
}
if (!$deadline) {
    $deadline = date('Y-m-d\TH:i:s', strtotime('+3 days'));
}

$taskTitle = "Заявка: $name — $tour ($date)";

// ── Отправка в Битрикс24 ──────────────────────────────────────────────────────
$bitrix = new BitrixClient();

$taskFields = [
    'TITLE'          => $taskTitle,
    'DESCRIPTION'    => $description,
    'RESPONSIBLE_ID' => BITRIX_RESPONSIBLE_ID,
    'DEADLINE'       => $deadline,
    'PRIORITY'       => 1,       // Обычный
    'ALLOW_CHANGE_DEADLINE' => 'Y',
    'UF_CRM_TASK'    => [],      // CRM-связи пока пустые
    'TAGS'           => ['заявка', 'сайт'],
];

$task = $bitrix->taskAdd($taskFields);

if ($task && !empty($task['id'])) {
    // Успешно создана задача
    echo json_encode([
        'success' => true,
        'taskId'  => $task['id'],
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// ── Резерв: Bitrix недоступен ─────────────────────────────────────────────────
$logEntry = date('Y-m-d H:i:s') . " | $name | $phone | $tour | $date\n";
$logFile  = __DIR__ . '/../../logs/leads_fallback.log';

// Создаём директорию logs если нет
if (!is_dir(dirname($logFile))) {
    @mkdir(dirname($logFile), 0750, true);
}
@file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);

// Отправка на email если настроен
if (FALLBACK_EMAIL) {
    $subject = "Новая заявка с сайта: $name";
    $headers = "From: noreply@travelrusin.ru\r\nContent-Type: text/plain; charset=UTF-8";
    @mail(FALLBACK_EMAIL, $subject, $description, $headers);
}

// Пользователю всё равно показываем успех (резерв сработал)
echo json_encode([
    'success'  => true,
    'fallback' => true,
    'message'  => 'Заявка принята (резервный канал)',
], JSON_UNESCAPED_UNICODE);
