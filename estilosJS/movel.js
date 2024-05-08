document.addEventListener('DOMContentLoaded', function () {
    // Selecionando o link "MÓVEL"
    var movelLink = document.querySelector('a[href="tabelamovel.html"]');

    // Selecionando o main pelo id
    var tabelaMovel = document.getElementById('tabelaMovel');

    // Adicionando um evento de clique ao link "MÓVEL"
    movelLink.addEventListener('click', function () {
        // Verificando se o main está oculto
        if (tabelaMovel.style.display === 'none') {
            // Mostrando o main
            tabelaMovel.style.display = 'block';
        } else {
            // Ocultando o main
            tabelaMovel.style.display = 'none';
        }
    });

    // Novo script para mostrar/ocultar linhas da tabela ao clicar no botão "Mostrar Oferta"
    var toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function () {
        var rowsToShow = document.querySelectorAll('.mostrar-oferta');
        rowsToShow.forEach(row => {
            row.style.display = (row.style.display === 'none' || row.style.display === '') ? 'table-row' : 'none';
        });
    });

    

    // Script para mostrar/ocultar janela modal ao clicar no botão "Exibir Lista de Cidades"
    var exibirListaButton = document.getElementById('exibirListaButton');
    var janelaModal = document.getElementById('janelaModal');

    exibirListaButton.addEventListener('click', function () {
        janelaModal.style.display = 'block';
    });

    // Fechar a janela modal ao clicar no botão de fechar (X)
    document.querySelector('.close').addEventListener('click', function () {
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

    var respostaOferta = document.getElementById('respostaOferta');

    confirmarCidadeButton.addEventListener('click', function () {
        var cidadeDigitada = pesquisarCidadeInput.value.trim().toLowerCase();
        var cidadesDisponiveis = [ 'alvorada-rs', 'americana-sp', 'sao paulo-sp', 'ananindeua-pa','anapolis-go', 'aparecida de goiania-go', 'aparecida-sp', 'aracaju-se', 'aracatuba-sp', 'arapongas-pr','araraquara-sp', 'araras-sp', 'araucaria-pr', 'artur nogueira-sp', 'atibaia-sp', 'bage-rs','balneario camboriu-sc', 'almirante tamandare-pr', 'barra mansa-rj', 'barueri-sp', 'bauru-sp', 'belem-pa', 'belford roxo-rj','belo horizonte-mg', 'bento goncalves-rs', 'bertioga-sp', 'betim-mg', 'blumenau-sc', 'botucatu-sp','braganca paulista-sp', 'brasilia-df', 'brusque-sc', 'cabedelo-pb', 'cacapava-sp', 'cachoeira paulista-sp',
        'cachoeirinha-rs', 'cachoeiro de itapemirim-es', 'campina grande-pb', 'campinas-sp', 'campo bom-rs','campo grande-ms', 'campo largo-pr', 'campos dos goytacazes-rj', 'canoas-rs', 'capao da canoa-rs',
        'capivari-sp', 'carapicuiba-sp', 'cariacica-es', 'caruaru-pe', 'cascavel-pr', 'caxias do sul-rs',
        'chapeco-sc', 'cianorte-pr', 'colombo-pr', 'contagem-mg', 'cosmopolis-sp', 'cotia-sp', 'criciuma-sc',
        'cruz alta-rs', 'cruzeiro-sp', 'cubatao-sp', 'cuiaba-mt', 'curitiba-pr', 'diadema-sp', 'dourados-ms',
        'duque de caxias-rj', 'elias fausto-sp', 'embu das artes-sp', 'erechim-rs', 'estancia velha-rs',
        'esteio-rs', 'farroupilha-rs', 'florianopolis-sc', 'fortaleza-ce', 'franca-sp', 'goiania-go',
        'governador valadares-mg', 'gravatai-rs', 'guarapuava-pr', 'guaratingueta-sp', 'guaruja-sp', 'guarulhos-sp', 'hortolandia-sp', 'indaiatuba-sp', 'ipatinga-mg', 'itajai-sc',
        'itapecerica da serra-sp', 'itapema-sc', 'itapetininga-sp', 'itapevi-sp', 'itu-sp', 'jaboatao dos guararapes-pe',
        'jacarei-sp', 'jandira-sp', 'jau-sp', 'joao pessoa-pb', 'joinville-sc', 'juiz de fora-mg', 'jundiai-sp', 'lajeado-rs',
        'lauro de freitas-ba', 'limeira-sp', 'londrina-pr', 'lorena-sp', 'macae-rj', 'maceio-al', 'manaus-am', 'marilia-sp',
        'maringa-pr', 'maua-sp', 'mesquita-rj', 'mogi das cruzes-sp', 'mogi guacu-sp', 'mogi mirim-sp', 'monte mor-sp',
        'natal-rn', 'navegantes-sc', 'nilopolis-rj', 'niteroi-rj', 'nova iguacu-rj', 'nova lima-mg', 'nova odessa-sp',
        'novo hamburgo-rs', 'olinda-pe', 'osasco-sp', 'palhoca-sc', 'palmas-to', 'parnamirim-rn', 'passo fundo-rs',
        'paulinia-sp', 'paulista-pe', 'pelotas-rs', 'petropolis-rj', 'pindamonhangaba-sp', 'pinhais-pr', 'piracicaba-sp',
        'poa-sp', 'ponta grossa-pr', 'porto alegre-rs', 'porto feliz-sp', 'porto velho-ro', 'potim-sp', 'praia grande-sp',
        'presidente prudente-sp', 'rafard-sp', 'recife-pe', 'resende-rj', 'ribeirao preto-sp', 'rio branco-ac', 'rio claro-sp',
        'rio das ostras-rj', 'rio grande-rs', 'rondonopolis-mt', 'sabara-mg', 'salto-sp', 'salvador-ba', 'santa barbara d\'oeste-sp', 'santa cruz do sul-rs',
        'santa maria-rs', 'santana de parnaiba-sp', 'santo andre-sp', 'santos-sp', 'sapiranga-rs', 'sapucaia do sul-rs',
        'sertaozinho-sp', 'suzano-sp', 'taboao da serra-sp', 'teofilo otoni-mg', 'teresopolis-rj', 'tiete-sp', 'uberaba-mg',
        'uberlandia-mg', 'uruguaiana-rs', 'valinhos-sp', 'vargem grande paulista-sp', 'varginha-mg', 'varzea grande-mt',
        'viamao-rs', 'vila velha-es', 'vinhedo-sp', 'vitoria da conquista-ba', 'vitoria-es', 'volta redonda-rj',
        'votorantim-sp', 'xangri-la-rs', 'alegrete-rs', 'alfenas-mg', 'aluminio-sp', 'alvares machado-sp', 'amarante do maranhao-ma',
        'amarante-pi', 'amargosa-ba', 'anapolis-go', 'aracaju-se', 'araguaina-to', 'ararangua-sc', 'araraquara-sp', 'araras-sp',
        'araxa-mg', 'arcos-mg', 'ariquemes-ro', 'armacao dos buzios-rj', 'arroio do meio-rs', 'artur nogueira-sp', 'aruja-sp',
        'atibaia-sp', 'avare-sp', 'balneario camboriu-sc', 'barbacena-mg', 'barra mansa-rj', 'barreiras-ba', 'barretos-sp',
        'barrinha-sp', 'batatais-sp', 'bebedouro-sp', 'bento goncalves-rs', 'bertioga-sp', 'biguacu-sc', 'birigui-sp',
        'blumenau-sc', 'boituva-sp', 'braganca paulista-sp', 'brasilia-df', 'brusque-sc', 'cabo frio-rj', 'cabreuva-sp',
        'cacador-sc', 'cachoeira do sul-rs', 'cachoeira paulista-sp', 'cachoeirinha-rs', 'cachoeiro de itapemirim-es',
        'cacique doble-rs', 'cacoal-ro', 'caetite-ba', 'caico-rn', 'cajamar-sp', 'caldas novas-go', 'camaqua-rs', 'camboriu-sc',
        'campina grande do sul-pr', 'campinas-sp', 'campo bom-rs', 'campo grande-ms', 'campo largo-pr', 'campo limpo paulista-sp',
        'campo mourao-pr', 'campos do jordao-sp', 'campos dos goytacazes-rj', 'canela-rs', 'canoas-rs', 'capao da canoa-rs',
        'caragua-sp', 'caraguatatuba-sp', 'carapicuiba-sp', 'caratinga-mg', 'carazinho-rs', 'cariacica-es', 'caruaru-pe',
        'cascavel-pr', 'casimiro de abreu-rj', 'castanhal-pa', 'castro-pr', 'cataguases-mg', 'catanduva-sp', 'caxias do sul-rs',
        'caxias-ma', 'cerquilho-sp', 'chapada dos guimaraes-mt', 'charqueadas-rs', 'chapeco-sc', 'charqueadas-rs', 'colatina-es', 'concordia-sc', 'conselheiro lafaiete-mg', 'contagem-mg', 'cordeiropolis-sp',
        'coronel fabriciano-mg', 'cosmopolis-sp', 'cravinhos-sp', 'criciuma-sc', 'cruzeiro-sp', 'cuiaba-mt', 'curitiba-pr',
        'descalvado-sp', 'diadema-sp', 'divinopolis-mg', 'dois irmaos-rs', 'dourados-ms', 'dracena-sp', 'eldorado do sul-rs',
        'elias fausto-sp', 'embu das artes-sp', 'encantado-rs', 'erechim-rs', 'espirito santo do pinhal-sp', 'estrela-rs',
        'eunapolis-ba', 'eusebio-ce', 'farroupilha-rs', 'fazenda rio grande-pr', 'feira de santana-ba', 'fernandopolis-sp',
        'florianopolis-sc', 'formiga-mg', 'fortaleza-ce', 'foz do iguacu-pr', 'fraiburgo-sc', 'frederico westphalen-rs',
        'garca-sp', 'garibaldi-rs', 'gaspar-sc', 'goiania-go', 'governador valadares-mg', 'gramado-rs', 'gravatai-rs',
        'guaiba-rs', 'guaira-sp', 'guapiacu-sp', 'guaramirim-sc', 'guarapuava-pr', 'guararapes-sp', 'guaratingueta-sp',
        'guaratuba-pr', 'guaruja-sp', 'guarulhos-sp', 'guaxupe-mg', 'gurupi-to', 'herval d','oeste-sc', 'hortolandia-sp',
        'ibate-sp', 'ibipora-pr', 'ibiuna-sp', 'icara-sc', 'igrejinha-rs', 'ijui-rs', 'ilheus-ba', 'imbe-rs', 'imperatriz-ma',
        'indaial-sc', 'indaiatuba-sp', 'ipatinga-mg', 'ipero-sp', 'itabira-mg', 'itabuna-ba', 'itaguai-rj', 'itajai-sc',
        'itajuba-mg', 'itanhaem-sp', 'itapema-sc', 'itapetininga-sp', 'itapeva-sp', 'itapira-sp', 'itaquaquecetuba-sp',
        'itaqui-rs', 'itatiba-sp', 'itauna-mg', 'ituiutaba-mg', 'itumbiara-go', 'itupeva-sp', 'itu-sp', 'ituverava-sp',
        'ivoti-rs', 'jaboatao dos guararapes-pe', 'jaboticabal-sp', 'jacarei-sp', 'jaguariuna-sp', 'jales-sp', 'jaragua do sul-sc',
        'jardinopolis-sp', 'jarinu-sp', 'jau-sp', 'jequie-ba', 'ji-parana-ro', 'joacaba-sc', 'joao monlevade-mg',
        'joao pessoa-pb', 'joinville-sc', 'jose bonifacio-sp', 'juazeiro do norte-ce', 'juazeiro-ba', 'juiz de fora-mg',
        'jundiai-sp', 'lages-sc', 'lagoa da prata-mg', 'lagoa santa-mg', 'lajeado-rs', 'laranjal paulista-sp', 'lauro de freitas-ba',
        'lavras-mg', 'leme-sp', 'lencois paulista-sp', 'leopoldina-mg', 'limeira-sp', 'lins-sp', 'londrina-pr', 'lorena-sp',
        'louveira-sp', 'lucas do rio verde-mt', 'macae-rj', 'macapa-ap', 'maceio-al', 'mafra-sc', 'mairinque-sp', 'manaus-am',
        'manhuacu-mg', 'maraba-pa', 'marau-rs', 'marechal candido rondon-pr', 'mariana-mg', 'marilia-sp', 'mata de sao joao-ba',
        'matao-sp', 'matinhos-pr', 'matosinhos-mg', 'medianeria-pr', 'charqueadas-rs', 'colatina-es', 'concordia-sc',
        'conselheiro lafaiete-mg', 'contagem-mg', 'cordeiropolis-sp', 'coronel fabriciano-mg', 'cosmopolis-sp', 'cravinhos-sp',
        'criciuma-sc', 'cruzeiro-sp', 'cuiaba-mt', 'curitiba-pr', 'descalvado-sp', 'diadema-sp', 'divinopolis-mg', 'dois irmaos-rs',
        'dourados-ms', 'dracena-sp', 'eldorado do sul-rs', 'elias fausto-sp', 'embu das artes-sp', 'encantado-rs', 'erechim-rs',
        'espirito santo do pinhal-sp', 'estrela-rs', 'eunapolis-ba', 'eusebio-ce', 'farroupilha-rs', 'fazenda rio grande-pr',
        'feira de santana-ba', 'fernandopolis-sp', 'florianopolis-sc', 'formiga-mg', 'fortaleza-ce', 'foz do iguacu-pr',
        'fraiburgo-sc', 'frederico westphalen-rs', 'garca-sp', 'garibaldi-rs', 'gaspar-sc', 'goiania-go', 'governador valadares-mg',
        'gramado-rs', 'gravatai-rs', 'guaiba-rs', 'guaira-sp', 'guapiacu-sp', 'guaramirim-sc', 'guarapuava-pr', 'guararapes-sp',
        'guaratingueta-sp', 'guaratuba-pr', 'guaruja-sp', 'guarulhos-sp', 'guaxupe-mg', 'gurupi-to', 'herval doeste-sc',
        'hortolandia-sp', 'ibate-sp', 'ibipora-pr', 'ibiuna-sp', 'icara-sc', 'igrejinha-rs', 'ijui-rs', 'ilheus-ba', 'imbe-rs',
        'imperatriz-ma', 'indaial-sc', 'indaiatuba-sp', 'ipatinga-mg', 'ipero-sp', 'itabira-mg', 'itabuna-ba', 'itaguai-rj',
        'itajai-sc', 'itajuba-mg', 'itanhaem-sp', 'itapema-sc', 'itapetininga-sp', 'itapeva-sp', 'itapira-sp',
        'itaquaquecetuba-sp', 'itaqui-rs', 'itatiba-sp', 'itauna-mg', 'ituiutaba-mg', 'itumbiara-go', 'itupeva-sp',
        'itu-sp', 'ituverava-sp', 'ivoti-rs', 'jaboatao dos guararapes-pe', 'jaboticabal-sp', 'jacarei-sp', 'jaguariuna-sp',
        'jales-sp', 'jaragua do sul-sc', 'jardinopolis-sp', 'jarinu-sp', 'jau-sp', 'jequie-ba', 'ji-parana-ro', 'joacaba-sc',
        'joao monlevade-mg', 'joao pessoa-pb', 'joinville-sc', 'jose bonifacio-sp', 'juazeiro do norte-ce', 'juazeiro-ba',
        'juiz de fora-mg', 'jundiai-sp', 'lages-sc', 'lagoa da prata-mg', 'lagoa santa-mg', 'lajeado-rs', 'laranjal paulista-sp',
        'lauro de freitas-ba', 'lavras-mg', 'leme-sp', 'lencois paulista-sp', 'leopoldina-mg', 'limeira-sp', 'lins-sp',
        'londrina-pr', 'lorena-sp', 'louveira-sp', 'lucas do rio verde-mt', 'macae-rj', 'macapa-ap', 'maceio-al', 'mafra-sc',
        'mairinque-sp', 'manaus-am', 'manhuacu-mg', 'maraba-pa', 'marau-rs', 'marechal candido rondon-pr', 'mariana-mg',
        'marilia-sp', 'mata de sao joao-ba', 'matao-sp', 'matinhos-pr', 'matosinhos-mg', 'medianeria-pr', 'medianeira-pr', 'miguel pereira-rj', 'mirandopolis-sp', 'mirassol-sp', 'mococa-sp', 'mogi das cruzes-sp',
        'mogi mirim-sp', 'mongagua-sp', 'monte alto-sp', 'monte carmelo-mg', 'montenegro-rs',
        'montes claros-mg', 'mossoro-rn', 'muriae-mg', 'natal-rn', 'navirai-ms', 'nilopolis-rj',
        'niteroi-rj', 'nova friburgo-rj', 'nova iguacu-rj', 'nova lima-mg', 'nova petropolis-rs',
        'nova serrana-mg', 'novo hamburgo-rs', 'olimpia-sp', 'olinda-pe', 'orlandia-sp', 'osasco-sp',
        'osorio-rs', 'ourinhos-sp', 'ouro preto-mg', 'paicandu-pr', 'palhoca-sc', 'palmas-pr',
        'palmas-to', 'palmeira das missoes-rs', 'panambi-rs', 'para de minas-mg', 'paragominas-pa',
        'paraiba do sul-rj', 'paraiso do tocantins-to', 'paranagua-pr', 'parnaiba-pi', 'parnamirim-rn',
        'parobe-rs', 'passo fundo-rs', 'pato branco-pr', 'patos de minas-mg', 'paulinia-sp', 'paulista-pe',
        'pedreira-sp', 'pedro leopoldo-mg', 'pelotas-rs', 'penapolis-sp', 'peruibe-sp', 'petrolina-pe',
        'petropolis-rj', 'piedade-sp', 'pindamonhangaba-sp', 'piracicaba-sp', 'piraquara-pr', 'pirassununga-sp',
        'piumhi-mg', 'pocos de caldas-mg', 'ponta grossa-pr', 'ponta pora-ms', 'pontal-sp', 'ponte nova -mg',
        'porto alegre-rs', 'porto ferreira-sp', 'porto seguro-ba', 'porto velho-ro', 'pouso alegre-mg',
        'praia grande-sp', 'presidente bernardes-sp', 'promissao-sp', 'quatro barras-pr', 'recife-pe',
        'registro-sp', 'resende-rj', 'ribeirao pires-sp', 'ribeirao preto-sp', 'rio branco-ac', 'rio claro-sp',
        'rio de janeiro-rj', 'rio do sul-sc', 'rio grande-rs', 'rio negrinho-sc', 'rio pardo-rs', 'rio verde-go',
        'rolandia-pr', 'rondonopolis-mt', 'rosario do sul-rs', 'sacramento-mg', 'salvador-ba',
        'santa cruz das palmeiras-sp', 'santa cruz de minas-mg', 'santa cruz do rio pardo-sp',
        'santa cruz do sul-rs', 'santa gertrudes-sp', 'santa helena de goias-go', 'santa isabel-sp',
        'santa luzia-mg', 'santa maria-rs', 'santa rita do sapucai-mg', 'santa rosa do viterbo-sp',
        'santa rosa-rs', 'santana do livramento-rs', 'santana-ap', 'santo andre-sp', 'santo angelo-rs',
        'santos-sp', 'sul-sc', 'sao bernardo do campo-sp', 'sao borja-rs', 'sao caetano do sul-sp',
        'sao francisco do sul-sc', 'sao gabriel-rs', 'sao joao da boa vista-sp', 'sao joao del rei-mg',
        'sao joaquim da barra-sp', 'sao jose do rio pardo-sp', 'sao jose do rio preto-sp', 'sao jose dos campos-sp',
        'sao jose-sc', 'sao leopoldo-rs', 'sao lourenco do sul-rs', 'sao luis-ma', 'sao luiz gonzaga-rs', 'sao pedro da aldeia-rj', 'sao roque-sp', 'sao sebastiao do paraiso-mg', 'sao sebastiao-sp',
        'sarandi-pr', 'senador canedo-go', 'serra negra-sp', 'serra-es', 'serrana-sp', 'sete lagoas-mg',
        'sinop-mt', 'sobral-ce', 'sorocaba-sp', 'sorriso-mt', 'sumare-sp', 'tambau-sp', 'taquara-rs', 'tatui-sp', 'taubate-sp', 'teixeira de freitas-ba', 'telemaco borba-pr', 'teresina-pi',
        'teutonia-rs', 'timbo-sc', 'timon-ma', 'timoteo-mg', 'toledo-pr', 'torres-rs', 'tramandai-rs',
        'tremembe-sp', 'tres coracoes-mg', 'tres coroas-rs', 'tres lagoas-ms', 'tres rios-rj', 'trindade-go',
        'tubarao-sc', 'uba-mg', 'ubatuba-sp', 'uberaba-mg', 'uberlandia-mg', 'umuruama-pr', 'uniao da vitoria-pr',
        'uruguaiana-rs', 'vacaria-rs', 'valenca-rj', 'valinhos-sp', 'valparaiso de goias-go', 'valparaiso-sp',
        'varginha-mg', 'varzea paulista-sp', 'vassouras-rj', 'venancio aires-rs', 'vera cruz-sp', 'veranopolis-rs',
        'vespasiano-mg', 'viamao-rs', 'vicosa-mg', 'videira-sc', 'vila velha-es', 'vilhena-ro', 'vitoria da conquista-ba',
        'vitoria-es', 'volta redonda-rj', 'votuporanga-sp', 'xanxere-sc', 'xaxim-sc'
        
        
        
            
        ];
    
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
});
