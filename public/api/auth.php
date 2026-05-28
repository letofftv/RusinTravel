<?php
/**
 * auth.php — авторизация администратора
 *
 * POST /api/auth.php { "action": "login",  "password": "..." }
 * POST /api/auth.php { "action": "logout" }
 * GET  /api/auth.php → { "authenticated": true/false }
 */

require_once __DIR__ . '/config.php';

// ── CORS ──────────────────────────────────────────────────────────────────────
$origin = ALLOWED_ORIGIN ?: '*';
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

// ── Сессия ────────────────────────────────────────────────────────────────────
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_samesite', 'Lax');
ini_set('session.gc_maxlifetime', SESSION_LIFETIME);
session_name(SESSION_NAME);
session_start();

// ── Вспомогательные функции ───────────────────────────────────────────────────
function json_out(array $data, int $code = 200): void {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function is_authenticated(): bool {
    return !empty($_SESSION['admin']) && $_SESSION['admin'] === true;
}

// ── GET — проверить статус сессии ─────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    json_out(['authenticated' => is_authenticated()]);
}

// ── POST ──────────────────────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body = json_decode(file_get_contents('php://input'), true);
    $action = $body['action'] ?? '';

    // Logout
    if ($action === 'logout') {
        $_SESSION = [];
        session_destroy();
        json_out(['success' => true]);
    }

    // Login
    if ($action === 'login') {
        $password = $body['password'] ?? '';

        if ($password && password_verify($password, ADMIN_PASSWORD_HASH)) {
            session_regenerate_id(true);
            $_SESSION['admin'] = true;
            $_SESSION['login_time'] = time();
            json_out(['success' => true, 'authenticated' => true]);
        } else {
            // Rate-limit hint (не блокируем, но фиксируем в логе)
            error_log('[rusin_auth] Failed login attempt from ' . ($_SERVER['REMOTE_ADDR'] ?? '?'));
            json_out(['success' => false, 'message' => 'Неверный пароль'], 401);
        }
    }

    json_out(['success' => false, 'message' => 'Неизвестное действие'], 400);
}

json_out(['success' => false, 'message' => 'Метод не поддерживается'], 405);
