<?php
session_start();

if (empty($_POST) || empty($_POST["usuario"]) || empty($_POST["senha"])) {
    print "<script> alert('Por favor, preencha todos os campos'); location.href='index.php';</script>";
    exit;
}

include('config.php');

$usuario = $_POST["usuario"];
$senha = $_POST["senha"];

// Use prepared statements para evitar SQL Injection
$stmt = $conn->prepare("SELECT * FROM operadores WHERE loguin = ? AND senha = ?");
$stmt->bind_param("ss", $usuario, $senha);
$stmt->execute();
$res = $stmt->get_result();

if (!$res) {
    die("Erro na consulta SQL: " . $conn->error);
}

$row = $res->fetch_object();
$qtd = $res->num_rows;

if ($qtd > 0) {
    $_SESSION["usuario"] = $usuario;
    $_SESSION["nome"] = $row->nome;
    $_SESSION["tipo"] = $row->tipo; // Certifique-se de que "tipo" existe na sua tabela
    print "<script>location.href='dashboard.php';</script>";
    exit;
} else {
    print "<script>alert('Usuário e/ou senha incorretos(s)');</script>";
    print "<script>location.href='index.php';</script>";
    exit;
}
?>
