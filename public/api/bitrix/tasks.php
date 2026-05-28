<?php
/**
 * bitrix/tasks.php — список задач для дашборда
 *
 * GET /api/bitrix/tasks.php
 * Защищён guard (только авторизованный администратор).
 *
 * Возвращает: { success: true, tasks: [...], stats: { total, new, confirmed, done } }
 */

require_once dirname(__DIR__) . '/guard.php';
require_once __DIR__ . '/client.php';

// ── CORS ──────────────────────────────────────────────────────────────────────
$origin = ALLOWED_ORIGIN ?: '*';
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

$bitrix = new BitrixClient();

// Задачи с тегом 'сайт', последние 100
$tasks = $bitrix->taskList(
    ['TAG' => 'сайт'],
    ['ID', 'TITLE', 'STATUS', 'CREATED_DATE', 'DEADLINE', 'DESCRIPTION', 'RESPONSIBLE_ID', 'CREATED_BY']
);

// Статусы Bitrix24: 1-не начата, 2-ожидает, 3-в работе, 4-ждёт контроля, 5-завершена
$statusMap = [
    '1' => 'new',
    '2' => 'pending',
    '3' => 'in_progress',
    '4' => 'review',
    '5' => 'done',
];

$stats = ['total' => 0, 'new' => 0, 'in_progress' => 0, 'done' => 0];

$result = array_map(function ($t) use ($statusMap, &$stats) {
    $status = $statusMap[$t['STATUS'] ?? '1'] ?? 'new';
    $stats['total']++;
    if ($status === 'new') $stats['new']++;
    if ($status === 'in_progress') $stats['in_progress']++;
    if ($status === 'done') $stats['done']++;

    // Достаём имя+телефон из описания задачи (первые строки)
    $desc = $t['DESCRIPTION'] ?? '';
    preg_match('/👤 Имя:\s*(.+)/u', $desc, $mName);
    preg_match('/📞 Телефон:\s*(.+)/u', $desc, $mPhone);
    preg_match('/🗺 Экскурсия:\s*(.+)/u', $desc, $mTour);

    return [
        'id'           => $t['ID'],
        'title'        => $t['TITLE'],
        'status'       => $status,
        'createdDate'  => $t['CREATED_DATE'] ?? '',
        'deadline'     => $t['DEADLINE'] ?? '',
        'clientName'   => trim($mName[1]  ?? ''),
        'clientPhone'  => trim($mPhone[1] ?? ''),
        'tour'         => trim($mTour[1]  ?? ''),
    ];
}, $tasks);

echo json_encode([
    'success' => true,
    'tasks'   => $result,
    'stats'   => $stats,
], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
