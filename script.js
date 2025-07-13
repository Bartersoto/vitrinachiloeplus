const form = document.getElementById('profileForm');
const container = document.getElementById('perfilesContainer');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const rubro = document.getElementById('rubro').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();
  const contacto = document.getElementById('contacto').value.trim();

  if (!nombre || !rubro || !descripcion || !contacto) {
    alert("Por favor completa todos los campos.");
    return;
  }

  try {
    await db.collection('perfiles').add({ nombre, rubro, descripcion, contacto });
    form.reset();
    cargarPerfiles();
  } catch (error) {
    console.error("Error al guardar en Firestore:", error);
    alert("Hubo un error guardando el perfil.");
  }
});

async function cargarPerfiles() {
  container.innerHTML = '';
  try {
    const snapshot = await db.collection('perfiles').get();
    snapshot.forEach(doc => {
      const data = doc.data();
      const div = document.createElement('div');
      div.classList.add('perfil');
      div.innerHTML = `
        <h3>${data.nombre}</h3>
        <strong>${data.rubro}</strong>
        <p>${data.descripcion}</p>
        <p><em>Contacto: ${data.contacto}</em></p>
      `;
      container.appendChild(div);
    });
  } catch (error) {
    console.error("Error al cargar perfiles:", error);
  }
}

cargarPerfiles();
