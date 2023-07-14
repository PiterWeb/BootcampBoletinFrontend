const now = document.getElementsByClassName("now");

for (let i = 0; i < now.length; i++) {
    const element = now[i];

    setInterval(() => {
        const fecha = new Date();
        const hora = fecha.getHours();
        const minutos = fecha.getMinutes().toString().padStart(2, "0");
        const segundos = fecha.getSeconds().toString().padStart(2, "0");

        element.innerText = `${hora}:${minutos}:${segundos}`;
    }, 1000);
}
