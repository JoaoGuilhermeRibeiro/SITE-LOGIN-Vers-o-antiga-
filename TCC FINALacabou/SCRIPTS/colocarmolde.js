function colocar_topico() {
    const colocar = document.getElementById("moldecard");

    // Fetch the HTML content and update after it's loaded
    fetch("../MOLDES/topico.html")
        .then(response => response.text())  // Convert response to text
        .then(data => {
            colocar.innerHTML = data;  // Set the fetched HTML content

            // Agora, atualize os outros elementos
            const nome = document.getElementById("nome-usuario");
            const nometopico = document.getElementById("nome-topico");
            const textotopico = document.getElementById("topico");
            const clicar = document.getElementById("botao");

            nome.innerHTML = "João";
            nometopico.innerHTML = localStorage.getItem("titulo_topico")
            textotopico.innerHTML = localStorage.getItem("texto_topico")
            clicar.innerHTML = "Participar";
        })
        .catch(error => {
            console.error("Erro ao carregar o conteúdo:", error);
        });
}
