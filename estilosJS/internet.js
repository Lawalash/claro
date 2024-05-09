document.addEventListener('DOMContentLoaded', function () {
    var internetTab = document.querySelector('.list-itens li:nth-child(1) a'); // Selecione o link da aba "INTERNET"
    var internetTable = document.getElementById('internetTable'); // Selecione a div da tabela

    internetTab.addEventListener('click', function () {
        // Alterna a visibilidade da tabela ao clicar na aba "INTERNET"
        internetTable.style.display = (internetTable.style.display === 'none' || internetTable.style.display === '') ? 'block' : 'none';
    });
});



//BOTÃO OF750
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('of750Button'); // ID do botão
    var ofertaRentabilidade = document.querySelectorAll('.of750'); // Classe das linhas
    toggleButton.addEventListener('click', function () {
        ofertaRentabilidade.forEach(function (linha) {
            linha.classList.toggle('hidden');
        });
    });
});

//BOTÃO OF500
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('of500Button'); // ID do botão
    var ofertaRentabilidade = document.querySelectorAll('.of500'); // Classe das linhas
    toggleButton.addEventListener('click', function () {
        ofertaRentabilidade.forEach(function (linha) {
            linha.classList.toggle('hidden');
        });
    });
});

//BOTÃO OF350
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('of350Button'); // ID do botão
    var ofertaRentabilidade = document.querySelectorAll('.of350'); // Classe das linhas
    toggleButton.addEventListener('click', function () {
        ofertaRentabilidade.forEach(function (linha) {
            linha.classList.toggle('hidden');
        });
    });
});

//==============================================================

// PLANO 1 GIGA
// Função para abrir o modal ao passar o mouse e clicar na tabela
document.getElementById('plan1').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() !== 'th') { // Verifica se o elemento clicado não é o th
        document.getElementById('janelaModal1').style.display = 'block'; // Usando 'janelaModal1' para o modal do plano 1 GIGA
    }
});

// Função para fechar o modal ao clicar no botão de fechar dentro do modal
document.querySelector('#janelaModal1 .close').addEventListener('click', function() {
    document.getElementById('janelaModal1').style.display = 'none'; // Usando 'janelaModal1' para o modal do plano 1 GIGA
});




// PLANO 750 MEGAS
// Função para abrir o modal do plano de 750 Mega ao passar o mouse e clicar na tabela
document.getElementById('plan750Mega').addEventListener('click', function() {
    document.getElementById('janelaModal750Mega').style.display = 'block'; // Usando 'janelaModal750Mega' para o modal do plano 750 Mega
});

// Função para fechar o modal ao clicar no botão de fechar
document.getElementsByClassName('close')[1].addEventListener('click', function() {
    document.getElementById('janelaModal750Mega').style.display = 'none'; // Usando 'janelaModal750Mega' para o modal do plano 750 Mega
});


// PLANO 500 MEGAS
// Função para abrir o modal do plano de 500 Mega ao passar o mouse e clicar na tabela
document.getElementById('plan500Mega').addEventListener('click', function() {
    document.getElementById('janelaModal500Mega').style.display = 'block'; // Usando 'janelaModal500Mega' para o modal do plano 500 Mega
});

// Função para fechar o modal ao clicar no botão de fechar dentro do modal do plano de 500 Mega
document.getElementById('janelaModal500Mega').getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('janelaModal500Mega').style.display = 'none'; // Usando 'janelaModal500Mega' para o modal do plano 500 Mega
});


// PLANO 350 MEGAS
// Função para abrir o modal do plano de 350 Mega ao passar o mouse e clicar na tabela
document.getElementById('plan350Mega').addEventListener('click', function() {
    document.getElementById('janelaModal350Mega').style.display = 'block'; // Usando 'janelaModal350Mega' para o modal do plano 350 Mega
});

// Função para fechar o modal ao clicar no botão de fechar dentro do modal do plano de 350 Mega
document.getElementById('janelaModal350Mega').getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('janelaModal350Mega').style.display = 'none'; // Usando 'janelaModal350Mega' para o modal do plano 350 Mega
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
        'Cascavel-PR': 'ESPECIAL+ COM PROMO 3M',
    'Cianorte-PR': 'ESPECIAL+ COM PROMO 3M',
    'Estancia Velha-RS': 'ESPECIAL+ COM PROMO 3M',
    'Navegantes-SC': 'ESPECIAL+ COM PROMO 3M',
    'Sapiranga-RS': 'ESPECIAL+ COM PROMO 3M',
    'Xangri-La-RS': 'ESPECIAL+ COM PROMO 3M',
    'Aparecida-SP': 'ESPECIAL+ COM PROMO 3M',
    'Belford Roxo-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Betim-MG': 'ESPECIAL+ COM PROMO 3M',
    'Botucatu-SP': 'ESPECIAL+ COM PROMO 3M',
    'Campos Dos Goytacazes-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Duque De Caxias-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Nova Odessa-SP': 'ESPECIAL+ COM PROMO 3M',
    'Potim-SP': 'ESPECIAL+ COM PROMO 3M',
    'Presidente Prudente-SP': 'ESPECIAL+ COM PROMO 3M',
    'Rio Das Ostras-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Sao Joao De Meriti-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Teofilo Otoni-MG': 'ESPECIAL+ COM PROMO 3M',
    'Teresopolis-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Campina Grande-PB': 'ESPECIAL+ COM PROMO 3M',
    'Alegrete-RS': 'ESPECIAL+ COM PROMO 3M',
    'Ararangua-SC': 'ESPECIAL+ COM PROMO 3M',
    'Arroio Do Meio-RS': 'ESPECIAL+ COM PROMO 3M',
    'Cacador-SC': 'ESPECIAL+ COM PROMO 3M',
    'Cachoeira Do Sul-RS': 'ESPECIAL+ COM PROMO 3M',
    'Camaqua-RS': 'ESPECIAL+ COM PROMO 3M',
    'Camboriu-SC': 'ESPECIAL+ COM PROMO 3M',
    'Canela-RS': 'ESPECIAL+ COM PROMO 3M',
    'Carazinho-RS': 'ESPECIAL+ COM PROMO 3M',
    'Carlos Barbosa-RS': 'ESPECIAL+ COM PROMO 3M',
    'Charqueadas-RS': 'ESPECIAL+ COM PROMO 3M',
    'Concordia-SC': 'ESPECIAL+ COM PROMO 3M',
    'Dois Irmaos-RS': 'ESPECIAL+ COM PROMO 3M',
    'Eldorado Do Sul-RS': 'ESPECIAL+ COM PROMO 3M',
    'Encantado-RS': 'ESPECIAL+ COM PROMO 3M',
    'Estrela-RS': 'ESPECIAL+ COM PROMO 3M',
    'Fraiburgo-SC': 'ESPECIAL+ COM PROMO 3M',
    'Frederico Westphalen-RS': 'ESPECIAL+ COM PROMO 3M',
    'Garibaldi-RS': 'ESPECIAL+ COM PROMO 3M',
    'Gaspar-SC': 'ESPECIAL+ COM PROMO 3M',
    'Gramado-RS': 'ESPECIAL+ COM PROMO 3M',
    'Guaiba-RS': 'ESPECIAL+ COM PROMO 3M',
    'Cascavel-PR': 'ESPECIAL+ COM PROMO 3M',
    'Cianorte-PR': 'ESPECIAL+ COM PROMO 3M',
    'Estancia Velha-RS': 'ESPECIAL+ COM PROMO 3M',
    'Navegantes-SC': 'ESPECIAL+ COM PROMO 3M',
    'Sapiranga-RS': 'ESPECIAL+ COM PROMO 3M',
    'Xangri-La-RS': 'ESPECIAL+ COM PROMO 3M',
    'Herval DOeste-SC': 'ESPECIAL+ COM PROMO 3M',
    'Icara-SC': 'ESPECIAL+ COM PROMO 3M',
    'Igrejinha-RS': 'ESPECIAL+ COM PROMO 3M',
    'Imbe-RS': 'ESPECIAL+ COM PROMO 3M',
    'Indaial-SC': 'ESPECIAL+ COM PROMO 3M',
    'Itaqui-RS': 'ESPECIAL+ COM PROMO 3M',
    'Ivoti-RS': 'ESPECIAL+ COM PROMO 3M',
    'Joacaba-SC': 'ESPECIAL+ COM PROMO 3M',
    'Lages-SC': 'ESPECIAL+ COM PROMO 3M',
    'Mafra-SC': 'ESPECIAL+ COM PROMO 3M',
    'Marau-RS': 'ESPECIAL+ COM PROMO 3M',
    'Montenegro-RS': 'ESPECIAL+ COM PROMO 3M',
    'Nova Petropolis-RS': 'ESPECIAL+ COM PROMO 3M',
    'Osorio-RS': 'ESPECIAL+ COM PROMO 3M',
    'Palmeira Das Missoes-RS': 'ESPECIAL+ COM PROMO 3M',
    'Panambi-RS': 'ESPECIAL+ COM PROMO 3M',
    'Paranagua-PR': 'ESPECIAL+ COM PROMO 3M',
    'Parobe-RS': 'ESPECIAL+ COM PROMO 3M',
    'Rio Do Sul-SC': 'ESPECIAL+ COM PROMO 3M',
    'Rio Negrinho-SC': 'ESPECIAL+ COM PROMO 3M',
    'Rio Pardo-RS': 'ESPECIAL+ COM PROMO 3M',
    'Rosario Do Sul-RS': 'ESPECIAL+ COM PROMO 3M',
    'Santa Rosa-RS': 'ESPECIAL+ COM PROMO 3M',
    'Santana Do Livramento-RS': 'ESPECIAL+ COM PROMO 3M',
    'Santo Angelo-RS': 'ESPECIAL+ COM PROMO 3M',
    'Sao Bento Do Sul-SC': 'ESPECIAL+ COM PROMO 3M',
    'Sao Borja-RS': 'ESPECIAL+ COM PROMO 3M',
    'Sao Francisco Do Sul-SC': 'ESPECIAL+ COM PROMO 3M',
    'Sao Gabriel-RS': 'ESPECIAL+ COM PROMO 3M',
    'Sao Lourenco Do Sul-RS': 'ESPECIAL+ COM PROMO 3M',
    'Sao Luiz Gonzaga-RS': 'ESPECIAL+ COM PROMO 3M',
    'Taquara-RS': 'ESPECIAL+ COM PROMO 3M',
    'Teutonia-RS': 'ESPECIAL+ COM PROMO 3M',
    'Timbo-SC': 'ESPECIAL+ COM PROMO 3M',
    'Torres-RS': 'ESPECIAL+ COM PROMO 3M',
    'Tramandai-RS': 'ESPECIAL+ COM PROMO 3M',
    'Tres Coroas-RS': 'ESPECIAL+ COM PROMO 3M',
    'Tubarao-SC': 'ESPECIAL+ COM PROMO 3M',
    'Vacaria-RS': 'ESPECIAL+ COM PROMO 3M',
    'Venancio Aires-RS': 'ESPECIAL+ COM PROMO 3M',
    'Vera Cruz-RS': 'ESPECIAL+ COM PROMO 3M',
    'Veranopolis-RS': 'ESPECIAL+ COM PROMO 3M',
    'Videira-SC': 'ESPECIAL+ COM PROMO 3M',
    'Xanxere-SC': 'ESPECIAL+ COM PROMO 3M',
    'Xaxim-SC': 'ESPECIAL+ COM PROMO 3M',
    'Adamantina-SP': 'ESPECIAL+ COM PROMO 3M',
    'Agudos-SP': 'ESPECIAL+ COM PROMO 3M',
    'Alvares Machado-SP': 'ESPECIAL+ COM PROMO 3M',
    'Americo Brasiliense-SP': 'ESPECIAL+ COM PROMO 3M',
    'Amparo-SP': 'ESPECIAL+ COM PROMO 3M',
    'Andradina-SP': 'ESPECIAL+ COM PROMO 3M',
    'Aracruz-ES': 'ESPECIAL+ COM PROMO 3M',
    'Araguari-MG': 'ESPECIAL+ COM PROMO 3M',
    'Araxa-MG': 'ESPECIAL+ COM PROMO 3M',
    'Armacao Dos Buzios-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Avare-SP': 'ESPECIAL+ COM PROMO 3M',
    'Bady Bassitt-SP': 'ESPECIAL+ COM PROMO 3M',
    'Barbacena-MG': 'ESPECIAL+ COM PROMO 3M',
    'Barretos-SP': 'ESPECIAL+ COM PROMO 3M',
    'Barrinha-SP': 'ESPECIAL+ COM PROMO 3M',
    'Batatais-SP': 'ESPECIAL+ COM PROMO 3M',
    'Bebedouro-SP': 'ESPECIAL+ COM PROMO 3M',
    'Birigui-SP': 'ESPECIAL+ COM PROMO 3M',
    'Boituva-SP': 'ESPECIAL+ COM PROMO 3M',
    'Cabo Frio-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Cabreuva-SP': 'ESPECIAL+ COM PROMO 3M',
    'Cajamar-SP': 'ESPECIAL+ COM PROMO 3M',
    'Campo Limpo Paulista-SP': 'ESPECIAL+ COM PROMO 3M',
    'Campos Do Jordao-SP': 'ESPECIAL+ COM PROMO 3M',
    'Casa Branca-SP': 'ESPECIAL+ COM PROMO 3M',
    'Cataguases-MG': 'ESPECIAL+ COM PROMO 3M',
    'Catanduva-SP': 'ESPECIAL+ COM PROMO 3M',
    'Cerquilho-SP': 'ESPECIAL+ COM PROMO 3M',
    'Colatina-ES': 'ESPECIAL+ COM PROMO 3M',
    'Conselheiro Lafaiete-MG': 'ESPECIAL+ COM PROMO 3M',
    'Cordeiropolis-SP': 'ESPECIAL+ COM PROMO 3M',
    'Coronel Fabriciano-MG': 'ESPECIAL+ COM PROMO 3M',
    'Cravinhos-SP': 'ESPECIAL+ COM PROMO 3M',
    'Descalvado-SP': 'ESPECIAL+ COM PROMO 3M',
    'Divinopolis-MG': 'ESPECIAL+ COM PROMO 3M',
    'Dracena-SP': 'ESPECIAL+ COM PROMO 3M',
    'Espirito Santo Do Pinhal-SP': 'ESPECIAL+ COM PROMO 3M',
    'Fernandopolis-SP': 'ESPECIAL+ COM PROMO 3M',
    'Garca-SP': 'ESPECIAL+ COM PROMO 3M',
    'Guaira-SP': 'ESPECIAL+ COM PROMO 3M',
    'Guapiacu-SP': 'ESPECIAL+ COM PROMO 3M',
    'Guararapes-SP': 'ESPECIAL+ COM PROMO 3M',
    'Ibate-SP': 'ESPECIAL+ COM PROMO 3M',
    'Ibiuna-SP': 'ESPECIAL+ COM PROMO 3M',
    'Ipero-SP': 'ESPECIAL+ COM PROMO 3M',
    'Itabira-MG': 'ESPECIAL+ COM PROMO 3M',
    'Itaguai-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Itajuba-MG': 'ESPECIAL+ COM PROMO 3M',
    'Itapeva-SP': 'ESPECIAL+ COM PROMO 3M',
    'Itapira-SP': 'ESPECIAL+ COM PROMO 3M',
    'Itaquaquecetuba-SP': 'ESPECIAL+ COM PROMO 3M',
    'Itauna-MG': 'ESPECIAL+ COM PROMO 3M',
    'Ituiutaba-MG': 'ESPECIAL+ COM PROMO 3M',
    'Ituverava-SP': 'ESPECIAL+ COM PROMO 3M',
    'Jaboticabal-SP': 'ESPECIAL+ COM PROMO 3M',
    'Jales-SP': 'ESPECIAL+ COM PROMO 3M',
    'Jardinopolis-SP': 'ESPECIAL+ COM PROMO 3M',
    'Jarinu-SP': 'ESPECIAL+ COM PROMO 3M',
    'Jose Bonifacio-SP': 'ESPECIAL+ COM PROMO 3M',
    'Lagoa Santa-MG': 'ESPECIAL+ COM PROMO 3M',
    'Laranjal Paulista-SP': 'ESPECIAL+ COM PROMO 3M',
    'Lavras-MG': 'ESPECIAL+ COM PROMO 3M',
    'Leme-SP': 'ESPECIAL+ COM PROMO 3M',
    'Lencois Paulista-SP': 'ESPECIAL+ COM PROMO 3M',
    'Lins-SP': 'ESPECIAL+ COM PROMO 3M',
    'Louveira-SP': 'ESPECIAL+ COM PROMO 3M',
    'Manhuacu-MG': 'ESPECIAL+ COM PROMO 3M',
    'Matao-SP': 'ESPECIAL+ COM PROMO 3M',
    'Miguel Pereira-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Mirandopolis-SP': 'ESPECIAL+ COM PROMO 3M',
    'Mococa-SP': 'ESPECIAL+ COM PROMO 3M',
    'Monte Alto-SP': 'ESPECIAL+ COM PROMO 3M',
    'Montes Claros-MG': 'ESPECIAL+ COM PROMO 3M',
    'Nova Friburgo-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Olimpia-SP': 'ESPECIAL+ COM PROMO 3M',
  'Orlandia-SP': 'ESPECIAL+ COM PROMO 3M',
  'OurinhosSP': 'ESPECIAL+ COM PROMO 3M',
  'Para De Minas-MG': 'ESPECIAL+ COM PROMO 3M',
  'Paraiba Do Sul-RJ': 'ESPECIAL+ COM PROMO 3M',
  'Passos-MG': 'ESPECIAL+ COM PROMO 3M',
  'Patos De Minas-MG': 'ESPECIAL+ COM PROMO 3M',
  'Pedreira-SP': 'ESPECIAL+ COM PROMO 3M',
  'Penapolis-SP': 'ESPECIAL+ COM PROMO 3M',
  'Piedade-SP': 'ESPECIAL+ COM PROMO 3M',
  'Piracaia-SP': 'ESPECIAL+ COM PROMO 3M',
  'Pirassununga-SP': 'ESPECIAL+ COM PROMO 3M',
  'Pocos De Caldas-MG': 'ESPECIAL+ COM PROMO 3M',
  'Pontal-SP': 'ESPECIAL+ COM PROMO 3M',
  'Porto Ferreira-SP': 'ESPECIAL+ COM PROMO 3M',
  'Potirendaba-SP': 'ESPECIAL+ COM PROMO 3M',
  'Pouso Alegre-MG': 'ESPECIAL+ COM PROMO 3M',
  'Presidente Bernardes-SP': 'ESPECIAL+ COM PROMO 3M',
  'Promissao-SP': 'ESPECIAL+ COM PROMO 3M',
  'Registro-SP': 'ESPECIAL+ COM PROMO 3M',
  'Santa Cruz das Palmeiras-SP': 'ESPECIAL+ COM PROMO 3M',
  'Santa Cruz Do Rio Pardo-SP': 'ESPECIAL+ COM PROMO 3M',
  'Santa Gertrudes-SP': 'ESPECIAL+ COM PROMO 3M',
  'Santa Isabel-SP': 'ESPECIAL+ COM PROMO 3M',
  'Santa Luzia-MG': 'ESPECIAL+ COM PROMO 3M',
  'Santa Rosa De Viterbo-SP': 'ESPECIAL+ COM PROMO 3M',
  'Sao Joao Da Boa Vista-SP': 'ESPECIAL+ COM PROMO 3M',
  'Sao Joao Del Rei-MG': 'ESPECIAL+ COM PROMO 3M',
  'Sao Joaquim Da Barra-SP': 'ESPECIAL+ COM PROMO 3M',
  'Sao Jose Do Rio Pardo-SP': 'ESPECIAL+ COM PROMO 3M',
  'Sao Pedro Da Aldeia-RJ': 'ESPECIAL+ COM PROMO 3M',
  'Serra Negra-SP': 'ESPECIAL+ COM PROMO 3M',
  'Serrana-SP': 'ESPECIAL+ COM PROMO 3M',
  'Tambau-SP': 'ESPECIAL+ COM PROMO 3M',
  'Tatui-SP': 'ESPECIAL+ COM PROMO 3M',
  'Timoteo-MG': 'ESPECIAL+ COM PROMO 3M',
  'Tremembe-SP': 'ESPECIAL+ COM PROMO 3M',
  'Tres Coracoes-MG': 'ESPECIAL+ COM PROMO 3M',
  'Tres Rios-RJ': 'ESPECIAL+ COM PROMO 3M',
  'Uba-MG': 'ESPECIAL+ COM PROMO 3M',
  'Valenca-RJ': 'ESPECIAL+ COM PROMO 3M',
  'Valparaiso-SP': 'ESPECIAL+ COM PROMO 3M',
  'Varzea Paulista-SP': 'ESPECIAL+ COM PROMO 3M',
  'Vassouras-RJ': 'ESPECIAL+ COM PROMO 3M',
  'Vespasiano-MG': 'ESPECIAL+ COM PROMO 3M',
  'Vicosa-MG': 'ESPECIAL+ COM PROMO 3M',
  'Votuporanga-SP': 'ESPECIAL+ COM PROMO 3M',
  'Cacoal-RO': 'ESPECIAL+ COM PROMO 3M',
  'Castanhal-PA': 'ESPECIAL+ COM PROMO 3M',
  'Gurupi-TO': 'ESPECIAL+ COM PROMO 3M',
  'Ji-Parana-RO': 'ESPECIAL+ COM PROMO 3M',
  'Macapa-AP': 'ESPECIAL+ COM PROMO 3M',
  'Maraba-PA': 'ESPECIAL+ COM PROMO 3M',
  'Paragominas-PA': 'ESPECIAL+ COM PROMO 3M',
  'Paraiso Do Tocantins-TO': 'ESPECIAL+ COM PROMO 3M',
  'Parauapebas-PA': 'ESPECIAL+ COM PROMO 3M',
  'Vilhena-RO': 'ESPECIAL+ COM PROMO 3M',
  'Alagoinhas-BA': 'ESPECIAL+ COM PROMO 3M',
  'AquirazCE': 'ESPECIAL+ COM PROMO 3M',
  'Arapiraca-AL': 'ESPECIAL+ COM PROMO 3M',
  'Barreiras-BA': 'ESPECIAL+ COM PROMO 3M',
  'Caxias-MA': 'ESPECIAL+ COM PROMO 3M',
  'Eunapolis-BA': 'ESPECIAL+ COM PROMO 3M',
  'Eusebio-CE': 'ESPECIAL+ COM PROMO 3M',
  'Feira De Santana-BA': 'ESPECIAL+ COM PROMO 3M',
  'Ilheus-BA': 'ESPECIAL+ COM PROMO 3M',
  'Imperatriz-MA': 'ESPECIAL+ COM PROMO 3M',
  'Itabuna-BA': 'ESPECIAL+ COM PROMO 3M',
  'Jequie-BA': 'ESPECIAL+ COM PROMO 3M',
  'Juazeiro Do Norte-CE': 'ESPECIAL+ COM PROMO 3M',
  'Juazeiro-BA': 'ESPECIAL+ COM PROMO 3M',
  'MossoroRN': 'ESPECIAL+ COM PROMO 3M',
  'Parnaiba-PI': 'ESPECIAL+ COM PROMO 3M',
  'Petrolina-PE': 'ESPECIAL+ COM PROMO 3M',
  'Porto Seguro-BA': 'ESPECIAL+ COM PROMO 3M',
  'Sobral-CE': 'ESPECIAL+ COM PROMO 3M',
  'Teixeira De Freitas-BA': 'ESPECIAL+ COM PROMO 3M',
  'Timon-MA': 'ESPECIAL+ COM PROMO 3M',
  'Bage-RS': 'ESPECIAL+ COM PROMO 3M',
  'Balneario Camboriu-SC': 'ESPECIAL+ COM PROMO 3M',
  'Bento Goncalves-RS': 'ESPECIAL+ COM PROMO 3M',
  'Blumenau-SC': 'ESPECIAL+ COM PROMO 3M',
  'Brusque-SC': 'ESPECIAL+ COM PROMO 3M',
  'Campo Bom-RS': 'ESPECIAL+ COM PROMO 3M',
  'Capao Da Canoa-RS': 'ESPECIAL+ COM PROMO 3M',
  'Chapeco-SC': 'ESPECIAL+ COM PROMO 3M',
  'Criciuma-SC': 'ESPECIAL+ COM PROMO 3M',
  'Cruz Alta-RS': 'ESPECIAL+ COM PROMO 3M',
  'Erechim-RS': 'ESPECIAL+ COM PROMO 3M',
  'Guarapuava-PR': 'ESPECIAL+ COM PROMO 3M',
  'Itajai-SC': 'ESPECIAL+ COM PROMO 3M',
  'Itapema-SC': 'ESPECIAL+ COM PROMO 3M',
  'Lajeado-RS': 'ESPECIAL+ COM PROMO 3M',
  'Passo Fundo-RS': 'ESPECIAL+ COM PROMO 3M',
  'Ponta GrossaPR': 'ESPECIAL+ COM PROMO 3M',
  'Santa Cruz Do Sul-RS': 'ESPECIAL+ COM PROMO 3M',
  'Santa Maria-RS': 'ESPECIAL+ COM PROMO 3M',
  'Sao Leopoldo-RS': 'ESPECIAL+ COM PROMO 3M',
  'Uruguaiana-RS': 'ESPECIAL+ COM PROMO 3M',
  'Aracatuba-SP': 'ESPECIAL+ COM PROMO 3M',
  'Artur Nogueira-SP': 'ESPECIAL+ COM PROMO 3M',
  'Barra Mansa-RJ': 'ESPECIAL+ COM PROMO 3M',
  'Bertioga-SP': 'ESPECIAL+ COM PROMO 3M',
  'Cachoeira Paulista-SP': 'ESPECIAL+ COM PROMO 3M',
  'Cachoeiro De Itapemirim-ES': 'ESPECIAL+ COM PROMO 3M',
  'Cruzeiro-SP': 'ESPECIAL+ COM PROMO 3M',
  'Governador Valadares-MG': 'ESPECIAL+ COM PROMO 3M',
  'Guaratingueta-SP': 'ESPECIAL+ COM PROMO 3M',
  'Hortolandia-SP': 'ESPECIAL+ COM PROMO 3M',
  'Ipatinga-MG': 'ESPECIAL+ COM PROMO 3M',
  'Itapetininga-SP': 'ESPECIAL+ COM PROMO 3M',
  'Juiz De Fora-MG': 'ESPECIAL+ COM PROMO 3M',
  'Limeira-SP': 'ESPECIAL+ COM PROMO 3M',
  'Lorena-SP': 'ESPECIAL+ COM PROMO 3M',
  'Macae-RJ': 'ESPECIAL+ COM PROMO 3M',
  'Marilia-SP': 'ESPECIAL+ COM PROMO 3M',
  'Nilopolis-RJ': 'ESPECIAL+ COM PROMO 3M',
  'Nova Iguacu-RJ': 'ESPECIAL+ COM PROMO 3M',
  'Nova Lima-MG': 'ESPECIAL+ COM PROMO 3M',
  'Petropolis-RJ': 'ESPECIAL+ COM PROMO 3M',
  'Pindamonhangaba-SP': 'ESPECIAL+ COM PROMO 3M',
  'Resende-RJ': 'ESPECIAL+ COM PROMO 3M',
  'Sete Lagoas-MG': 'ESPECIAL+ COM PROMO 3M',
  'Sumare-SP': 'ESPECIAL+ COM PROMO 3M',
  'Uberaba-MG': 'ESPECIAL+ COM PROMO 3M',
  'Uberlandia-MG': 'ESPECIAL+ COM PROMO 3M',
  'Varginha-MG': 'ESPECIAL+ COM PROMO 3M',
  'Volta RedondaRJ': 'ESPECIAL+ COM PROMO 3M',
  'Anapolis-GO': 'ESPECIAL+ COM PROMO 3M',
  'Dourados-MS': 'ESPECIAL+ COM PROMO 3M',
  'Rondonopolis-MT': 'ESPECIAL+ COM PROMO 3M',
  'Caruaru-PE': 'ESPECIAL+ COM PROMO 3M',
  'Vitoria Da Conquista-BA': 'ESPECIAL+ COM PROMO 3M',
  'Capivari-SP': 'ESPECIAL',
  'Carapicuiba-SP': 'ESPECIAL',
  'Embu Das Artes-SP': 'ESPECIAL',
  'Mogi Guacu-SP': 'ESPECIAL',
  'Sao Carlos-SP': 'ESPECIAL',
  'Vinhedo-SP': 'ESPECIAL',
  'Votorantim-SP': 'ESPECIAL',
  'Varzea Grande-MT': 'ESPECIAL',
  'Apucarana-PR': 'ESPECIAL',
  'Cambe-PR': 'ESPECIAL',
  'Guaramirim-SC': 'ESPECIAL',
  'Jaragua Do Sul-SC': 'ESPECIAL',
  'Rolandia-PR': 'ESPECIAL',
  'Alvorada-RS': 'ESPECIAL',
  'Arapongas-PR': 'ESPECIAL',
  'Cachoeirinha-RS': 'ESPECIAL',
  'Gravatai-RS': 'ESPECIAL',
  'Novo Hamburgo-RS': 'ESPECIAL',
  'Palhoca-SC': 'ESPECIAL',
  'Viamao-RS': 'ESPECIAL',
  'Araraquara-SP': 'ESPECIAL',
  'Bauru-SP': 'ESPECIAL',
  'Cacapava-SP': 'ESPECIAL',
  'Cariacica-ES': 'ESPECIAL',
  'Cosmopolis-SP': 'ESPECIAL',
  'Franca-SP': 'ESPECIAL',
  'Guaruja-SP': 'ESPECIAL',
  'Indaiatuba-SP': 'ESPECIAL',
  'Jacarei-SP': 'ESPECIAL',
  'Maua-SP': 'ESPECIAL',
  'Mogi Das Cruzes-SP': 'ESPECIAL',
  'Paulinia-SP': 'ESPECIAL',
  'Praia Grande-SP': 'ESPECIAL',
  'Ribeirao Preto-SP': 'ESPECIAL',
  'Santos-SP': 'ESPECIAL',
  'Sao Jose Do Rio Preto-SP': 'ESPECIAL',
  'Sao Jose Dos Campos-SP': 'ESPECIAL',
  'Sao Vicente-SP': 'ESPECIAL',
  'Serra-ES': 'ESPECIAL',
  'Sorocaba-SP': 'ESPECIAL',
  'Taubate-SP': 'ESPECIAL',
  'Valinhos-SP': 'ESPECIAL',
  'Vila Velha-ES': 'ESPECIAL',
  'Vitoria-ES': 'ESPECIAL',
  'Campo Grande-MS': 'ESPECIAL',
  'Cuiaba-MT': 'ESPECIAL',
  'Ananindeua-PA': 'ESPECIAL',
  'Belem-PA': 'ESPECIAL',
  'Palmas-TO': 'ESPECIAL',
  'Porto Velho-RO': 'ESPECIAL',
  'Rio Branco-AC': 'ESPECIAL',
  'Jaboatao Dos Guararapes-PE': 'ESPECIAL',
  'Olinda-PE': 'ESPECIAL',
  'Paulista-PE': 'ESPECIAL',
  'Recife-PE': 'ESPECIAL',
  'Sao Luis-MA': 'ESPECIAL',

  'Curitiba-PR':'ESPECIAL SEM 125M',

  'Itapecerica Da Serra-SP': 'ESPECIAL+',
  'Mesquita-RJ': 'ESPECIAL+',
  'Biguacu-SC': 'ESPECIAL+',
  'Aluminio-SP': 'ESPECIAL+',
  'Caraguatatuba-SP': 'ESPECIAL+',
  'Itanhaem-SP': 'ESPECIAL+',
  'Itatiba-SP': 'ESPECIAL+',
  'Jaguariuna-SP': 'ESPECIAL+',
  'Mirassol-SP': 'ESPECIAL+',
  'Mongagua-SP': 'ESPECIAL+',
  'Morungaba-SP': 'ESPECIAL+',
  'Sao Sebastiao-SP': 'ESPECIAL+',
  'Ubatuba-SP': 'ESPECIAL+',
  'Santana-AP': 'ESPECIAL+',
  'Maringa-PR': 'ESPECIAL+',
  'Pelotas-RS': 'ESPECIAL+',
  'Jau-SP': 'ESPECIAL+',
  'Niteroi-RJ': 'ESPECIAL+',
  'Aracaju-SE': 'ESPECIAL+ COM PROMO 3MM',
  'Aparecida De Goiania-GO': 'ESPECIAL+ COM OFERTA E PROMO 3M',
  'Goiania-GO': 'ESPECIAL+ COM OFERTA E PROMO 3M',
  'Fortaleza-CE': 'ESPECIAL+ COM OFERTA E PROMO 3M',
  'Teresina-PI': 'ESPECIAL+ COM OFERTA E PROMO 3M',
  'Cabedelo-PB': 'ESPECIAL COM OFERTA',
  'Joao Pessoa-PB': 'ESPECIAL COM OFERTA',
  'Maceio-AL': 'ESPECIAL COM OFERTA',
  'Natal-RN': 'ESPECIAL COM OFERTA',
  'Parnamirim-RN': 'ESPECIAL COM OFERTA',
  'Campina Grande do Sul-PR':'ESPECIAL+ REDES NEUTRAS',
  'Campo Mourao-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Castro-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Cornelio Procopio-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Fazenda Rio Grande-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Foz Do Iguacu-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Francisco Beltrao-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Guaratuba-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Ibipora-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Ijui-RS': 'ESPECIAL+ REDES NEUTRAS',
  'Marechal Candido Rondon-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Matinhos-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Medianieira-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Paicandu-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Palmas-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Pato Branco-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Piraquara-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Quatro Barras-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Sarandi-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Telemaco Borba-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Toledo-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Umuarama-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Uniao Da Vitoria-PR': 'ESPECIAL+ REDES NEUTRAS',
  'Alfenas-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Arcos-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Carmelo-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Formiga-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Guaxupe-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Joao Monlevade-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Lagoa da Prata-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Leopoldina-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Mariana-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Matozinhos-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Monte Carmelo-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Muriae-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Nova Serrana-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Ouro Preto-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Patrocinio-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Pedro Leopoldo-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Piumhi-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Ponte Nova-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Sacramento-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Santa Cruz de Minas-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Santa Rita Do Sapucai-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Sao Sebastiao do Paraiso-MG': 'ESPECIAL+ REDES NEUTRAS',
  'Santa Maria-DF':'EXCLUSIVO NODE',
  'Planaltina-DF':'EXCLUSIVO NODE',
  






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
