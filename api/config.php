<?php
$host = 'localhost';
$dbname = 'id21967405_lawalash';
$user = 'id21967405_lawalash';
$pass = '@Twilight122';

// Conectando ao banco de dados
$conn = new mysqli($host, $user, $pass, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}
?>
