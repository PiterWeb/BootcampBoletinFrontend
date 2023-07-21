const tableBody = document.getElementById("table-body");

const usuarios = JSON.parse(localStorage.getItem("formulario-data"));

if (!(usuarios instanceof Array)) {
    throw new Error("No hay usuarios");
}

console.table(usuarios);

usuarios.forEach((usuario, i) => {
    
    const {
        nombre,
        apellido1,
        apellido2,
        pais_sel,
        cuenta,
        telefono,
        email,
    } = usuario;

    const row = document.createElement("tr");

    const campoId = document.createElement("td");
    campoId.textContent = i;

    const campoNombre = document.createElement("td");
    campoNombre.textContent = nombre;

    const campoEmail = document.createElement("td");
    campoEmail.textContent = email;

    const campoTelefono = document.createElement("td");
    campoTelefono.textContent = telefono;

    const campoApellido1 = document.createElement("td");
    campoApellido1.textContent = apellido1;

    const campoApellido2 = document.createElement("td");
    campoApellido2.textContent = apellido2;

    const campoPaisSel = document.createElement("td");
    campoPaisSel.textContent = pais_sel;

    const campoCuenta = document.createElement("td");
    campoCuenta.textContent = cuenta;

    const campoImagen = document.createElement("td");
    const imagenImg = document.createElement("img");
    imagenImg.alt = `foto_${nombre}`;

    const verDetalle = document.createElement("td");
    const verDetalleLink = document.createElement("a");
    verDetalleLink.href = `./detalle.html?id=${i}`;
    verDetalleLink.textContent = "Ver detalle";
    verDetalle.appendChild(verDetalleLink);

    row.appendChild(campoId);
    row.appendChild(campoImagen);
    campoImagen.appendChild(imagenImg);
    row.appendChild(campoNombre);
    row.appendChild(campoApellido1);
    row.appendChild(campoApellido2);
    row.appendChild(campoPaisSel);
    row.appendChild(campoCuenta);
    row.appendChild(campoTelefono);
    row.appendChild(campoEmail);
    row.appendChild(verDetalle);

    tableBody.appendChild(row);
});
