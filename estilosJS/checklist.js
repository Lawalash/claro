function calculateProportional() {
  // Obter as datas e o valor do produto
  var startDate = new Date(document.getElementById("startDate").value);
  var dueDate = new Date(document.getElementById("dueDate").value);
  var productValue = parseFloat(document.getElementById("productValue").value);

  // Calcular a diferença em milissegundos entre as datas
  var timeDiff = dueDate - startDate;

  // Calcular o número de dias
  var daysUsed = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Calcular o valor proporcional
  var proportionalValue = (productValue / 30) * daysUsed;

  // Exibir o resultado
  document.getElementById("result").innerHTML = "Valor Proporcional: R$ " + proportionalValue.toFixed(2);
}

function calculateProportional() {
  var startDate = new Date(document.getElementById('startDate').value);
  var dueDate = new Date(document.getElementById('dueDate').value);
  var productValue = parseFloat(document.getElementById('productValue').value);

  if (isNaN(productValue) || startDate > dueDate) {
    alert('Por favor, preencha os campos corretamente.');
    return;
  }

  var timeDifference = dueDate.getTime() - startDate.getTime();
  var daysUsed = Math.ceil(timeDifference / (1000 * 3600 * 24));

  var dailyCost = productValue / 30; // Considerando um mês de 30 dias
  var proportionalCost = dailyCost * daysUsed;

  document.getElementById('result').innerHTML = 'Custo Proporcional: R$ ' + proportionalCost.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function () {
  var claroFixoTab = document.querySelector('.list-itens li:nth-child(4) a');
  var claroFixoTable = document.getElementById('claroFixoTab');

  claroFixoTab.addEventListener('click', function () {
      claroFixoTable.style.display = (claroFixoTable.style.display === 'none' || claroFixoTable.style.display === '') ? 'block' : 'none';
  });
});

