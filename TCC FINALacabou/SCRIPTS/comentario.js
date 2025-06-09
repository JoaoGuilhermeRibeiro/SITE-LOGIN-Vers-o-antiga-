function colocar_comentario() {
    const colocar = document.getElementById("comentariodiv");

    // Fetch the HTML content and update after it's loaded
    fetch("../MOLDES/comentario.html")
        .then(response => response.text())  // Convert response to text
        .then(data => {
            colocar.innerHTML = data;  // Set the fetched HTML content

            // Agora, atualize os outros elementos
            const nomecomentario2 = document.getElementById("nome-usuario2");
            const nomecomentario = document.getElementById("nome-topico2");
            const textocomentario = document.getElementById("topico2");
            

            nomecomentario2.innerHTML = "João";
            nomecomentario.innerHTML = localStorage.getItem("titulo_Comentario")
            textocomentario.innerHTML = localStorage.getItem("texto_Comentario")
            
        })
        .catch(error => {
            console.error("Erro ao carregar o conteúdo:", error);
        });
}