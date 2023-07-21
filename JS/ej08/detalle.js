const nombreElement = document.getElementById("nombre");
const primerApellidoElement = document.getElementById("apellido1");
const segundoApellidoElement = document.getElementById("apellido2");
const tipoViaElement = document.getElementById("tipo_via");
const nombreViaElement = document.getElementById("via");
const codigoPostalElement = document.getElementById("codigo_postal");
const ciudadElement = document.getElementById("ciudad");
const provinciaElement = document.getElementById("provincia");
const paisElement = document.getElementById("pais");
const fechaNacimientoElement = document.getElementById("fecha_nacimiento");
const notamediaElement = document.getElementById("nota_media_uni");
const telefonoElement = document.getElementById("telefono");
const emailElement = document.getElementById("email");
const paisSelectElement = document.getElementById("pais_sel");
const cuentaElement = document.getElementById("cuenta");
const sobreMiElement = document.getElementById("sobre_mi");

const id = new URLSearchParams(window.location.search).get("id");

const user = JSON.parse(localStorage.getItem("formulario-data"))[id];

if (!user) {
    document.body.innerHTML = "<h1>Error al leer el usuario</h1>";
    throw new Error("No hay usuario");
}

const {
    nombre,
    apellido1,
    apellido2,
    tipo_via,
    via,
    codigo_postal,
    ciudad,
    provincia,
    pais,
    fecha_nacimiento,
    nota_media_uni,
    telefono,
    email,
    pais_sel,
    tipo_cuenta,
    sobre_mi,
} = user;

nombreElement.textContent = nombre;
primerApellidoElement.textContent = apellido1;
segundoApellidoElement.textContent = apellido2;
tipoViaElement.textContent = tipo_via;
nombreViaElement.textContent = via;
codigoPostalElement.textContent = codigo_postal;
ciudadElement.textContent = ciudad;
provinciaElement.textContent = provincia;
paisElement.textContent = pais;
fechaNacimientoElement.textContent = fecha_nacimiento;
notamediaElement.textContent = nota_media_uni;
telefonoElement.textContent = telefono;
emailElement.textContent = email;
paisSelectElement.textContent = pais_sel;
cuentaElement.textContent = tipo_cuenta;
sobreMiElement.textContent = sobre_mi;
