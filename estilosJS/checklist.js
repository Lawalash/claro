function calculateProRata() {
  var startDate = new Date(document.getElementById("startDate").value);
  var dueDate = new Date(document.getElementById("dueDate").value);
  var monthlyCost = parseFloat(document.getElementById("monthlyCost").value);

  if (isNaN(monthlyCost) || startDate > dueDate) {
    alert('Por favor, preencha os campos corretamente.');
    return;
  }

  var timeDifference = dueDate.getTime() - startDate.getTime();
  var daysUsed = Math.ceil(timeDifference / (1000 * 3600 * 24));

  var dailyCost = monthlyCost / 30; // Considerando um mês de 30 dias
  var proRataCost = dailyCost * daysUsed;

  document.getElementById('result').innerHTML = 'Custo Pro Rata: R$ ' + proRataCost.toFixed(2);
}
