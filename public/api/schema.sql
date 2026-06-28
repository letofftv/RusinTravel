-- Таблица заявок с сайта TravelRusin.ru
-- Можно выполнить через phpMyAdmin в панели reg.ru, либо через setup_db.php

CREATE TABLE IF NOT EXISTS leads (
    id             INT AUTO_INCREMENT PRIMARY KEY,
    created_at     DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    name           VARCHAR(255)  NOT NULL,
    phone          VARCHAR(64)   NOT NULL,
    tour           VARCHAR(255)  DEFAULT NULL,
    preferred_date VARCHAR(64)   DEFAULT NULL,
    guests         INT           DEFAULT 0,
    children       INT           DEFAULT 0,
    contact_method VARCHAR(64)   DEFAULT NULL,
    comment        TEXT          DEFAULT NULL,
    source_page    VARCHAR(512)  DEFAULT NULL,
    ip             VARCHAR(64)   DEFAULT NULL,
    status         VARCHAR(32)   NOT NULL DEFAULT 'new',
    INDEX idx_created (created_at),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
