const form = document.getElementById("form");
const alerta = document.getElementById("alerta");
const btnCerrarAlerta = document.querySelector("#alerta button");

btnCerrarAlerta.addEventListener("click", () => {
    alerta.close();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    let time = formData.get("time");

    if (time === null) {
        alert("Debes introducir una hora");
        return;
    }

    if (time <= 0) {
        alert("El tiempo no puede ser negativo o cero");
        return;
    }

    const alarma = document.getElementById("alarma");

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    alarma.innerText = `${hours}h ${minutes}m ${seconds}s`;

    form.reset();

    const interval = setInterval(() => {
        time--;

        hours = Math.floor(time / 3600);
        minutes = Math.floor((time % 3600) / 60);
        seconds = time % 60;

        alarma.innerText = `${hours}h ${minutes}m ${seconds}s`;
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);

        alerta.showModal();
    }, time * 1000);
});
