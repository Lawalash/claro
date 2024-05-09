document.addEventListener('DOMContentLoaded', function () {
    var claroTvBoxTab = document.querySelector('.list-itens li:nth-child(2) a');
    var claroTvBoxTable = document.getElementById('claroTvBoxTable');

    claroTvBoxTab.addEventListener('click', function () {
        claroTvBoxTable.style.display = (claroTvBoxTable.style.display === 'none' || claroTvBoxTable.style.display === '') ? 'block' : 'none';
    });

    var toggleButton = document.getElementById('toggleButton');
    var hiddenRows = document.querySelectorAll('.hidden');

    toggleButton.addEventListener('click', function () {
        hiddenRows.forEach(function (row) {
            row.classList.toggle('hidden');
        });
    });

 

// ===============================================================

// Script para mostrar/ocultar janela modal ao clicar no botão "Exibir Lista de Cidades"
var exibirListaButton = document.getElementById('exibirListaButton');
var janelaModal = document.getElementById('janelaModal');

exibirListaButton.addEventListener('click', function () {
    janelaModal.style.display = 'block';
});

// Fechar a janela modal ao clicar no botão de fechar (X)
document.querySelector('.close2').addEventListener('click', function () {
    janelaModal.style.display = 'none';
});

 // Selecionando a lista de cidades e o campo de pesquisa
 var listaCidades = document.querySelectorAll('.list-cidades li');
 var pesquisarCidadeInput = document.getElementById('pesquisarCidade');

// Adicionando evento de clique para cada cidade na lista
listaCidades.forEach(cidade => {
    cidade.addEventListener('click', function () {
        // Obtendo o texto da cidade clicada
        var cidadeSelecionada = this.textContent.trim();
        
        // Preenchendo o campo de pesquisa com a cidade selecionada
        pesquisarCidadeInput.value = cidadeSelecionada;

        // Não fechando a janela modal ao selecionar uma cidade
    });
});

// Evento de clique no botão "Confirmar" dentro do modal
var confirmarCidadeButton = document.getElementById('confirmarCidade');
confirmarCidadeButton.addEventListener('click', function () {
    // Fechando a janela modal ao confirmar a cidade
    janelaModal.style.display = 'none';

    // Função para mostrar a tabela do grupo correspondente à cidade selecionada
    mostrarTabelaDoGrupo(pesquisarCidadeInput.value.trim());
});

// Evento de input para o campo de pesquisa de cidade
pesquisarCidadeInput.addEventListener('input', function () {
    var termoPesquisa = this.value.trim().toLowerCase(); // Obtendo o termo de pesquisa em letras minúsculas

    // Iterando sobre cada cidade na lista para verificar o termo de pesquisa
    listaCidades.forEach(cidade => {
        var nomeCidade = cidade.textContent.trim().toLowerCase(); // Obtendo o nome da cidade em letras minúsculas

        // Verificando se o termo de pesquisa está contido no nome da cidade
        if (nomeCidade.includes(termoPesquisa)) {
            cidade.style.display = 'block'; // Exibindo a cidade se o termo de pesquisa for encontrado
        } else {
            cidade.style.display = 'none'; // Ocultando a cidade se o termo de pesquisa não for encontrado
        }
    });
});

// Função para mostrar a tabela do grupo correspondente à cidade selecionada
function mostrarTabelaDoGrupo(cidadeDigitada) {
    // Mapeamento das cidades para grupos
    const cidadeGrupoMap = {
        'Almirante Tamandare-PR': 'PROMOBOX',
        'Araucaria-PR': 'PROMOBOX',
        'Cascavel-PR': 'PROMOBOX',
        'Cianorte-PR': 'PROMOBOX',
        'Colombo-PR': 'PROMOBOX',
        'Estancia Velha-RS': 'PROMOBOX',
        'Navegantes-SC': 'PROMOBOX',
        'Pinhais-PR': 'PROMOBOX',
        'Sao Jose Dos Pinhais-PR': 'PROMOBOX',
        'Sapiranga-RS': 'PROMOBOX',
        'Xangri-La-RS': 'PROMOBOX',
        'Aparecida-SP': 'PROMOBOX',
        'Barueri-SP': 'PROMOBOX',
        'Belford Roxo-RJ': 'PROMOBOX',
        'Betim-MG': 'PROMOBOX',
        'Botucatu-SP': 'PROMOBOX',
        'Campos Dos Goytacazes-RJ': 'PROMOBOX',
        'Capivari-SP': 'PROMOBOX',
        'Carapicuiba-SP': 'PROMOBOX',
        'Cubatao-SP': 'PROMOBOX',
        'Duque De Caxias-RJ': 'PROMOBOX',
        'Embu Das Artes-SP': 'PROMOBOX',
        'Itapecerica Da Serra-SP': 'PROMOBOX',
        'Itapevi-SP': 'PROMOBOX',
        'Jandira-SP': 'PROMOBOX',
        'Mesquita-RJ': 'PROMOBOX',
        'Mogi Guacu-SP': 'PROMOBOX',
        'Monte Mor-SP': 'PROMOBOX',
        'Nova Odessa-SP': 'PROMOBOX',
        'Porto Feliz-SP': 'PROMOBOX',
        'Potim-SP': 'PROMOBOX',
        'Presidente Prudente-SP': 'PROMOBOX',
        'Rafard-SP': 'PROMOBOX',
        'Rio Das Ostras-RJ': 'PROMOBOX',
        'Sabara-MG': 'PROMOBOX',
        'Alvorada-RS': 'PROMOBOX',
        'Arapongas-PR': 'PROMOBOX',
        'Bage-RS': 'PROMOBOX',
        'Balneario Camboriu-SC': 'PROMOBOX',
        'Bento Goncalves-RS': 'PROMOBOX',
        'Blumenau-SC': 'PROMOBOX',
        'Brusque-SC': 'PROMOBOX',
        'Cachoeirinha-RS': 'PROMOBOX',
        'Campo Bom-RS': 'PROMOBOX',
        'Campo Largo-PR': 'PROMOBOX',
        'Canoas-RS': 'PROMOBOX',
        'Capao Da Canoa-RS': 'PROMOBOX',
        'Caxias Do Sul-RS': 'PROMOBOX',
        'Chapeco-SC': 'PROMOBOX',
        'Criciuma-SC': 'PROMOBOX',
        'Cruz Alta-RS': 'PROMOBOX',
        'Curitiba-PR': 'PROMOBOX',
        'Erechim-RS': 'PROMOBOX',
        'Esteio-RS': 'PROMOBOX',
        'Farroupilha-RS': 'PROMOBOX',
        'Florianopolis-SC': 'PROMOBOX',
        'Gravatai-RS': 'PROMOBOX',
        'Guarapuava-PR': 'PROMOBOX',
        'Itajai-SC': 'PROMOBOX',
        'Itapema-SC': 'PROMOBOX',
        'Joinville-SC': 'PROMOBOX',
        'Lajeado-RS': 'PROMOBOX',




        'Varzea Grande-MT': 'PROMOBOX',
        'Cabedelo-PB': 'PROMOBOX',
        'Campina Grande-PB': 'PROMOBOX',
        'Salto-SP': 'PROMOBOX',
        'Sao Carlos-SP': 'PROMOBOX',
        'Sao Joao De Meriti-RJ': 'PROMOBOX',
        'Sertaozinho-SP': 'PROMOBOX',
        'Taboao Da Serra-SP': 'PROMOBOX',
        'Teofilo Otoni-MG': 'PROMOBOX',
        'Teresopolis-RJ': 'PROMOBOX',
        'Tiete-SP': 'PROMOBOX',
        'Vargem Grande Paulista-SP': 'PROMOBOX',
        'Vinhedo-SP': 'PROMOBOX',
        'Votorantim-SP': 'PROMOBOX',
        'Londrina-PR': 'PROMOBOX',
        'Maringa-PR': 'PROMOBOX',
        'Novo Hamburgo-RS': 'PROMOBOX',
        'Palhoca-SC': 'PROMOBOX',
        'Passo Fundo-RS': 'PROMOBOX',
        'Pelotas-RS': 'PROMOBOX',
        'Ponta Grossa-PR': 'PROMOBOX',
        'Porto Alegre-RS': 'PROMOBOX',
        'Rio Grande-RS': 'PROMOBOX',
        'Santa Cruz Do Sul-RS': 'PROMOBOX',
        'Santa Maria-RS': 'PROMOBOX',
        'Sao Jose-SC': 'PROMOBOX',
        'Sao Leopoldo-RS': 'PROMOBOX',
        'Sapucaia Do Sul-RS': 'PROMOBOX',
        'Uruguaiana-RS': 'PROMOBOX',
        'Viamao-RS': 'PROMOBOX',
        'Americana-SP': 'PROMOBOX',
        'Aracatuba-SP': 'PROMOBOX',
        'Araraquara-SP': 'PROMOBOX',
        'Araras-SP': 'PROMOBOX',
        'Artur Nogueira-SP': 'PROMOBOX',
        'Atibaia-SP': 'PROMOBOX',
        'Barra Mansa-RJ': 'PROMOBOX',
        'Bauru-SP': 'PROMOBOX',
        'Belo Horizonte-MG': 'PROMOBOX',
        'Bertioga-SP': 'PROMOBOX',
        'Braganca Paulista-SP': 'PROMOBOX',
        'Cacapava-SP': 'PROMOBOX',
        'Cachoeira Paulista-SP': 'PROMOBOX',
        'Cachoeiro De Itapemirim-ES': 'PROMOBOX',
        'Campinas-SP': 'PROMOBOX',
        'Cariacica-ES': 'PROMOBOX',
        'Contagem-MG': 'PROMOBOX',
        'Cosmopolis-SP': 'PROMOBOX',
        'Cotia-SP': 'PROMOBOX',
        'Cruzeiro-SP': 'PROMOBOX',
        'Diadema-SP': 'PROMOBOX',
        'Elias Fausto-SP': 'PROMOBOX',
        'Franca-SP': 'PROMOBOX',
        'Governador Valadares-MG': 'PROMOBOX',
        'Guaratingueta-SP': 'PROMOBOX',
        'Guaruja-SP': 'PROMOBOX',
        'Guarulhos-SP': 'PROMOBOX',
        'Hortolandia-SP': 'PROMOBOX',
        'Indaiatuba-SP': 'PROMOBOX',
        'Ipatinga-MG': 'PROMOBOX',
        'Itapetininga-SP': 'PROMOBOX',
        'Itu-SP': 'PROMOBOX',





        'Jacarei-SP': 'PROMOBOX',
        'Jau-SP': 'PROMOBOX',
        'Juiz De Fora-MG': 'PROMOBOX',
        'Jundiai-SP': 'PROMOBOX',
        'Limeira-SP': 'PROMOBOX',
        'Lorena-SP': 'PROMOBOX',
        'Macae-RJ': 'PROMOBOX',
        'Marilia-SP': 'PROMOBOX',
        'Maua-SP': 'PROMOBOX',
        'Mogi Das Cruzes-SP': 'PROMOBOX',
        'Mogi Mirim-SP': 'PROMOBOX',
        'Nilopolis-RJ': 'PROMOBOX',
        'Niteroi-RJ': 'PROMOBOX',
        'Nova Iguacu-RJ': 'PROMOBOX',
        'Nova Lima-MG': 'PROMOBOX',
        'Osasco-SP': 'PROMOBOX',
        'Paulinia-SP': 'PROMOBOX',
        'Petropolis-RJ': 'PROMOBOX',
        'Pindamonhangaba-SP': 'PROMOBOX',
        'Piracicaba-SP': 'PROMOBOX',
        'Poa-SP': 'PROMOBOX',
        'Praia Grande-SP': 'PROMOBOX',
        'Resende-RJ': 'PROMOBOX',
        'Ribeirao Preto-SP': 'PROMOBOX',
        'Rio Claro-SP': 'PROMOBOX',
        'Rio De Janeiro-RJ': 'PROMOBOX',
        'Santa Barbara D\'Oeste-SP': 'PROMOBOX',
        'Santana De Parnaiba-SP': 'PROMOBOX',
        'Santo Andre-SP': 'PROMOBOX',
        'Santos-SP': 'PROMOBOX',
        'Sao Bernardo Do Campo-SP': 'PROMOBOX',
        'Sao Caetano Do Sul-SP': 'PROMOBOX',
        'Sao Goncalo-RJ': 'PROMOBOX',
        'Sao Jose Do Rio Preto-SP': 'PROMOBOX',
        'Sao Jose Dos Campos-SP': 'PROMOBOX',
        'Sao Paulo-SP': 'PROMOBOX',
        'Sao Vicente-SP': 'PROMOBOX',
        'Serra-ES': 'PROMOBOX',
        'Sete Lagoas-MG': 'PROMOBOX',
        'Sorocaba-SP': 'PROMOBOX',
        'Sumare-SP': 'PROMOBOX',
        'Suzano-SP': 'PROMOBOX',
        'Taubate-SP': 'PROMOBOX',
        'Uberaba-MG': 'PROMOBOX',
        'Uberlandia-MG': 'PROMOBOX',
        'Valinhos-SP': 'PROMOBOX',
        'Varginha-MG': 'PROMOBOX',
        'Vila Velha-ES': 'PROMOBOX',
        'Vitoria-ES': 'PROMOBOX',





        'Volta Redonda-RJ': 'SUDESTE',
        'Anapolis-GO': 'CENTRO-OESTE',
        'Aparecida De Goiania-GO': 'CENTRO-OESTE',
        'Brasilia-DF': 'CENTRO-OESTE',
        'Campo Grande-MS': 'CENTRO-OESTE',
        'Cuiaba-MT': 'CENTRO-OESTE',
        'Dourados-MS': 'CENTRO-OESTE',
        'Goiania-GO': 'CENTRO-OESTE',
        'Rondonopolis-MT': 'CENTRO-OESTE',

        'Ananindeua-PA': 'NORTE',
        'Belem-PA': 'NORTE',
        'Manaus-AM': 'NORTE',
        'Palmas-TO': 'NORTE',
        'Porto Velho-RO': 'NORTE',
        'Rio Branco-AC': 'NORTE',
        'Aracaju-SE': 'NORDESTE',
        'Caruaru-PE': 'NORDESTE',
        'Fortaleza-CE': 'NORDESTE',
        'Jaboatao Dos Guararapes-PE': 'NORDESTE',
        'Joao Pessoa-PB': 'NORDESTE',
        'Lauro De Freitas-BA': 'NORDESTE',
        'Maceio-AL': 'NORDESTE',
        'Natal-RN': 'NORDESTE',
        'Olinda-PE': 'NORDESTE',
        'Parnamirim-RN': 'NORDESTE',
        'Paulista-PE': 'NORDESTE',
        'Recife-PE': 'NORDESTE',
        'Salvador-BA': 'NORDESTE',
        'Sao Luis-MA': 'NORDESTE',
        'Teresina-PI': 'NORDESTE',
        'Vitoria Da Conquista-BA': 'NORDESTE',

        'Volta Redonda-RJ': 'PROMOBOX',
        'Anapolis-GO': 'PROMOBOX',
        'Aparecida De Goiania-GO': 'PROMOBOX',
        'Brasilia-DF': 'PROMOBOX',
        'Campo Grande-MS': 'PROMOBOX',
        'Cuiaba-MT': 'PROMOBOX',
        'Dourados-MS': 'PROMOBOX',
        'Goiania-GO': 'PROMOBOX',
        'Rondonopolis-MT': 'PROMOBOX',
        'Ananindeua-PA': 'PROMOBOX',
        'Belem-PA': 'PROMOBOX',
        'Manaus-AM': 'PROMOBOX',
        'Palmas-TO': 'PROMOBOX',
        'Porto Velho-RO': 'PROMOBOX',
        'Rio Branco-AC': 'PROMOBOX',
        'Aracaju-SE': 'PROMOBOX',
        'Caruaru-PE': 'PROMOBOX',
        'Fortaleza-CE': 'PROMOBOX',
        'Jaboatao Dos Guararapes-PE': 'PROMOBOX',
        'Joao Pessoa-PB': 'PROMOBOX',
        'Lauro De Freitas-BA': 'PROMOBOX',
        'Maceio-AL': 'PROMOBOX',
        'Natal-RN': 'PROMOBOX',
        'Olinda-PE': 'PROMOBOX',
        'Parnamirim-RN': 'PROMOBOX',
        'Paulista-PE': 'PROMOBOX',
        'Recife-PE': 'PROMOBOX',
        'Salvador-BA': 'PROMOBOX',
        'Sao Luis-MA': 'PROMOBOX',
        'Teresina-PI': 'PROMOBOX',
        'Vitoria Da Conquista-BA': 'PROMOBOX',

};
        // Verifica se a cidade está no mapeamento
        if (cidadeGrupoMap.hasOwnProperty(cidadeDigitada)) {
            const grupoCidade = cidadeGrupoMap[cidadeDigitada];
            mostrarTabela(grupoCidade);
        } else {
            respostaOferta.innerHTML = '<span style="color: red; font-weight: bold;">Cidade não encontrada ou não possui oferta.</span>';
            respostaOferta.style.display = 'block';
        }
        }



        // Função para mostrar a tabela do grupo selecionado
        function mostrarTabela(grupo) {
        // Oculta todas as tabelas
        document.querySelectorAll('.tabela-grupo').forEach(tabela => {
            tabela.style.display = 'none';
        });

        // Mostra a tabela do grupo selecionado
        const tabelaDoGrupo = document.getElementById(grupo);
        if (tabelaDoGrupo) {
            // Adiciona a classe "tabela-escondida" para ocultar a tabela inicialmente
            tabelaDoGrupo.classList.add('tabela-escondida');
            tabelaDoGrupo.style.display = 'block';
        } else {
            respostaOferta.innerHTML = '<span style="color: red; font-weight: bold;">Grupo sem tabela correspondente.</span>';
            respostaOferta.style.display = 'block';
        }
        }

        // Convertendo o nome da cidade digitada para minúsculas
        cidadeDigitada = cidadeDigitada.toLowerCase();

        if (cidadesDisponiveis.includes(cidadeDigitada)) {
        respostaOferta.innerHTML = '<span style="color: green; font-weight: bold;">A cidade ' + cidadeDigitada + ' possui uma oferta disponível.</span>';
        respostaOferta.style.display = 'block'; // Mostra o elemento respostaOferta
        setTimeout(function () {
            respostaOferta.style.display = 'none'; // Esconde o elemento após 6 segundos
        }, 6000); // 6 segundos em milissegundos
        } else {
        respostaOferta.innerHTML = '<span style="color: red; font-weight: bold;">Não há oferta disponível para a cidade ' + cidadeDigitada + '.</span>';
        respostaOferta.style.display = 'block'; // Mostra o elemento respostaOferta
        setTimeout(function () {
            respostaOferta.style.display = 'none'; // Esconde o elemento após 6 segundos
        }, 6000); // 6 segundos em milissegundos
        }


});
