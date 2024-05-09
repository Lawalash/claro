<?php
session_start();

// Inclui o arquivo de configuração do banco de dados
include('config.php');

// Verifica se os dados do formulário foram enviados e se a sessão está iniciada
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SESSION["nome"])) {
    // Recupera os dados do formulário
    $tipo_servico = $_POST["tipo_servico"];
    $valor = $_POST["valor"];
    $data = $_POST["data"];

    // Verifica se o valor de operador está definido e não está vazio
    if (isset($_SESSION["nome"]) && !empty($_SESSION["nome"])) {
        // Insere os dados no banco de dados
        $sql = "INSERT INTO metrica (operador, tipo_servico, valor, data) VALUES (?, ?, ?, ?)";

        // Prepara a declaração SQL
        $stmt = $conn->prepare($sql);
        
        // Verifica se a preparação foi bem sucedida
        if ($stmt === false) {
            die("Erro ao preparar a consulta: " . $conn->error);
        }

        // Vincula os parâmetros
        $stmt->bind_param("ssds", $_SESSION["nome"], $tipo_servico, $valor, $data);

        // Executa a consulta
        $result = $stmt->execute();

        // Verifica se a consulta foi bem sucedida
        if ($result === false) {
            die("Erro ao inserir os dados: " . $stmt->error);
        }

        // Define uma variável de sessão para exibir a mensagem de sucesso
        $_SESSION["mensagem_sucesso"] = "Venda cadastrada com sucesso!";
    } else {
        // Se o valor de operador não estiver definido ou estiver vazio, define uma mensagem de erro
        $_SESSION["mensagem_erro"] = "Erro: operador não definido.";
    }
}

// Redireciona de volta para o painel de controle com um parâmetro indicando a aba ativa
header("Location: dashboard.php?tab=metrica#metrica");
exit();
?>