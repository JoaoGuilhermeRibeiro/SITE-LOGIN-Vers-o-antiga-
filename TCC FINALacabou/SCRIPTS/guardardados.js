// Função para salvar os dados no localStorage
function salvarDados() {
    const titulo = document.getElementById('titulo_topico').value;
    const texto = document.getElementById('texto_topico').value;

    // Salvando os dados no localStorage
    localStorage.setItem('titulo_topico', titulo);
    localStorage.setItem('texto_topico', texto);
}

// Função para preencher os inputs com os dados armazenados no localStorage
function preencherCampos() {
    const titulo = localStorage.getItem('titulo_topico');
    const texto = localStorage.getItem('texto_topico');

    // Preencher os campos com os dados armazenados
    if (titulo !== null) {  // Verifica se existe o valor
        document.getElementById('titulo_topico').value = titulo;
    }
    if (texto !== null) {  // Verifica se existe o valor
        document.getElementById('texto_topico').value = texto;
    }
}

// Preencher os campos ao carregar a página
window.onload = function() {
    preencherCampos(); // Preenche os inputs com os valores armazenados no localStorage
};

// Adicionar evento 'input' para salvar os dados enquanto o usuário digita
document.getElementById('titulo_topico').addEventListener('input', salvarDados);
document.getElementById('texto_topico').addEventListener('input', salvarDados);
