const form = document.getElementById("form");

form.addEventListener("submit", () => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const formularioData = localStorage.getItem("formulario-data") || "[]";

    const lastData = JSON.parse(formularioData);

    localStorage.setItem(
        "formulario-data",
        JSON.stringify([...lastData, data])
    );
});
