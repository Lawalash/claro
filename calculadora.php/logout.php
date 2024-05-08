<?php
    session_start();
    unset($_SESSION['operadores']);
    unset($_SESSION['nome']);
    unset($_SESSION['tipo']);
    session_destroy();
    header("Location: index.php");
    exit;
?>