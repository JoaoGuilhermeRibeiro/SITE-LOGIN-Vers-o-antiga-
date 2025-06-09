const mudartexto = document.getElementById("mudar_texto")
const mudartitulo = document.getElementById("mudar_titulo")
mudartitulo.innerHTML = localStorage.getItem("titulo_topico")
mudartexto.innerHTML = localStorage.getItem("texto_topico")
