<?php
/**
 * Конфигурация backend TravelRusin.ru
 *
 * СЕКРЕТЫ ЗДЕСЬ НЕ ХРАНЯТСЯ. Этот файл коммитится в git (репозиторий публичный).
 * Реальные значения (пароль БД, хэш пароля админки, вебхуки) задаются в
 * config.local.php — он в .gitignore и лежит только на сервере (заливается по FTP).
 *
 * config.local.php определяет нужные константы ПЕРВЫМ; ниже идут безопасные
 * значения по умолчанию для тех, что не заданы локально.
 */

// Подключаем локальные секреты, если есть (на сервере)
@include __DIR__ . '/config.local.php';

$defaults = [
    // ─── База данных (MySQL) ───
    'DB_HOST'    => 'localhost',
    'DB_NAME'    => '',
    'DB_USER'    => '',
    'DB_PASS'    => '',
    'DB_CHARSET' => 'utf8mb4',

    // ─── Уведомления о заявках ───
    'LEAD_NOTIFY_EMAIL' => '',
    'MAIL_FROM'         => 'noreply@travelrusin.ru',
    'FALLBACK_EMAIL'    => '',

    // ─── Авторизация админки (bcrypt-хэш) ───
    'ADMIN_PASSWORD_HASH' => '',

    // ─── Битрикс24 (опционально, сейчас не используется для заявок) ───
    'BITRIX_WEBHOOK'        => '',
    'BITRIX_RESPONSIBLE_ID' => 0,

    // ─── Сессия / прочее ───
    'SESSION_NAME'     => 'rusin_admin',
    'SESSION_LIFETIME' => 7200,
    'SITE_NAME'        => 'TravelRusin.ru',
    'ALLOWED_ORIGIN'   => '',   // '' = любой; на проде укажите 'https://travelrusin.ru'
];

foreach ($defaults as $k => $v) {
    if (!defined($k)) define($k, $v);
}
