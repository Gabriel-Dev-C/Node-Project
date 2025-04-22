<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = $_POST;
    
        $filePath = 'data.json';
    
        // Carrega os dados existentes no arquivo
        $existingData = file_exists($filePath) ? json_decode(file_get_contents($filePath), true) : [];
    
        // Adiciona o novo registro
        $existingData[] = $data;
    
        // Salva os dados atualizados no arquivo
        if (file_put_contents($filePath, json_encode($existingData, JSON_PRETTY_PRINT))) {
            echo json_encode(["status" => "success", "message" => "Dados salvos com sucesso!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Erro ao salvar os dados."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Método não permitido"]);
    }
?>