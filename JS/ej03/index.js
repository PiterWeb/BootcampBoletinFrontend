const contenido = document.getElementById('contenido');

setInterval(() => {

    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    contenido.innerText = `${hora}:${minutos}:${segundos}`;

}, 1000)