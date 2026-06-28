<?php
/**
 * Конфигурация backend TravelRusin.ru
 *
 * ВАЖНО: этот файл НЕ должен отдаваться браузеру напрямую.
 * Защита через .htaccess (Deny from all для config.php).
 * На reg.ru дополнительно вынесите секреты в переменные окружения ispmanager.
 */

// ─── Битрикс24 ────────────────────────────────────────────────────────────────
// Входящий вебхук. Никогда не попадает в JS-бандл.
define('BITRIX_WEBHOOK', 'https://b24-vwlq3l.bitrix24.ru/rest/13/REMOVED_BITRIX_WEBHOOK_TOKEN/');

// ID пользователя Битрикс24, который будет ответственным за задачи-заявки
// Узнать: в Битриксе → Сотрудники → свой профиль → ID в URL
define('BITRIX_RESPONSIBLE_ID', 13);

// ─── Авторизация админки ──────────────────────────────────────────────────────
// Хэш пароля (bcrypt). Сгенерировать новый:
//   php -r "echo password_hash('ВАШ_ПАРОЛЬ', PASSWORD_BCRYPT);"
// Текущий хэш соответствует 'admin123' — СМЕНИТЕ перед деплоем на прод!
define('ADMIN_PASSWORD_HASH', 'REMOVED_ADMIN_HASH');

// ─── Настройки сессии ─────────────────────────────────────────────────────────
define('SESSION_NAME', 'rusin_admin');
define('SESSION_LIFETIME', 7200); // 2 часа в секундах

// ─── База данных (MySQL, reg.ru) ──────────────────────────────────────────────
// Создайте БД в панели reg.ru (ispmanager → Базы данных) и впишите данные сюда.
// Хост на shared-хостинге reg.ru почти всегда 'localhost'.
define('DB_HOST', 'localhost');
define('DB_NAME', '');   // напр. u3301450_rusin
define('DB_USER', '');   // напр. u3301450_rusin
define('DB_PASS', '');   // пароль пользователя БД
define('DB_CHARSET', 'utf8mb4');

// ─── Уведомления о заявках ────────────────────────────────────────────────────
// Куда слать письмо при каждой новой заявке.
define('LEAD_NOTIFY_EMAIL', 'nick.rusin2016@yandex.ru');
define('MAIL_FROM', 'noreply@travelrusin.ru');

// Резервный email (если БД недоступна — заявка всё равно уйдёт письмом + в лог)
define('FALLBACK_EMAIL', 'nick.rusin2016@yandex.ru');
define('SITE_NAME', 'TravelRusin.ru');

// ─── Разрешённый origin для CORS ─────────────────────────────────────────────
define('ALLOWED_ORIGIN', '');       // '' = любой. На проде укажите домен: 'https://travelrusin.ru'
