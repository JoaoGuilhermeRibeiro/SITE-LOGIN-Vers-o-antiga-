document.addEventListener("DOMContentLoaded", function () {
    // Selecionando os elementos HTML
    const titulo_comentario = document.getElementById("titulo_comentario");
    const texto_comentario = document.getElementById("texto_comentario");

    // Verificando se os elementos foram encontrados
    if (!titulo_comentario) {
        console.error("Elemento 'titulo_comentario' não encontrado!");
    }
    if (!texto_comentario) {
        console.error("Elemento 'texto_comentario' não encontrado!");
    }

    // Função para salvar os dados no localStorage
    function salvarDadosComentario() {
        const titulo = titulo_comentario.value; // Obtém o valor do campo 'titulo_comentario'
        const texto = texto_comentario.value;   // Obtém o valor do campo 'texto_comentario'

        // Exibindo os valores no console para depuração
        console.log("Salvando dados:", titulo, texto);

        // Salvando os dados no localStorage
        if (titulo.trim() !== "" && texto.trim() !== "") {
            localStorage.setItem('titulo_Comentario', titulo);
            localStorage.setItem('texto_Comentario', texto);
            console.log("Dados salvos no localStorage!");
        } else {
            console.log("Os campos estão vazios, nada foi salvo.");
        }
    }

    // Função para preencher os inputs com os dados armazenados no localStorage
    function preencherCamposComentario() {
        const titulo = localStorage.getItem('titulo_Comentario');
        const texto = localStorage.getItem('texto_Comentario');

        console.log("Preenchendo campos com os dados do localStorage:", titulo, texto);

        // Preencher os campos com os dados armazenados, caso existam
        if (titulo !== null) {
            titulo_comentario.value = titulo;
        }
        if (texto !== null) {
            texto_comentario.value = texto;
        }
    }

    // Preencher os campos ao carregar a página
    window.onload = function () {
        preencherCamposComentario(); // Preenche os inputs com os valores armazenados no localStorage
    };

    // Adicionar evento 'input' para salvar os dados enquanto o usuário digita
    if (titulo_comentario && texto_comentario) {
        titulo_comentario.addEventListener('input', salvarDadosComentario);
        texto_comentario.addEventListener('input', salvarDadosComentario);
    }
});
