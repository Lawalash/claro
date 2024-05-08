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

    var comboElement = document.querySelector('.combo');
    comboElement.addEventListener('click', function () {
        abrirImagem();
    });

    var proximoBtn = document.getElementById('proximoBtn');
    var anteriorBtn = document.getElementById('anteriorBtn');

    proximoBtn.addEventListener('click', function () {
        mudarImagem(1); // Avança para a próxima imagem
    });

    anteriorBtn.addEventListener('click', function () {
        mudarImagem(-1); // Retrocede para a imagem anterior
    });
});

var imagens = ['imagens/combo.jpg', 'imagens/combo2.jpeg','imagens/combo3.jpeg','imagens/combo4.jpeg']; // Lista de URLs das imagens
var indiceAtual = 0; // Índice da imagem atual

function abrirImagem() {
    var modal = document.getElementById('imagemModal');
    var imagem = document.getElementById('imagemModalSrc');
    imagem.src = imagens[indiceAtual];
    modal.style.display = 'block';
}

function fecharImagem() {
    var modal = document.getElementById('imagemModal');
    modal.style.display = 'none';
}

function mudarImagem(direcao) {
    indiceAtual += direcao;
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1; // Voltar para a última imagem se estiver na primeira
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0; // Voltar para a primeira imagem se estiver na última
    }
    var imagem = document.getElementById('imagemModalSrc');
    imagem.src = imagens[indiceAtual];
}
