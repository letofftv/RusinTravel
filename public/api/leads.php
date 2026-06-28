<?php
/**
 * leads.php — список заявок из БД для админ-дашборда.
 * Защищён guard (только авторизованный администратор).
 *
 * GET /api/leads.php → { success, leads: [...], stats: {...} }
 */

require_once __DIR__ . '/guard.php';
require_once __DIR__ . '/db.php';

$origin = ALLOWED_ORIGIN ?: '*';
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

$pdo = db();
if (!$pdo) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'БД не настроена'], JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    $rows = $pdo->query(
        'SELECT id, created_at, name, phone, tour, preferred_date, guests, children,
                contact_method, comment, status
         FROM leads ORDER BY created_at DESC LIMIT 100'
    )->fetchAll();

    $stats = ['total' => 0, 'new' => 0, 'in_progress' => 0, 'done' => 0];
    $leads = array_map(function ($r) use (&$stats) {
        $st = $r['status'] ?: 'new';
        $stats['total']++;
        if (isset($stats[$st])) $stats[$st]++;
        return [
            'id'            => (int)$r['id'],
            'createdAt'     => $r['created_at'],
            'name'          => $r['name'],
            'phone'         => $r['phone'],
            'tour'          => $r['tour'],
            'date'          => $r['preferred_date'],
            'guests'        => (int)$r['guests'],
            'children'      => (int)$r['children'],
            'contactMethod' => $r['contact_method'],
            'comment'       => $r['comment'],
            'status'        => $st,
        ];
    }, $rows);

    echo json_encode(['success' => true, 'leads' => $leads, 'stats' => $stats], JSON_UNESCAPED_UNICODE);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => $e->getMessage()], JSON_UNESCAPED_UNICODE);
}
