// teste.js

// Máscara automática para CEP
document.getElementById('cep').addEventListener('input', e => {
  let v = e.target.value.replace(/\D/g, '');
  if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5, 8);
  e.target.value = v;
});

// Permite usar Enter para buscar
document.getElementById('cep').addEventListener('keypress', e => {
  if (e.key === 'Enter') buscarCEP();
});

function buscarCEP() {
  // Habilita rolagem vertical assim que iniciar a busca
  document.documentElement.style.overflowY = 'auto';
  document.body.style.overflowY = 'auto';

  const cepInput   = document.getElementById('cep');
  const cep        = cepInput.value.replace(/\D/g, '');
  const buscarBtn  = document.getElementById('buscarBtn');
  const resultadoD = document.getElementById('resultado');

  if (cep.length !== 8) {
    return showError('Por favor, digite um CEP válido com 8 dígitos.');
  }

  // Estado de carregamento
  buscarBtn.innerHTML  = '<span class="loading"></span>Buscando...';
  buscarBtn.disabled   = true;
  resultadoD.innerHTML = '';

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(r => r.json())
    .then(data => {
      if (data.erro) {
        showError('CEP não encontrado. Verifique se o número está correto.');
      } else {
        showResult(data);
      }
    })
    .catch(() => {
      showError('Erro ao buscar CEP. Tente novamente.');
    })
    .finally(() => {
      buscarBtn.innerHTML = '<i class="fas fa-search"></i> Buscar';
      buscarBtn.disabled  = false;
    });
}

function showResult(d) {
  document.getElementById('resultado').innerHTML = `
    <div class="resultado">
      <p><strong>Logradouro:</strong> ${d.logradouro || 'Não informado'}</p>
      <p><strong>Bairro:</strong> ${d.bairro || 'Não informado'}</p>
      <p><strong>Cidade:</strong> ${d.localidade}</p>
      <p><strong>Estado:</strong> ${d.uf}</p>
      <p><strong>CEP:</strong> ${d.cep}</p>
      <button class="btn-copy" onclick="copiarEndereco()">
        <i class="fas fa-copy"></i> Copiar Endereço Completo
      </button>
    </div>`;
}

function showError(msg) {
  document.getElementById('resultado').innerHTML = `
    <div class="error-message">
      <i class="fas fa-exclamation-triangle"></i>
      <span>${msg}</span>
    </div>`;
}

function limparCEP() {
  // Primeiro limpa o conteúdo
  document.getElementById('cep').value = '';
  document.getElementById('resultado').innerHTML = '';

  // Sempre rola para o topo com animação suave
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Aguarda a rolagem terminar completamente antes de esconder o overflow
  // Usando um listener para detectar quando a rolagem realmente termina
  let scrollTimeout;
  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // Se chegamos ao topo, podemos esconder o overflow
      if (window.scrollY === 0) {
        document.documentElement.style.overflowY = 'hidden';
        document.body.style.overflowY = 'hidden';
        window.removeEventListener('scroll', handleScroll);
      }
    }, 100); // Aguarda 100ms após a última rolagem
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Fallback: mesmo que algo dê errado, esconde após 2 segundos
  setTimeout(() => {
    window.removeEventListener('scroll', handleScroll);
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
  }, 2000);
}

function copiarEndereco() {
  const texts = Array.from(document.querySelectorAll('.resultado p'))
    .map(p => p.textContent.split(': ')[1])
    .filter(t => t && t !== 'Não informado');

  const endereco = texts.join(', ');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(endereco).then(showAlert);
  } else {
    // Fallback para navegadores antigos
    const textarea = document.createElement('textarea');
    textarea.value = endereco;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showAlert();
  }
}

function showAlert() {
  const alertEl = document.getElementById('alerta');
  alertEl.classList.remove('d-none');
  alertEl.classList.add('show');
  setTimeout(() => {
    alertEl.classList.remove('show');
    alertEl.classList.add('d-none');
  }, 3000);
}