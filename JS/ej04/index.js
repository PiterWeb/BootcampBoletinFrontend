let now = document.querySelectorAll(".now");

setInterval(() => {
    now = document.querySelectorAll(".now");

    now.forEach((element) => {
        setInterval(() => {
            const fecha = new Date();
            element.innerText =
                fecha.toLocaleDateString() + " - " + fecha.toLocaleTimeString();
        }, 1000);
    });
}, 1000);

// Buscar los elementos con la clase "now"
// Obtener la fecha actual
