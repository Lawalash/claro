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

    document.getElementById('planBox').addEventListener('click', function() {
        document.getElementById('janelaModalBox').style.display = 'block'; // Usando 'janelaModal750Mega' para o modal do plano 750 Mega
    });
    
    // Função para fechar o modal ao clicar no botão de fechar dentro do modal do plano de 500 Mega
    document.getElementById('janelaModalBox').getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('janelaModalBox').style.display = 'none'; // Usando 'janelaModal500Mega' para o modal do plano 500 Mega
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
        'RIO GRANDE DO SUL':'PROMORS',
        'Almirante Tamandare-PR': 'PROMOBOX',
        'Araucaria-PR': 'PROMOBOX',
        'Cascavel-PR': 'PROMOBOX',
        'Cianorte-PR': 'PROMOBOX',
        'Colombo-PR': 'PROMOBOX',
        'Navegantes-SC': 'PROMOBOX',
        'Pinhais-PR': 'PROMOBOX',
        'Sao Jose Dos Pinhais-PR': 'PROMOBOX',
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
        'Palhoca-SC': 'PROMOBOX',
        'Passo Fundo-RS': 'PROMOBOX',
        'Ponta Grossa-PR': 'PROMOBOX',
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
        'Santa Barbara D Oeste-SP': 'PROMOBOX',
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
        'Volta Redonda-RJ': 'PROMOBOX',
        'Anapolis-GO': 'PROMOBOX',
        'Aparecida De Goiania-GO': 'PROMOBOX',
        'Brasilia-DF': 'PROMOBOX',
        'Campo Grande-MS': 'PROMOBOX',
        'Cuiaba-MT': 'PROMOBOX',
        'Dourados-MS': 'PROMOBOX',
        'Goiania-GO': 'PROMOBOX',
        'Rondonopolis-MT': 'PROMOBOX',
        'Sinop-MT': 'PROMOBOX',
        'Vila Rica-MT': 'PROMOBOX',
        'Arapiraca-AL': 'PROMOBOX',
        'Eusebio-CE': 'PROMOBOX',
        'Fortaleza-CE': 'PROMOBOX',
        'Juazeiro Do Norte-CE': 'PROMOBOX',
        'Maceio-AL': 'PROMOBOX',
        'Mossoro-RN': 'PROMOBOX',
        'Natal-RN': 'PROMOBOX',
        'Parnaiba-PI': 'PROMOBOX',
        'Parnamirim-RN': 'PROMOBOX',
        'Pelotas-RS': 'PROMOBOX',
        'Recife-PE': 'PROMOBOX',
        'Rio Branco-AC': 'PROMOBOX',
        'Santarem-PA': 'PROMOBOX',
        'Sao Luis-MA': 'PROMOBOX',
        'Sobral-CE': 'PROMOBOX',
        'Teresina-PI': 'PROMOBOX',
        'Belterra-PA': 'PROMOBOX',
        'Itaituba-PA': 'PROMOBOX',
        'Salvador-BA': 'PROMOBOX',
        'Camacari-BA': 'PROMOBOX',
        'Feira De Santana-BA': 'PROMOBOX',
        'Ilheus-BA': 'PROMOBOX',
        'Itabuna-BA': 'PROMOBOX',
        'Jequie-BA': 'PROMOBOX',
        'Juazeiro-BA': 'PROMOBOX',
        'Lauro De Freitas-BA': 'PROMOBOX',
        'Porto Seguro-BA': 'PROMOBOX',
        'Simões Filho-BA': 'PROMOBOX',
        'Teixeira De Freitas-BA': 'PROMOBOX',
        'Vitoria Da Conquista-BA': 'PROMOBOX',
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


        'Ararangua-SC': 'PROMOBOX',
        'Cacador-SC': 'PROMOBOX',
        'Castro-PR': 'PROMOBOX',
        'Concordia-SC': 'PROMOBOX',
        'Cornelio Procopio-PR': 'PROMOBOX',
        'Fazenda Rio Grande-PR': 'PROMOBOX',
        'Fraiburgo-SC': 'PROMOBOX',
        'Guaramirim-SC': 'PROMOBOX',
        'Herval DOeste-SC': 'PROMOBOX',
        'Ibipora-PR': 'PROMOBOX',
        'Icara-SC': 'PROMOBOX',
        'Indaial-SC': 'PROMOBOX',
        'Jaragua Do Sul-SC': 'PROMOBOX',
        'Joacaba-SC': 'PROMOBOX',
        'Lages-SC': 'PROMOBOX',
        'Mafra-SC': 'PROMOBOX',
        'Marechal Candido Rondon-PR': 'PROMOBOX',
        'Matinhos-PR': 'PROMOBOX',
        'Medianeira-PR': 'PROMOBOX',
        'Nova Petropolis-RS': 'PROMOBOX',
        'Paicandu-PR': 'PROMOBOX',
        'Palmas-PR': 'PROMOBOX',
        'Paranagua-PR': 'PROMOBOX',
        'Pato Branco-PR': 'PROMOBOX',
        'Piraquara-PR': 'PROMOBOX',
        'Quatro Barras-PR': 'PROMOBOX',
        'Rio Do Sul-SC': 'PROMOBOX',
        'Rio Negrinho-SC': 'PROMOBOX',
        'Rolandia-PR': 'PROMOBOX',
        'Sao Bento Do Sul-SC': 'PROMOBOX',
        'Sao Francisco Do Sul-SC': 'PROMOBOX',
        'Sarandi-PR': 'PROMOBOX',
        'Telemaco Borba-PR': 'PROMOBOX',
        'Timbo-SC': 'PROMOBOX',
        'Toledo-PR': 'PROMOBOX',
        'Tubarao-SC': 'PROMOBOX',
        'Videira-SC': 'PROMOBOX',
        'Xanxere-SC': 'PROMOBOX',
        'Xaxim-SC': 'PROMOBOX',
        'SUDESTE': 'PROMOBOX',
        'Adamantina-SP': 'PROMOBOX',
        'Agudos-SP': 'PROMOBOX',
        'Alfenas-MG': 'PROMOBOX',
        'Aluminio-SP': 'PROMOBOX',
        'Alvares Machado-SP': 'PROMOBOX',
        'Americo Brasiliense-SP': 'PROMOBOX',
        'Amparo-SP': 'PROMOBOX',
        'Andradina-SP': 'PROMOBOX',
        'Aracruz-ES': 'PROMOBOX',
        'Araguari-MG': 'PROMOBOX',
        'Araxa-MG': 'PROMOBOX',
        'Arcos-MG': 'PROMOBOX',
        'Armacao Dos Buzios-RJ': 'PROMOBOX',
        'ArujaSP': 'PROMOBOX',
        'Avare-SP': 'PROMOBOX',
        'Barbacena-MG': 'PROMOBOX',
        'Barretos-SP': 'PROMOBOX',
        'Barrinha-SP': 'PROMOBOX',
        'Batatais-SP': 'PROMOBOX',
        'Bebedouro-SP': 'PROMOBOX',
        'Birigui-SP': 'PROMOBOX',
        'Boituva-SP': 'PROMOBOX',
        'Cabo Frio-RJ': 'PROMOBOX',
        'Cabreuva-SP': 'PROMOBOX',
        'Caieiras-SP': 'PROMOBOX',
        'Cajamar-SP': 'PROMOBOX',
        'Campo Limpo Paulista-SP': 'PROMOBOX',
        'Campos do Jordão-SP': 'PROMOBOX',
        'Caraguatatuba-SP': 'PROMOBOX',
        'Casa Branca-SP': 'PROMOBOX',
        'Cataguases-MG': 'PROMOBOX',
        'Catanduva-SP': 'PROMOBOX',
        'Cerquilho-SP': 'PROMOBOX',
        'Colatina-ES': 'PROMOBOX',
        'Conselheiro Lafaiete-MG': 'PROMOBOX',
        'Cordeiropolis-SP': 'PROMOBOX',
        'Coronel Fabriciano-MG': 'PROMOBOX',
        'Cravinhos-SP': 'PROMOBOX',
        'Descalvado-SP': 'PROMOBOX',
        'Divinópolis-MG': 'PROMOBOX',
        'Dracena-SP': 'PROMOBOX',
        'Espírito Santo do Pinhal-SP': 'PROMOBOX',
        'Fernandópolis-SP': 'PROMOBOX',
        'Formiga-MG': 'PROMOBOX',
        'Garça-SP': 'PROMOBOX',
        'Guaíra-SP': 'PROMOBOX',
        'Guapiacu-SP': 'PROMOBOX',
        'Guararapes-SP': 'PROMOBOX',
        'Guaxupé-MG': 'PROMOBOX',
        'Ibaté-SP': 'PROMOBOX',
        'Ibiúna-SP': 'PROMOBOX',
        'Iperó-SP': 'PROMOBOX',
        'Itabira-MG': 'PROMOBOX',
        'Itaguaí-RJ': 'PROMOBOX',
        'Itajubá-MG': 'PROMOBOX',
        'Itanhaém-SP': 'PROMOBOX',
        'Itapeva-SP': 'PROMOBOX',
        'Itapira-SP': 'PROMOBOX',
        'Itaquaquecetuba-SP': 'PROMOBOX',
        'Itatiba-SP': 'PROMOBOX',
        'Itaúna-MG': 'PROMOBOX',
        'Ituiutaba-MG': 'PROMOBOX',
        'Itupeva-SP': 'PROMOBOX',
        'Ituverava-SP': 'PROMOBOX',
        'Jaboticabal-SP': 'PROMOBOX',
        'Jaguariúna-SP': 'PROMOBOX',
        'Jales-SP': 'PROMOBOX',
        'Jardinópolis-SP': 'PROMOBOX',
        'Jarinu-SP': 'PROMOBOX',
        'João Monlevade-MG': 'PROMOBOX',
        'José Bonifácio-SP': 'PROMOBOX',
        'Lagoa da Prata-MG': 'PROMOBOX',
        'Lagoa Santa-MG': 'PROMOBOX',
        'Laranjal Paulista-SP': 'PROMOBOX',
        'Lavras-MG': 'PROMOBOX',
        'Leme-SP': 'PROMOBOX',
        'Lençóis Paulista-SP': 'PROMOBOX',
        'Leopoldina-MG': 'PROMOBOX',
        'Lins-SP': 'PROMOBOX',
        'Louveira-SP': 'PROMOBOX',
        'Mairinque-SP': 'PROMOBOX',
        'Manhuaçu-MG': 'PROMOBOX',
        'Mariana-MG': 'PROMOBOX',
        'Matão-SP': 'PROMOBOX',
        'Matozinhos-MG': 'PROMOBOX',
        'Miguel Pereira-RJ': 'PROMOBOX',
        'Mirandópolis-SP': 'PROMOBOX',
        'Mirassol-SP': 'PROMOBOX',
        'Mococa-SP': 'PROMOBOX',
        'Mongaguá-SP': 'PROMOBOX',
        'Monte Alto-SP': 'PROMOBOX',
        'Monte Carmelo-MG': 'PROMOBOX',
        'Montes Claros-MG': 'PROMOBOX',
        'Muriaé-MG': 'PROMOBOX',
        'Nova Friburgo-RJ': 'PROMOBOX',
        'Nova Serrana-MG': 'PROMOBOX',
        'Olímpia-SP': 'PROMOBOX',
        'Orlândia-SP': 'PROMOBOX',
        'Ourinhos-SP': 'PROMOBOX',
        'Ouro Preto-MG': 'PROMOBOX',
        'Para De Minas-MG': 'PROMOBOX',
        'Paraiba Do Sul-RJ': 'PROMOBOX',
        'Patos De Minas-MG': 'PROMOBOX',
        'Pedreira-SP': 'PROMOBOX',
        'Pedro Leopoldo-MG': 'PROMOBOX',
        'Penapolis-SP': 'PROMOBOX',
        'Peruibe-SP': 'PROMOBOX',
        'Piedade-SP': 'PROMOBOX',
        'Pirassununga-SP': 'PROMOBOX',
        'Piumhi-MG': 'PROMOBOX',
        'Pocos De Caldas-MG': 'PROMOBOX',
        'Ponte Nova-MG': 'PROMOBOX',
        'Porto Ferreira-SP': 'PROMOBOX',
        'Pouso Alegre-MG': 'PROMOBOX',
        'Presidente Bernardes-SP': 'PROMOBOX',
        'Promissao-SP': 'PROMOBOX',
        'Registro-SP': 'PROMOBOX',
        'Ribeirão Pires-SP': 'PROMOBOX',
        'Sacramento-MG': 'PROMOBOX',
        'Santa Cruz das Palmeiras-SP': 'PROMOBOX',
        'Santa Cruz de Minas-MG': 'PROMOBOX',
        'Santa Cruz do Rio Pardo-SP': 'PROMOBOX',
        'Santa Gertrudes-SP': 'PROMOBOX',
        'Santa Isabel-SP': 'PROMOBOX',
        'Santa Luzia-MG': 'PROMOBOX',
        'Santa Rita do Sapucaí-MG': 'PROMOBOX',
        'Santa Rosa de Viterbo-SP': 'PROMOBOX',
        'São João da Boa Vista-SP': 'PROMOBOX',
        'São João del Rei-MG': 'PROMOBOX',
        'São Joaquim da Barra-SP': 'PROMOBOX',
        'São José do Rio Pardo-SP': 'PROMOBOX',
        'São Pedro da Aldeia-RJ': 'PROMOBOX',
        'São Roque-SP': 'PROMOBOX',
        'São Sebastião do Paraíso-MG': 'PROMOBOX',
        'São Sebastião-SP': 'PROMOBOX',
        'Serra Negra-SP': 'PROMOBOX',
        'Serrana-SP': 'PROMOBOX',
        'Tambau-SP': 'PROMOBOX',
        'Tatuí-SP': 'PROMOBOX',
        'Timóteo-MG': 'PROMOBOX',
        'Tremembé-SP': 'PROMOBOX',
        'Três Corações-MG': 'PROMOBOX',
        'Três Rios-RJ': 'PROMOBOX',
        'Ubá-MG': 'PROMOBOX',
        'Ubatuba-SP': 'PROMOBOX',
        'Valença-RJ': 'PROMOBOX',
        'Valparaíso-SP': 'PROMOBOX',
        'Vargem Paulista-SP': 'PROMOBOX',
        'Vassouras-RJ': 'PROMOBOX',
        'Vespasiano-MG': 'PROMOBOX',
        'Vicosa-MG': 'PROMOBOX',
        'Votuporanga-SP': 'PROMOBOX',
        'Caldas Novas-GO': 'PROMOBOX',
        'Itumbiara-GO': 'PROMOBOX',
        'Lucas do Rio Verde-MT': 'PROMOBOX',
        'Luziania-GO': 'PROMOBOX',
        'Navirai-MS': 'PROMOBOX',
        'Ponta Porã-MS': 'PROMOBOX',
        'Rio Verde-GO': 'PROMOBOX',
        'Santa Helena de Goiás-GO': 'PROMOBOX',
        'Senador Canedo-GO': 'PROMOBOX',
        'Sinop-MT': 'PROMOBOX',
        'Sorriso-MT': 'PROMOBOX',
        'Três Lagoas-MS': 'PROMOBOX',
        'Trindade-GO': 'PROMOBOX',
        'Valparaíso de Goiás-GO': 'PROMOBOX',
        'Araguaína-TO': 'PROMOBOX',
        'Ariquemes-RO': 'PROMOBOX',
        'Cacoal-RO': 'PROMOBOX',
        'Castanhal-PA': 'PROMOBOX',
        'Gurupi-TO': 'PROMOBOX',
        'Ji-Paraná-RO': 'PROMOBOX',
        'Macapá-AP': 'PROMOBOX',
        'Marabá-PA': 'PROMOBOX',
        'Paragominas-PA': 'PROMOBOX',
        'Paraíso do Tocantins-TO': 'PROMOBOX',
        'Santana-AP': 'PROMOBOX',
        'Vilhena-RO': 'PROMOBOX',
        'Alagoinhas-BA': 'PROMOBOX',
        'Aquiraz-CE': 'PROMOBOX',
        'Arapiraca-AL': 'PROMOBOX',
        'Barreiras-BA': 'PROMOBOX',
        'Camaçari-BA': 'PROMOBOX',
        'Caxias-MA': 'PROMOBOX',
        'Eunápolis-BA': 'PROMOBOX',
        'Eusébio-CE': 'PROMOBOX',
        'Feira de Santana-BA': 'PROMOBOX',
        'Ilhéus-BA': 'PROMOBOX',
        'Imperatriz-MA': 'PROMOBOX',
        'Itabuna-BA': 'PROMOBOX',
        'Jequié-BA': 'PROMOBOX',
        'Juazeiro do Norte-CE': 'PROMOBOX',
        'Juazeiro-BA': 'PROMOBOX',
        'Mata de São João-BA': 'PROMOBOX',
        'Mossoró-RN': 'PROMOBOX',
        'Parnaíba-PI': 'PROMOBOX',
        'Petrolina-PE': 'PROMOBOX',
        'Porto Seguro-BA': 'PROMOBOX',
        'Sobral-CE': 'PROMOBOX',
        'Teixeira de Freitas-BA': 'PROMOBOX',
        'Timon-MA': 'PROMOBOX',







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
