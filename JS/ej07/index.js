const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const formularioData = localStorage.getItem("formulario-data") || "[]";

    const lastData = JSON.parse(formularioData);

    localStorage.setItem(
        "formulario-data",
        JSON.stringify([...lastData, data])
    );

    form.reset();
});

console.log("Javier");
console.log("Santos");
console.log("Pudgemon");
console.log("Andorra");
console.log("Gratis");
console.log("1-562-867-5309");
console.log("javierinventado@yandex.ru");
console.log("------");
console.log("Pedro");
console.log("Torreiro");
console.log("Calvo");
console.log("Francia");
console.log("Premium");
console.log("1-342-862-5309");
console.log("otropedroinventado@yandex.ru");
console.log("------");
console.log("Manolo");
console.log("Costas");
console.log("Ferradás");
console.log("España");
console.log("Básico");
console.log("1-532-367-7609");
console.log("manoloinventado@yandex.ru");
console.log("------");
console.log("Pedro");
console.log("Costas");
console.log("Ferradás");
console.log("España");
console.log("Premium");
console.log("981-123-456");
console.log("pedroinventado@yandex.ru");

console.log("------");

const persona1 = {
    nombre: "Javier",
    primer_apellido: "Santos",
    segundo_apellido: "Pudgemon",
    pais: "Andorra",
    tipo_cuenta: "Gratis",
    telefono: "1-562-867-5309",
    email: "javierinventado@yandex.ru",
};

console.log(persona1);
console.log("------");

const persona2 = {
    nombre: "Pedro",
    primer_apellido: "Torreiro",
    segundo_apellido: "Calvo",
    pais: "Francia",
    tipo_cuenta: "Premium",
    telefono: "1-342-862-5309",
    email: "otropedroinventado@yandex.ru",
};

console.log(persona2);

console.log("------");

const persona3 = {
    nombre: "Manolo",
    primer_apellido: "Costas",
    segundo_apellido: "Ferradás",
    pais: "España",
    tipo_cuenta: "Básico",
    telefono: "1-532-367-7609",
    email: "manoloinventado@yandex.ru",
};

console.log(persona3);

console.log("------");

const persona4 = {
    nombre: "Pedro",
    primer_apellido: "Costas",
    segundo_apellido: "Ferradás",
    pais: "España",
    tipo_cuenta: "Premium",
    telefono: "981-123-456",
    email: "pedroinventado@yandex.ru",
};

console.log(persona4);
