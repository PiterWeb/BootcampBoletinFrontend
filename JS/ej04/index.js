setInterval(() => {
    let now = document.querySelectorAll(".now");

    now.forEach((element) => {
        const fecha = new Date();
        element.innerText =
            fecha.toLocaleDateString() + " - " + fecha.toLocaleTimeString();
    });
}, 1000);

// Buscar los elementos con la clase "now"
// Obtener la fecha actual
