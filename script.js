const url = "https://api-swa.onrender.com/contactos";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#tabla-contactos tbody");

    data.forEach(contacto => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td data-label="ID">${contacto.id}</td>
        <td data-label="Nombre">${contacto.nombre}</td>
        <td data-label="Teléfono">${contacto.telefono}</td>
        <td data-label="Correo">${contacto.correo}</td>
        <td data-label="RUT">${contacto.rut}</td>
        <td data-label="Fecha Registro">${new Date(contacto.fecha_registro).toLocaleDateString()}</td>
      `;

      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error al cargar los contactos:", error);
  });
