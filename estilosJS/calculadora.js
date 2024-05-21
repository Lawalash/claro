function calcularValor() {
    const internetValue = parseFloat(document.getElementById('internet').value) || 0;
    const tvValue = parseFloat(document.getElementById('tv').value) || 0;
    const rentabilidadeValue = parseFloat(document.getElementById('rentabilidade').value) || 0;
    const descontoValue = parseFloat(document.getElementById('desconto').value) || 0;
    const telefoneValue = parseFloat(document.getElementById('telefone').value) || 0;
    const pontoAdicionalValue = parseFloat(document.getElementById('pontoAdicional').value) || 0;
    const movelValue = parseFloat(document.getElementById('movel').value) || 0; // Adicionando o valor do plano móvel

    let totalValue = 0;
    if (rentabilidadeValue > 0 && descontoValue > 0) {
        totalValue = internetValue + rentabilidadeValue + descontoValue + tvValue + telefoneValue + pontoAdicionalValue + movelValue; // Incluindo o valor do plano móvel na soma total
    } else if (rentabilidadeValue > 0) {
        totalValue = internetValue + rentabilidadeValue + tvValue + telefoneValue + pontoAdicionalValue + movelValue; // Incluindo o valor do plano móvel na soma total
    } else if (descontoValue > 0) {
        totalValue = internetValue + descontoValue + tvValue + telefoneValue + pontoAdicionalValue + movelValue; // Incluindo o valor do plano móvel na soma total
    } else {
        totalValue = internetValue + tvValue + telefoneValue + pontoAdicionalValue + movelValue; // Incluindo o valor do plano móvel na soma total
    }

    document.getElementById('resultado').innerText = `Valor Total: R$${totalValue.toFixed(2)}`;
}

function mostrarRentabilidade() {
    const checkbox = document.getElementById('rentabilidadeCheckbox');
    const rentabilidadeDiv = document.getElementById('rentabilidadeDiv');

    if (checkbox.checked) {
        rentabilidadeDiv.style.display = 'block';
    } else {
        rentabilidadeDiv.style.display = 'none';
    }

    calcularValor(); // Chamar a função calcularValor para atualizar o valor total
}

function mostrarDesconto() {
    const checkbox = document.getElementById('boxCheckbox');
    const descontoDiv = document.getElementById('descontoDiv');

    if (checkbox.checked) {
        descontoDiv.style.display = 'block';
    } else {
        descontoDiv.style.display = 'none';
    }

    calcularValor(); // Chamar a função calcularValor para atualizar o valor total
}

function mostrarPontoAdicional() {
    const checkbox = document.getElementById('pontoAdicionalCheckbox');
    const pontoAdicionalDiv = document.getElementById('pontoAdicionalDiv');

    if (checkbox.checked) {
        pontoAdicionalDiv.style.display = 'block';
    } else {
        pontoAdicionalDiv.style.display = 'none';
    }

    calcularValor(); // Chamar a função calcularValor para atualizar o valor total
}

window.onload = function () {
    calcularValor(); // Chamar a função calcularValor ao carregar a página
}
