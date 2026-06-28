<?php
/**
 * setup_db.php — ОДНОРАЗОВАЯ инициализация БД (создаёт таблицу leads).
 *
 * Запуск: /api/setup_db.php?key=rusin_setup_2026
 * ПОСЛЕ УСПЕШНОГО ЗАПУСКА ЭТОТ ФАЙЛ НУЖНО УДАЛИТЬ.
 */

require_once __DIR__ . '/db.php';
header('Content-Type: application/json; charset=UTF-8');

if (($_GET['key'] ?? '') !== 'rusin_setup_2026') {
    http_response_code(403);
    echo json_encode(['error' => 'forbidden'], JSON_UNESCAPED_UNICODE);
    exit;
}

$pdo = db();
if (!$pdo) {
    http_response_code(500);
    echo json_encode(['error' => 'DB не настроена или недоступна (проверьте config.php)'], JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    $sql = file_get_contents(__DIR__ . '/schema.sql');
    $pdo->exec($sql);
    $cnt = $pdo->query('SELECT COUNT(*) AS c FROM leads')->fetch();
    echo json_encode([
        'success' => true,
        'message' => 'Таблица leads готова. УДАЛИТЕ setup_db.php.',
        'rows'    => (int)$cnt['c'],
    ], JSON_UNESCAPED_UNICODE);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()], JSON_UNESCAPED_UNICODE);
}
