const form = document.getElementById("form");
const alerta = document.getElementById("alerta");
const btnCerrarAlerta = document.getElementById("cerrar");
const btnDetener = document.getElementById("detener");
const btnPostponer = document.getElementById("postponer");

const audio = new Audio("alarma.mp3");

btnCerrarAlerta.addEventListener("click", () => {
    alerta.close();
    audio.pause();
    audio.currentTime = 0;
    btnDetener.style.display = "none";
});

btnPostponer.addEventListener("click", () => {
    alerta.close();
    audio.pause();
    audio.currentTime = 0;
    manejarAlarma(10);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    let time = formData.get("time");

    manejarAlarma(time);
});

function manejarAlarma(time) {
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

    btnDetener.style.display = "block";

    const interval = setInterval(() => {
        time--;

        hours = Math.floor(time / 3600);
        minutes = Math.floor((time % 3600) / 60);
        seconds = time % 60;

        alarma.innerText = `${hours}h ${minutes}m ${seconds}s`;
    }, 1000);

    const timeout = setTimeout(() => {
        clearInterval(interval);
        alerta.showModal();
        audio.play();
    }, time * 1000);

    btnDetener.addEventListener("click", () => {
        clearInterval(interval);
        clearTimeout(timeout);
        alarma.innerText = "0h 0m 0s";
        btnDetener.style.display = "none";
        btnDetener.removeEventListener("click", () => {});
    });
}
