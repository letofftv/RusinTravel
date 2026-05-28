<?php
/**
 * guard.php — защита admin-эндпоинтов
 *
 * Подключается в начале каждого защищённого PHP-файла:
 *   require_once __DIR__ . '/guard.php';
 *
 * Если сессия не активна — возвращает 401 и прерывает выполнение.
 */

require_once __DIR__ . '/config.php';

ini_set('session.cookie_httponly', 1);
ini_set('session.gc_maxlifetime', SESSION_LIFETIME);
session_name(SESSION_NAME);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (empty($_SESSION['admin']) || $_SESSION['admin'] !== true) {
    header("Content-Type: application/json; charset=UTF-8");
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Требуется авторизация'], JSON_UNESCAPED_UNICODE);
    exit;
}

// Продлить сессию при активности
$_SESSION['last_active'] = time();
