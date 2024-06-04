document.addEventListener('DOMContentLoaded', function () {
    var internetTab = document.querySelector('.list-itens li:nth-child(1) a'); // Selecione o link da aba "INTERNET"
    var internetTable = document.getElementById('internetTable'); // Selecione a div da tabela

    internetTab.addEventListener('click', function () {
        // Alterna a visibilidade da tabela ao clicar na aba "INTERNET"
        internetTable.style.display = (internetTable.style.display === 'none' || internetTable.style.display === '') ? 'block' : 'none';
    });
});

function calculateProRata() {
    // Obter valores dos campos de entrada
    const startDate = new Date(document.getElementById('startDate').value);
    const dueDate = new Date(document.getElementById('dueDate').value);
    const monthlyCost = parseFloat(document.getElementById('monthlyCost').value);
  
    // Validar entradas
    if (isNaN(startDate) || isNaN(dueDate) || isNaN(monthlyCost) || monthlyCost <= 0) {
      alert('Dados inválidos. Verifique as datas e o valor mensal.');
      return;
    }
  
    // Calcular número de dias no mês de vencimento
    const dueMonth = dueDate.getMonth(); // Obter índice do mês de vencimento
    const dueYear = dueDate.getFullYear(); // Obter ano de vencimento
    const daysInMonth = new Date(dueYear, dueMonth + 1, 0).getDate(); // Calcular dias no mês de vencimento
  
    // Calcular dias utilizados
    const startDateDay = startDate.getDate(); // Obter dia de início
    const daysUsed = dueDate.getDate() - startDateDay; // Calcular dias utilizados
  
    // Calcular valor pro rata
    const proRata = (monthlyCost * daysUsed) / daysInMonth; // Calcular custo pro rata
  
    // Formatar e exibir resultado
    const formattedResult = proRata.toFixed(2); // Formatar resultado com duas casas decimais
    document.getElementById('result').innerHTML = `Cliente vai pagar: R$ ${formattedResult}  a mais`; // Exibir resultado
  }
  