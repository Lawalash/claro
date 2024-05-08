<?php
// Iniciando a sessão no início do arquivo
session_start();
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Login</title>
    <!-- Adicionando Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        /* Estilos personalizados */
        img[src*="https://www.000webhost.com/static/default.000webhost.com/images/powered-by-000webhost.png"] {
            display: none;
        }
        .navbar-brand {
            font-size: 1.5rem;
        }
        .btn-sair {
            font-size: 1.2rem;
        }
        .table th, .table td {
            vertical-align: middle;
        }
        .table th {
            width: 20%;
            text-align: center;
        }
        .table td {
            text-align: center;
        }
        #h3 {
            margin-top:20px;
            margin-bottom: 20px;
            text-align: center;
        }
        .table-responsive {
            overflow-x: auto;
        }
        /* Estilos personalizados */
        .coluna-preta {
            background-color: #343a40; /* Cor de fundo para as colunas */
            color: #ffffff; /* Cor do texto para as colunas */
        }

        .resultado-branco {
            background-color: #ffffff; /* Cor de fundo para os resultados */
            color: #000000; /* Cor do texto para os resultados */
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="https://clarovendas.000webhostapp.com/home.html">CLARO RESULTADO</a>
            <?php
                if(empty($_SESSION["nome"])){
                    header("Location: index.php");
                    exit();
                }
                include('lawalash.php');
                echo "Olá, " . $_SESSION["nome"];
                echo "<a href='logout.php' class='btn btn-danger btn-sair'>Sair</a>";
            ?>
        </div>
    </nav>

    <!-- Abas -->
    <ul class="nav nav-tabs mt-4">
        <li class="nav-item">
            <a class="nav-link active" id="resultado-tab" data-toggle="tab" href="#resultado" role="tab" aria-controls="resultado" aria-selected="true">Resultado</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="metrica-tab" data-toggle="tab" href="#metrica" role="tab" aria-controls="metrica" aria-selected="false">Faça sua métrica</a>
        </li>
    </ul>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="tab-content mt-4">
                    <!-- Conteúdo da aba Resultado -->
                    <div class="tab-pane fade show active" id="resultado" role="tabpanel" aria-labelledby="resultado-tab">
                        <h3 id="h3">DETALHES DO OPERADOR</h3>
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                    <?php
                                        // Inclua o arquivo de configuração do banco de dados
                                        include('config.php');

                                        // Consulta SQL para obter os dados do operador
                                        $sql = "SELECT * FROM operadores";
                                        $result = $conn->query($sql);

                                        // Verifica se a consulta retornou algum resultado
                                        if ($result->num_rows > 0) {
                                            // Loop através dos resultados e exibe-os na tabela
                                            while ($row = $result->fetch_assoc()) {
                                                // Exibir informações do operador com cores personalizadas
                                                echo "<tr><th class='coluna-preta'>Login</th><td class='resultado-branco'>" . $row['loguin'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>Nome</th><td class='resultado-branco'>" . $row['nome'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>Valor Vendido</th><td class='resultado-branco'>" . $row['valor_vendido'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>Meta de Vendas</th><td class='resultado-branco'>" . $row['meta_de_vendas'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>% Atingimento</th><td class='resultado-branco'>" . $row['percentual_atingimento'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>Chamadas</th><td class='resultado-branco'>" . $row['chamadas'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>Vendas Instaladas</th><td class='resultado-branco'>" . $row['vendas_instaladas'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>% Meta Conversão</th><td class='resultado-branco'>" . $row['percentual_meta_conversao'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>% Conversão</th><td class='resultado-branco'>" . $row['percentual_conversao'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>Dias Válidos</th><td class='resultado-branco'>" . $row['dias_validos'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>Ausências</th><td class='resultado-branco'>" . $row['ausencias'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>% Presenteísmo</th><td class='resultado-branco'>" . $row['percentual_presenteismo'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>% Atingimento Final</th><td class='resultado-branco'>" . $row['percentual_atingimento_final'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>% Atingimento x Peso</th><td class='resultado-branco'>" . $row['percentual_atingimento_peso'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>Faixa</th><td class='resultado-branco'>" . $row['faixa'] . "</td></tr>";
                                                echo "<tr><th class='coluna-preta'>Valor Final</th><td class='resultado-branco'>" . $row['valor_final'] . "</td></tr>";
                                            }
                                        } else {
                                            // Se não houver resultados, exibe uma mensagem
                                            echo "<tr><td colspan='2'>Nenhum resultado encontrado</td></tr>";
                                        }

                                        // Fechar conexão com o banco de dados
                                        $conn->close();
                                    ?>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Conteúdo da aba Faça sua métrica -->
                    <div class="tab-pane fade" id="metrica" role="tabpanel" aria-labelledby="metrica-tab">
                        <div class="container mt-4">
                            <h3 id="h3">CADASTRAR VENDA</h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <!-- Exibir o formulário para cadastrar venda -->
                                    <form action="processar_venda.php" method="POST">
                                        <div class="form-group">
                                            <label for="tipo_servico">Tipo de Serviço:</label>
                                            <select class="form-control" id="tipo_servico" name="tipo_servico">
                                                <option value="Internet Residencial">Internet Residencial</option>
                                                <option value="Plano de TV">Plano de TV</option>
                                                <option value="Plano Móvel">Plano Móvel</option>
                                                <option value="Telefone Fixo">Telefone Fixo</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="valor">Valor da Venda:</label>
                                            <input type="text" class="form-control" id="valor" name="valor" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="data">Data da Venda:</label>
                                            <input type="date" class="form-control" id="data" name="data" required>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Cadastrar Venda</button>
                                    </form>
                                    
                                    <!-- Exibir a mensagem de sucesso, se existir -->
                                    <?php if (isset($_SESSION["mensagem_sucesso"])): ?>
                                        <div class="alert alert-success mt-4" role="alert">
                                            <?php echo $_SESSION["mensagem_sucesso"]; ?>
                                        </div>
                                        <?php unset($_SESSION["mensagem_sucesso"]); ?> <!-- Limpar a mensagem após exibição -->
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Adicionando Bootstrap JS e dependências -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>