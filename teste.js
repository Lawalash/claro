function buscarCEP() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          document.getElementById('resultado').innerHTML = 'CEP não encontrado.';
        } else {
          const resultado = `
          
        <div class="resultado">
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.localidade}</p>
            <p><strong>Estado:</strong> ${data.uf}</p>   
            <p><strong>CEP:</strong> ${data.cep}</p>
            <button class="btn btn-primary" onclick="copiarEndereco()">Copiar</button>
        </div>
          `;
          document.getElementById('resultado').innerHTML = resultado;
        }
      })
      .catch(error => {
        console.error('Erro na busca:', error);
      });
  }
  function limparCEP() {
    document.getElementById('cep').value = '';
    document.getElementById('resultado').innerHTML = '';
  }
  
  function copiarEndereco() {
  const endereco = document.getElementById('resultado').textContent;
  const textarea = document.createElement('textarea');
  textarea.value = endereco;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  document.getElementById('alerta').classList.remove('d-none'); // Remove "d-none" class

  // Optional: Hide the alert after a few seconds (using setTimeout)
  setTimeout(() => {
    document.getElementById('alerta').classList.add('d-none'); // Add "d-none" class back
  }, 3000); // Hide after 3 seconds
}
