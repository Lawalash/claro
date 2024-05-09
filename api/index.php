<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div><a href="https://clarovendas.000webhostapp.com/home.html">Clique aqui para voltar</a></div>
    </header>
    <div class="login-container">
        <h2>Sistema de Login</h2>
        <form action="login.php" method="POST" class="login-form">
            <div>
                <label for="usuario" class="form-label">Usuário</label>
                <input type="text" name="usuario" id="usuario" class="form-control">
            </div>
            <div>
                <label for="senha" class="form-label">Senha</label>
                <input type="password" name="senha" id="senha" class="form-control">
            </div>
            <div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
    <!-- Botão para retornar à página padrão -->
</body>
</html>
