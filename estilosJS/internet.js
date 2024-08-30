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

//BOTÃO MONTE SEU COMBO
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('monteseucombo'); // ID do botão
    var ofertaRentabilidade = document.querySelectorAll('.montecombo'); // Classe das linhas
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
    'Canoas-RS': 'PADRAO',
    'Caxias do Sul-RS': 'PADRAO',
    'Campo Largo-PR': 'PADRAO',
    'Esteio-RS': 'PADRAO',
    'Farroupilha-RS': 'PADRAO',
    'Florianópolis-SC': 'PADRAO',
    'Joinville-SC': 'PADRAO',
    'Londrina-PR': 'PADRAO',
    'Porto Alegre-RS': 'PADRAO',
    'Rio Grande-RS': 'PADRAO',
    'São José-SC': 'PADRAO',
    'Sapucaia do Sul-RS': 'PADRAO',
    'Americana-SP': 'PADRAO',
    'Araras-SP': 'PADRAO',
    'Atibaia-SP': 'PADRAO',
    'Belo Horizonte-MG': 'PADRAO',
    'Bragança Paulista-SP': 'PADRAO',
    'Campinas-SP': 'PADRAO',
    'Contagem-MG': 'PADRAO',
    'Cotia-SP': 'PADRAO',
    'Cubatão-SP': 'PADRAO',
    'Diadema-SP': 'PADRAO',
    'Elias Fausto-SP': 'PADRAO',
    'Guarulhos-SP': 'PADRAO',
    'Itu-SP': 'PADRAO',
    'Jundiaí-SP': 'PADRAO',
    'Mogi Mirim-SP': 'PADRAO',
    'Osasco-SP': 'PADRAO',
    'Piracicaba-SP': 'PADRAO',
    'Poá-SP': 'PADRAO',
    'Rio Claro-SP': 'PADRAO',
    'Rio de Janeiro-RJ': 'PADRAO',
    'Santa Bárbara d\'Oeste-SP': 'PADRAO',
    'Santana de Parnaíba-SP': 'PADRAO',
    'Santo André-SP': 'PADRAO',
    'São Bernardo do Campo-SP': 'PADRAO',
    'São Caetano do Sul-SP': 'PADRAO',
    'São Gonçalo-RJ': 'PADRAO',
    'São Paulo-SP': 'PADRAO',
    'Suzano-SP': 'PADRAO',
    'Brasília-DF': 'PADRAO',
    'Manaus-AM': 'PADRAO',
    'Camaçari-BA': 'PADRAO',
    'Lauro de Freitas-BA': 'PADRAO',
    'Mata de São João-BA': 'PADRAO',
    'Salvador-BA': 'PADRAO',
    'Almirante Tamandaré-PR': 'PADRAO',
    'Araucária-PR': 'PADRAO',
    'Barueri-SP': 'PADRAO',
    'Caieiras-SP': 'PADRAO',
    'Colombo-PR': 'PADRAO',
    'Itapevi-SP': 'PADRAO',
    'Itupeva-SP': 'PADRAO',
    'Jandira-SP': 'PADRAO',
    'Mairinque-SP': 'PADRAO',
    'Monte Mor-SP': 'PADRAO',
    'Peruibe-SP': 'PADRAO',
    'Pinhais-PR': 'PADRAO',
    'Porto Feliz-SP': 'PADRAO',
    'Rafard-SP': 'PADRAO',
    'Ribeirão Pires-SP': 'PADRAO',
    'Sabará-MG': 'PADRAO',
    'Salto-SP': 'PADRAO',
    'São José dos Pinhais-PR': 'PADRAO',
    'São Roque-SP': 'PADRAO',
    'Sertaozinho-SP': 'PADRAO',
    'Taboão da Serra-SP': 'PADRAO',
    'Tiete-SP': 'PADRAO',
    'Vargem Grande Paulista-SP': 'PADRAO',

    'Cascavel-PR': 'ESPECIAL+ COM PROMO 6M',
    'Cianorte-PR': 'ESPECIAL+ COM PROMO 6M',
    'Estancia Velha-RS': 'ESPECIAL+ COM PROMO 6M',
    'Navegantes-SC': 'ESPECIAL+ COM PROMO 6M',
    'Sapiranga-RS': 'ESPECIAL+ COM PROMO 6M',
    'Xangri-La-RS': 'ESPECIAL+ COM PROMO 6M',
    'Aparecida-SP': 'ESPECIAL+ COM PROMO 6M',
  

    'Botucatu-SP': 'ESPECIAL+ COM PROMO 6M',
    'Campos Dos Goytacazes-RJ': 'ESPECIAL+ COM PROMO 6M',

    
    'Potim-SP': 'ESPECIAL+ COM PROMO 6M',
    'Presidente Prudente-SP': 'ESPECIAL+ COM PROMO 6M',
    'Rio Das Ostras-RJ': 'ESPECIAL+ COM PROMO 6M',
   
    'Teofilo Otoni-MG': 'ESPECIAL+ COM PROMO 6M',
    'Teresopolis-RJ': 'ESPECIAL+ COM PROMO 6M',
    'Campina Grande-PB': 'ESPECIAL+ COM PROMO 6M',
    'Alegrete-RS': 'ESPECIAL+ COM PROMO 6M',
    'Ararangua-SC': 'ESPECIAL+ COM PROMO 6M',
    'Arroio Do Meio-RS': 'ESPECIAL+ COM PROMO 6M',
    'Cacador-SC': 'ESPECIAL+ COM PROMO 6M',
    'Cachoeira Do Sul-RS': 'ESPECIAL+ COM PROMO 6M',
    'Camaqua-RS': 'ESPECIAL+ COM PROMO 6M',
    'Camboriu-SC': 'ESPECIAL+ COM PROMO 6M',
    'Canela-RS': 'ESPECIAL+ COM PROMO 6M',
    'Carazinho-RS': 'ESPECIAL+ COM PROMO 6M',
    'Carlos Barbosa-RS': 'ESPECIAL+ COM PROMO 6M',
    'Charqueadas-RS': 'ESPECIAL+ COM PROMO 6M',
    'Concordia-SC': 'ESPECIAL+ COM PROMO 6M',
    'Dois Irmaos-RS': 'ESPECIAL+ COM PROMO 6M',
    'Eldorado Do Sul-RS': 'ESPECIAL+ COM PROMO 6M',
    'Encantado-RS': 'ESPECIAL+ COM PROMO 6M',
    'Estrela-RS': 'ESPECIAL+ COM PROMO 6M',
    'Fraiburgo-SC': 'ESPECIAL+ COM PROMO 6M',
    'Frederico Westphalen-RS': 'ESPECIAL+ COM PROMO 6M',
    'Garibaldi-RS': 'ESPECIAL+ COM PROMO 6M',
    'Gaspar-SC': 'ESPECIAL+ COM PROMO 6M',
    'Gramado-RS': 'ESPECIAL+ COM PROMO 6M',
    'Guaiba-RS': 'ESPECIAL+ COM PROMO 6M',
    'Cascavel-PR': 'ESPECIAL+ COM PROMO 6M',
    'Cianorte-PR': 'ESPECIAL+ COM PROMO 6M',
    'Estancia Velha-RS': 'ESPECIAL+ COM PROMO 6M',
    'Navegantes-SC': 'ESPECIAL+ COM PROMO 6M',
    'Sapiranga-RS': 'ESPECIAL+ COM PROMO 6M',
    'Xangri-La-RS': 'ESPECIAL+ COM PROMO 6M',
    'Herval DOeste-SC': 'ESPECIAL+ COM PROMO 6M',
    'Icara-SC': 'ESPECIAL+ COM PROMO 6M',
    'Igrejinha-RS': 'ESPECIAL+ COM PROMO 6M',
    'Imbe-RS': 'ESPECIAL+ COM PROMO 6M',
    'Indaial-SC': 'ESPECIAL+ COM PROMO 6M',
    'Itaqui-RS': 'ESPECIAL+ COM PROMO 6M',
    'Ivoti-RS': 'ESPECIAL+ COM PROMO 6M',
    'Joacaba-SC': 'ESPECIAL+ COM PROMO 6M',
    'Lages-SC': 'ESPECIAL+ COM PROMO 6M',
    'Mafra-SC': 'ESPECIAL+ COM PROMO 6M',
    'Marau-RS': 'ESPECIAL+ COM PROMO 6M',
    'Montenegro-RS': 'ESPECIAL+ COM PROMO 6M',
    'Nova Petropolis-RS': 'ESPECIAL+ COM PROMO 6M',
    'Osorio-RS': 'ESPECIAL+ COM PROMO 6M',
    'Palmeira Das Missoes-RS': 'ESPECIAL+ COM PROMO 6M',
    'Panambi-RS': 'ESPECIAL+ COM PROMO 6M',
    'Paranagua-PR': 'ESPECIAL+ COM PROMO 6M',
    'Parobe-RS': 'ESPECIAL+ COM PROMO 6M',
    'Rio Do Sul-SC': 'ESPECIAL+ COM PROMO 6M',
    'Rio Negrinho-SC': 'ESPECIAL+ COM PROMO 6M',
    'Rio Pardo-RS': 'ESPECIAL+ COM PROMO 6M',
    'Rosario Do Sul-RS': 'ESPECIAL+ COM PROMO 6M',
    'Santa Rosa-RS': 'ESPECIAL+ COM PROMO 6M',
    'Santana Do Livramento-RS': 'ESPECIAL+ COM PROMO 6M',
    'Santo Angelo-RS': 'ESPECIAL+ COM PROMO 6M',
    'Sao Bento Do Sul-SC': 'ESPECIAL+ COM PROMO 6M',
    'Sao Borja-RS': 'ESPECIAL+ COM PROMO 6M',

    'Sao Gabriel-RS': 'ESPECIAL+ COM PROMO 6M',
    'Sao Lourenco Do Sul-RS': 'ESPECIAL+ COM PROMO 6M',
    'Sao Luiz Gonzaga-RS': 'ESPECIAL+ COM PROMO 6M',
    'Taquara-RS': 'ESPECIAL+ COM PROMO 6M',
    'Teutonia-RS': 'ESPECIAL+ COM PROMO 6M',
    'Timbo-SC': 'ESPECIAL+ COM PROMO 6M',
    'Torres-RS': 'ESPECIAL+ COM PROMO 6M',
    'Tramandai-RS': 'ESPECIAL+ COM PROMO 6M',
    'Tres Coroas-RS': 'ESPECIAL+ COM PROMO 6M',
    'Tubarao-SC': 'ESPECIAL+ COM PROMO 6M',
    'Vacaria-RS': 'ESPECIAL+ COM PROMO 6M',
    'Venancio Aires-RS': 'ESPECIAL+ COM PROMO 6M',
    'Vera Cruz-RS': 'ESPECIAL+ COM PROMO 6M',
    'Veranopolis-RS': 'ESPECIAL+ COM PROMO 6M',
    'Videira-SC': 'ESPECIAL+ COM PROMO 6M',
    'Xanxere-SC': 'ESPECIAL+ COM PROMO 6M',



    
    'Xaxim-SC': 'ESPECIAL+ COM PROMO 6M',
    'Adamantina-SP': 'ESPECIAL+ COM PROMO 6M',
    'Agudos-SP': 'ESPECIAL+ COM PROMO 6M',
    'Alvares Machado-SP': 'ESPECIAL+ COM PROMO 6M',
   
    'Andradina-SP': 'ESPECIAL+ COM PROMO 6M',
    'Aracruz-ES': 'ESPECIAL+ COM PROMO 6M',
    'Araguari-MG': 'ESPECIAL+ COM PROMO 6M',
    'Araxa-MG': 'ESPECIAL+ COM PROMO 6M',
    'Armacao Dos Buzios-RJ': 'ESPECIAL+ COM PROMO 6M',
    'Avare-SP': 'ESPECIAL+ COM PROMO 6M',
    'Bady Bassitt-SP': 'ESPECIAL+ COM PROMO 6M',
    'Barbacena-MG': 'ESPECIAL+ COM PROMO 6M',
    'Barretos-SP': 'ESPECIAL+ COM PROMO 6M',
    'Barrinha-SP': 'ESPECIAL+ COM PROMO 6M',
    'Batatais-SP': 'ESPECIAL+ COM PROMO 6M',
    'Bebedouro-SP': 'ESPECIAL+ COM PROMO 6M',
    'Birigui-SP': 'ESPECIAL+ COM PROMO 6M',
    'Boituva-SP': 'ESPECIAL+ COM PROMO 6M',
    'Cabo Frio-RJ': 'ESPECIAL+ COM PROMO 6M',
  

  
    'Campos Do Jordao-SP': 'ESPECIAL+ COM PROMO 6M',
    'Casa Branca-SP': 'ESPECIAL+ COM PROMO 6M',
    'Cataguases-MG': 'ESPECIAL+ COM PROMO 6M',
    'Catanduva-SP': 'ESPECIAL+ COM PROMO 6M',
    'Cerquilho-SP': 'ESPECIAL+ COM PROMO 6M',
    'Colatina-ES': 'ESPECIAL+ COM PROMO 6M',
    'Conselheiro Lafaiete-MG': 'ESPECIAL+ COM PROMO 6M',

    'Coronel Fabriciano-MG': 'ESPECIAL+ COM PROMO 6M',
    'Cravinhos-SP': 'ESPECIAL+ COM PROMO 6M',
    'Descalvado-SP': 'ESPECIAL+ COM PROMO 6M',
    'Divinopolis-MG': 'ESPECIAL+ COM PROMO 6M',
    'Dracena-SP': 'ESPECIAL+ COM PROMO 6M',
    'Espirito Santo Do Pinhal-SP': 'ESPECIAL+ COM PROMO 6M',
    'Fernandopolis-SP': 'ESPECIAL+ COM PROMO 6M',
    'Garca-SP': 'ESPECIAL+ COM PROMO 6M',
    'Guaira-SP': 'ESPECIAL+ COM PROMO 6M',
    'Guapiacu-SP': 'ESPECIAL+ COM PROMO 6M',
    'Guararapes-SP': 'ESPECIAL+ COM PROMO 6M',
    'Ibate-SP': 'ESPECIAL+ COM PROMO 6M',
    'Ibiuna-SP': 'ESPECIAL+ COM PROMO 6M',
    'Ipero-SP': 'ESPECIAL+ COM PROMO 6M',
    'Itabira-MG': 'ESPECIAL+ COM PROMO 6M',

    'Itajuba-MG': 'ESPECIAL+ COM PROMO 6M',
    'Itapeva-SP': 'ESPECIAL+ COM PROMO 6M',
    'Itapira-SP': 'ESPECIAL+ COM PROMO 6M',
   
    'Itauna-MG': 'ESPECIAL+ COM PROMO 6M',
    'Ituiutaba-MG': 'ESPECIAL+ COM PROMO 6M',
    'Ituverava-SP': 'ESPECIAL+ COM PROMO 6M',
    'Jaboticabal-SP': 'ESPECIAL+ COM PROMO 6M',
    'Jales-SP': 'ESPECIAL+ COM PROMO 6M',
    'Jardinopolis-SP': 'ESPECIAL+ COM PROMO 6M',

    'Jose Bonifacio-SP': 'ESPECIAL+ COM PROMO 6M',
   
    'Laranjal Paulista-SP': 'ESPECIAL+ COM PROMO 6M',
    'Lavras-MG': 'ESPECIAL+ COM PROMO 6M',
    'Leme-SP': 'ESPECIAL+ COM PROMO 6M',
    'Lencois Paulista-SP': 'ESPECIAL+ COM PROMO 6M',
    'Lins-SP': 'ESPECIAL+ COM PROMO 6M',
    'Louveira-SP': 'ESPECIAL+ COM PROMO 6M',
    'Manhuacu-MG': 'ESPECIAL+ COM PROMO 6M',
    'Matao-SP': 'ESPECIAL+ COM PROMO 6M',
    'Miguel Pereira-RJ': 'ESPECIAL+ COM PROMO 6M',
    'Mirandopolis-SP': 'ESPECIAL+ COM PROMO 6M',
    'Mococa-SP': 'ESPECIAL+ COM PROMO 6M',
    'Monte Alto-SP': 'ESPECIAL+ COM PROMO 6M',
    'Montes Claros-MG': 'ESPECIAL+ COM PROMO 6M',
    'Nova Friburgo-RJ': 'ESPECIAL+ COM PROMO 6M',
    'Olimpia-SP': 'ESPECIAL+ COM PROMO 6M',

  'Orlandia-SP': 'ESPECIAL+ COM PROMO 6M',
  'Ourinhos-SP': 'ESPECIAL+ COM PROMO 6M',
  'Para De Minas-MG': 'ESPECIAL+ COM PROMO 6M',
  'Paraiba Do Sul-RJ': 'ESPECIAL+ COM PROMO 6M',
  'Passos-MG': 'ESPECIAL+ COM PROMO 6M',
  'Patos De Minas-MG': 'ESPECIAL+ COM PROMO 6M',
  'Pedreira-SP': 'ESPECIAL+ COM PROMO 6M',
  'Penapolis-SP': 'ESPECIAL+ COM PROMO 6M',
  'Piedade-SP': 'ESPECIAL+ COM PROMO 6M',

  'Pirassununga-SP': 'ESPECIAL+ COM PROMO 6M',
  'Pocos De Caldas-MG': 'ESPECIAL+ COM PROMO 6M',
  'Pontal-SP': 'ESPECIAL+ COM PROMO 6M',
  'Porto Ferreira-SP': 'ESPECIAL+ COM PROMO 6M',
  'Potirendaba-SP': 'ESPECIAL+ COM PROMO 6M',
  'Pouso Alegre-MG': 'ESPECIAL+ COM PROMO 6M',
  'Presidente Bernardes-SP': 'ESPECIAL+ COM PROMO 6M',
  'Promissao-SP': 'ESPECIAL+ COM PROMO 6M',
  'Registro-SP': 'ESPECIAL+ COM PROMO 6M',
  'Santa Cruz das Palmeiras-SP': 'ESPECIAL+ COM PROMO 6M',
  'Santa Cruz Do Rio Pardo-SP': 'ESPECIAL+ COM PROMO 6M',

 

  'Santa Rosa De Viterbo-SP': 'ESPECIAL+ COM PROMO 6M',
  'Sao Joao Da Boa Vista-SP': 'ESPECIAL+ COM PROMO 6M',
  'Sao Joao Del Rei-MG': 'ESPECIAL+ COM PROMO 6M',
  'Sao Joao De Meriti-RJ': 'ESPECIAL+ COM PROMO 6M',
  
  'Sao Joaquim Da Barra-SP': 'ESPECIAL+ COM PROMO 6M',
  'Sao Jose Do Rio Pardo-SP': 'ESPECIAL+ COM PROMO 6M',
  'Sao Pedro Da Aldeia-RJ': 'ESPECIAL+ COM PROMO 6M',
  'Serra Negra-SP': 'ESPECIAL+ COM PROMO 6M',
  'Serrana-SP': 'ESPECIAL+ COM PROMO 6M',
  'Tambau-SP': 'ESPECIAL+ COM PROMO 6M',
  'Tatui-SP': 'ESPECIAL+ COM PROMO 6M',
  'Timoteo-MG': 'ESPECIAL+ COM PROMO 6M',
  'Tremembe-SP': 'ESPECIAL+ COM PROMO 6M',
  'Tres Coracoes-MG': 'ESPECIAL+ COM PROMO 6M',
  'Tres Rios-RJ': 'ESPECIAL+ COM PROMO 6M',
  'Uba-MG': 'ESPECIAL+ COM PROMO 6M',
  'Valenca-RJ': 'ESPECIAL+ COM PROMO 6M',
  'Valparaiso-SP': 'ESPECIAL+ COM PROMO 6M',
 
  'Vassouras-RJ': 'ESPECIAL+ COM PROMO 6M',

  'Vicosa-MG': 'ESPECIAL+ COM PROMO 6M',
  'Votuporanga-SP': 'ESPECIAL+ COM PROMO 6M',
  'Cacoal-RO': 'ESPECIAL+ COM PROMO 6M',
  'Castanhal-PA': 'ESPECIAL+ COM PROMO 6M',
  'Gurupi-TO': 'ESPECIAL+ COM PROMO 6M',
  'Ji-Parana-RO': 'ESPECIAL+ COM PROMO 6M',

  'Maraba-PA': 'ESPECIAL+ COM PROMO 6M',
  'Paragominas-PA': 'ESPECIAL+ COM PROMO 6M',
  'Paraiso Do Tocantins-TO': 'ESPECIAL+ COM PROMO 6M',
  'Parauapebas-PA': 'ESPECIAL+ COM PROMO 6M',
  'Vilhena-RO': 'ESPECIAL+ COM PROMO 6M',
  'Alagoinhas-BA': 'ESPECIAL+ COM PROMO 6M',

  'Arapiraca-AL': 'ESPECIAL+ COM PROMO 6M',
  'Barreiras-BA': 'ESPECIAL+ COM PROMO 6M',
  'Caxias-MA': 'ESPECIAL+ COM PROMO 6M',
  'Eunapolis-BA': 'ESPECIAL+ COM PROMO 6M',

  'Feira De Santana-BA': 'ESPECIAL+ COM PROMO 6M',
  'Ilheus-BA': 'ESPECIAL+ COM PROMO 6M',
  'Imperatriz-MA': 'ESPECIAL+ COM PROMO 6M',
  'Itabuna-BA': 'ESPECIAL+ COM PROMO 6M',
  'Jequie-BA': 'ESPECIAL+ COM PROMO 6M',
  'Juazeiro Do Norte-CE': 'ESPECIAL+ COM PROMO 6M',
  'Juazeiro-BA': 'ESPECIAL+ COM PROMO 6M',
  'Mossoro-RN': 'ESPECIAL+ COM PROMO 6M',
  'Parnaiba-PI': 'ESPECIAL+ COM PROMO 6M',
  'Petrolina-PE': 'ESPECIAL+ COM PROMO 6M',
  'Porto Seguro-BA': 'ESPECIAL+ COM PROMO 6M',
  'Sobral-CE': 'ESPECIAL+ COM PROMO 6M',
  'Teixeira De Freitas-BA': 'ESPECIAL+ COM PROMO 6M',
  'Timon-MA': 'ESPECIAL+ COM PROMO 6M',
  'Bage-RS': 'ESPECIAL+ COM PROMO 6M',
  'Balneario Camboriu-SC': 'ESPECIAL+ COM PROMO 6M',
  'Bento Goncalves-RS': 'ESPECIAL+ COM PROMO 6M',
  'Blumenau-SC': 'ESPECIAL+ COM PROMO 6M',
  'Brusque-SC': 'ESPECIAL+ COM PROMO 6M',
  'Campo Bom-RS': 'ESPECIAL+ COM PROMO 6M',
  'Capao Da Canoa-RS': 'ESPECIAL+ COM PROMO 6M',
  'Chapeco-SC': 'ESPECIAL+ COM PROMO 6M',
  'Criciuma-SC': 'ESPECIAL+ COM PROMO 6M',
  'Cruz Alta-RS': 'ESPECIAL+ COM PROMO 6M',
  'Erechim-RS': 'ESPECIAL+ COM PROMO 6M',
  'Guarapuava-PR': 'ESPECIAL+ COM PROMO 6M',
  'Itajai-SC': 'ESPECIAL+ COM PROMO 6M',
  'Itapema-SC': 'ESPECIAL+ COM PROMO 6M',
  'Lajeado-RS': 'ESPECIAL+ COM PROMO 6M',
  'Passo Fundo-RS': 'ESPECIAL+ COM PROMO 6M',
  'Ponta Grossa-PR': 'ESPECIAL+ COM PROMO 6M',
  'Santa Cruz Do Sul-RS': 'ESPECIAL+ COM PROMO 6M',
  'Santa Maria-RS': 'ESPECIAL+ COM PROMO 6M',

  'Uruguaiana-RS': 'ESPECIAL+ COM PROMO 6M',
  'Aracatuba-SP': 'ESPECIAL+ COM PROMO 6M',
 
  'Barra Mansa-RJ': 'ESPECIAL+ COM PROMO 6M',

  'Cachoeira Paulista-SP': 'ESPECIAL+ COM PROMO 6M',
  'Cachoeiro De Itapemirim-ES': 'ESPECIAL+ COM PROMO 6M',
  'Cruzeiro-SP': 'ESPECIAL+ COM PROMO 6M',
  'Governador Valadares-MG': 'ESPECIAL+ COM PROMO 6M',
  'Guaratingueta-SP': 'ESPECIAL+ COM PROMO 6M',

  'Ipatinga-MG': 'ESPECIAL+ COM PROMO 6M',
  'Itapetininga-SP': 'ESPECIAL+ COM PROMO 6M',
  'Juiz De Fora-MG': 'ESPECIAL+ COM PROMO 6M',

  'Lorena-SP': 'ESPECIAL+ COM PROMO 6M',
  'Macae-RJ': 'ESPECIAL+ COM PROMO 6M',
  'Marilia-SP': 'ESPECIAL+ COM PROMO 6M',



  'Petropolis-RJ': 'ESPECIAL+ COM PROMO 6M',
  'Pindamonhangaba-SP': 'ESPECIAL+ COM PROMO 6M',
  'Resende-RJ': 'ESPECIAL+ COM PROMO 6M',
  'Sete Lagoas-MG': 'ESPECIAL+ COM PROMO 6M',

  'Uberaba-MG': 'ESPECIAL+ COM PROMO 6M',
  'Uberlandia-MG': 'ESPECIAL+ COM PROMO 6M',
  'Varginha-MG': 'ESPECIAL+ COM PROMO 6M',
  'Volta Redonda-RJ': 'ESPECIAL+ COM PROMO 6M',
  'Anapolis-GO': 'ESPECIAL+ COM PROMO 6M',
  'Dourados-MS': 'ESPECIAL+ COM PROMO 6M',
  'Rondonopolis-MT': 'ESPECIAL+ COM PROMO 6M',
  'Caruaru-PE': 'ESPECIAL+ COM PROMO 6M',
  'Vitoria Da Conquista-BA': 'ESPECIAL+ COM PROMO 6M',


    'Belford Roxo-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Betim-MG': 'ESPECIAL+ COM PROMO 3M',
    'Duque de Caxias-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Nova Odessa-SP': 'ESPECIAL+ COM PROMO 3M',
    'São João de Meriti-RJ': 'ESPECIAL+ COM PROMO 3M',
    'São Francisco do Sul-SC': 'ESPECIAL+ COM PROMO 3M',
    'São Leopoldo-RS': 'ESPECIAL+ COM PROMO 3M',
    'Américo Brasiliense-SP': 'ESPECIAL+ COM PROMO 3M',
    'Cabreúva-SP': 'ESPECIAL+ COM PROMO 3M',
    'Cajamar-SP': 'ESPECIAL+ COM PROMO 3M',
    'Campo Limpo Paulista-SP': 'ESPECIAL+ COM PROMO 3M',
    'Cordeirópolis-SP': 'ESPECIAL+ COM PROMO 3M',
    'Itaguaí-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Itaquaquecetuba-SP': 'ESPECIAL+ COM PROMO 3M',
    'Jarinu-SP': 'ESPECIAL+ COM PROMO 3M',
    'Lagoa Santa-MG': 'ESPECIAL+ COM PROMO 3M',
    'Piracaia-SP': 'ESPECIAL+ COM PROMO 3M',
    'Santa Gertrudes-SP': 'ESPECIAL+ COM PROMO 3M',
    'Santa Isabel-SP': 'ESPECIAL+ COM PROMO 3M',
    'Santa Luzia-MG': 'ESPECIAL+ COM PROMO 3M',
    'Vargem Paulista-SP': 'ESPECIAL+ COM PROMO 3M',
    'Vespasiano-MG': 'ESPECIAL+ COM PROMO 3M',
    'Artur Nogueira-SP': 'ESPECIAL+ COM PROMO 3M',
    'Bertioga-SP': 'ESPECIAL+ COM PROMO 3M',
    'Hortolândia-SP': 'ESPECIAL+ COM PROMO 3M',
    'Limeira-SP': 'ESPECIAL+ COM PROMO 3M',
    'Nilópolis-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Nova Iguaçu-RJ': 'ESPECIAL+ COM PROMO 3M',
    'Nova Lima-MG': 'ESPECIAL+ COM PROMO 3M',
    'Sumaré-SP': 'ESPECIAL+ COM PROMO 3M',
    'Macapá-AP': 'ESPECIAL+ COM PROMO 3M',
    'Aquiraz-CE': 'ESPECIAL+ COM PROMO 3M',
    'Eusébio-CE': 'ESPECIAL+ COM PROMO 3M',



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

  'Campo Grande-MS': 'ESPECIAL COM PROMO 3M',

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
  'Aracaju-SE': 'ESPECIAL+ COM OFERTA E PROMO 3/6M',
  'Aparecida De Goiania-GO': 'ESPECIAL+ COM OFERTA E PROMO 3M',
  'Goiania-GO': 'ESPECIAL+ COM OFERTA E PROMO 3M',
  'Fortaleza-CE': 'ESPECIAL+ COM OFERTA E PROMO 3M',
  'Teresina-PI': 'ESPECIAL+ COM OFERTA E PROMO 3M',
  'Cabedelo-PB': 'ESPECIAL COM OFERTA',
  'Joao Pessoa-PB': 'ESPECIAL COM OFERTA',
  'Maceio-AL': 'ESPECIAL COM OFERTA',
  'Natal-RN': 'ESPECIAL COM OFERTA',
  'Parnamirim-RN': 'ESPECIAL COM OFERTA',
  'Campina Grande do Sul-PR':'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Campo Mourao-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Castro-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Cornelio Procopio-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Fazenda Rio Grande-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Foz Do Iguacu-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Francisco Beltrao-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Guaratuba-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Ibipora-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Ijui-RS': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Marechal Candido Rondon-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Matinhos-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Medianieira-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Paicandu-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Palmas-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Pato Branco-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Piraquara-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Quatro Barras-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Sarandi-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Telemaco Borba-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Toledo-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Umuarama-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Uniao Da Vitoria-PR': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Alfenas-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Arcos-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Carmelo-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Formiga-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Guaxupe-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Joao Monlevade-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Lagoa da Prata-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Leopoldina-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Mariana-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Matozinhos-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Monte Carmelo-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Muriae-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Nova Serrana-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Ouro Preto-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Patrocinio-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Pedro Leopoldo-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Piumhi-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Ponte Nova-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Sacramento-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Santa Cruz de Minas-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Santa Rita Do Sapucai-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Sao Sebastiao do Paraiso-MG': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',
  'Luziania-GO': 'ESPECIAL+ REDES NEUTRAS PROMO 6M',

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

// Se quiser um efeito mais personalizado, pode usar JavaScript para controlar a animação
// Por exemplo, para iniciar e parar a animação em momentos específicos
 function startBlink() {
    document.getElementById('mb250').style.animationPlayState = 'running';
}

 function stopBlink() {
    document.getElementById('mb250').style.animationPlayState = 'paused';
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
