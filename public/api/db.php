<?php
/**
 * db.php — подключение к MySQL через PDO.
 *
 * Использование:
 *   require_once __DIR__ . '/db.php';
 *   $pdo = db();              // null, если БД не настроена/недоступна
 */

require_once __DIR__ . '/config.php';

function db(): ?PDO {
    static $pdo = null;
    static $tried = false;

    if ($tried) return $pdo;
    $tried = true;

    if (!defined('DB_NAME') || DB_NAME === '' || DB_USER === '') {
        return null; // БД ещё не настроена
    }

    $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET;
    try {
        $pdo = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]);
    } catch (Throwable $e) {
        error_log('[rusin_db] connect failed: ' . $e->getMessage());
        $pdo = null;
    }
    return $pdo;
}
