const contenido = document.getElementById("contenido");

contenido.innerText = "Hola Mundo";

const colores = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];

setInterval(() => {
    contenido.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
}, 1000);
