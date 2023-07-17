const form = document.getElementById("form");
const alerta = document.getElementById("alerta");
const btnCerrarAlerta = document.getElementById("cerrar");
const btnDetener = document.getElementById("detener");
const btnPostponer = document.getElementById("postponer");
const tiempoInput = document.getElementById("tiempo");

const audio = new Audio("alarma.mp3");
audio.loop = true;

btnCerrarAlerta.addEventListener("click", () => {
    alerta.close();
    audio.pause();
    audio.currentTime = 0;
    btnDetener.style.display = "none";
    tiempoInput.readOnly = false;
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
    form.reset();
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

    btnDetener.style.display = "block";
    tiempoInput.readOnly = true;

    let initTime = Date.now();
    let alarmTime = initTime - Date.now() + time * 1000;
    alarmTime /= 1000;
    alarmTime = Math.ceil(alarmTime) * 1000;
    alarmTime = new Date(alarmTime);

    let hours = Math.abs(alarmTime.getHours() - 1);
    let minutes = alarmTime.getMinutes();
    let seconds = alarmTime.getSeconds();

    alarma.innerText = `${hours}h ${minutes}m ${seconds}s`;

    const interval = setInterval(() => {
        let alarmTime = initTime - Date.now() + time * 1000;
        alarmTime /= 1000;
        alarmTime = Math.ceil(alarmTime) * 1000;
        alarmTime = new Date(alarmTime);

        hours = Math.abs(alarmTime.getHours() - 1);
        minutes = alarmTime.getMinutes();
        seconds = alarmTime.getSeconds();

        alarma.innerText = `${hours}h ${minutes}m ${seconds}s`;
    }, 1000);

    function detenerAlarma() {
        clearInterval(interval);
        clearTimeout(timeout);
        alarma.innerText = "0h 0m 0s";
        btnDetener.style.display = "none";
        tiempoInput.readOnly = false;
        btnDetener.removeEventListener("click", detenerAlarma);
    }

    btnDetener.addEventListener("click", detenerAlarma);

    const timeout = setTimeout(() => {
        clearInterval(interval);
        alerta.showModal();
        audio.play();
        btnDetener.removeEventListener("click", detenerAlarma);
    }, time * 1000);
}
