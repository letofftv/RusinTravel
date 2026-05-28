<?php
/**
 * client.php — обёртка над Bitrix24 REST API
 *
 * Использует вебхук из config.php.
 * Никогда не подключается напрямую из фронтенда — только через PHP.
 */

require_once dirname(__DIR__) . '/config.php';

class BitrixClient {

    private string $webhook;

    public function __construct() {
        $this->webhook = rtrim(BITRIX_WEBHOOK, '/');
    }

    /**
     * Вызвать метод Bitrix24 REST API
     *
     * @param string $method  Например: 'tasks.task.add'
     * @param array  $params  Параметры метода
     * @return array          Ответ API (ключи 'result', 'error', 'error_description')
     */
    public function call(string $method, array $params = []): array {
        $url = "{$this->webhook}/{$method}.json";

        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => http_build_query($this->flattenParams($params)),
            CURLOPT_TIMEOUT        => 10,
            CURLOPT_SSL_VERIFYPEER => true,
        ]);

        $raw = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);

        if ($curlError) {
            return ['error' => 'curl_error', 'error_description' => $curlError];
        }

        $data = json_decode($raw, true);
        if ($data === null) {
            return ['error' => 'json_parse_error', 'error_description' => $raw, 'http_code' => $httpCode];
        }

        return $data;
    }

    /**
     * Создать задачу (заявку)
     *
     * @param array $fields  Поля задачи (TITLE, DESCRIPTION, DEADLINE, ...)
     * @return array|null    Данные созданной задачи или null при ошибке
     */
    public function taskAdd(array $fields): ?array {
        $result = $this->call('tasks.task.add', ['fields' => $fields]);
        return $result['result']['task'] ?? null;
    }

    /**
     * Получить список задач
     *
     * @param array $filter  Фильтр задач
     * @param array $select  Список полей
     * @param int   $limit   Лимит
     * @return array
     */
    public function taskList(array $filter = [], array $select = [], int $limit = 50): array {
        $params = [
            'order'  => ['CREATED_DATE' => 'DESC'],
            'filter' => $filter,
            'select' => $select ?: ['ID', 'TITLE', 'STATUS', 'CREATED_DATE', 'DESCRIPTION', 'RESPONSIBLE_ID'],
            'params' => ['PAGING' => ['PAGE_SIZE' => $limit]],
        ];
        $result = $this->call('tasks.task.list', $params);
        return $result['result']['tasks'] ?? [];
    }

    /**
     * Рекурсивно разворачивает вложенные массивы в формат a[key]=value для curl
     */
    private function flattenParams(array $params, string $prefix = ''): array {
        $result = [];
        foreach ($params as $key => $value) {
            $fullKey = $prefix ? "{$prefix}[{$key}]" : $key;
            if (is_array($value)) {
                $result = array_merge($result, $this->flattenParams($value, $fullKey));
            } else {
                $result[$fullKey] = $value;
            }
        }
        return $result;
    }
}
