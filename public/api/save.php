<?php
/**
 * Серверный скрипт для сохранения контента в JSON файл.
 * Предназначен для работы на хостингах типа Reg.ru с поддержкой PHP.
 */

// Разрешаем запросы (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем JSON данные из тела запроса
    $jsonContent = file_get_contents('php://input');
    
    // Проверяем, что это валидный JSON
    if (json_decode($jsonContent) !== null) {
        $filePath = '../data/content.json';
        
        // Пытаемся записать файл
        if (file_put_contents($filePath, $jsonContent)) {
            http_response_code(200);
            echo json_encode(["status" => "success", "message" => "Content updated successfully"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "message" => "Could not write to file. Check permissions."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid JSON data"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Only POST method allowed"]);
}
?>
