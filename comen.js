const comentariosContainer = document.querySelector('#comentariosContainer');

database.ref('comentarios').on('child_added', (snapshot) => {
    const comentario = snapshot.val();
    const comentarioElement = document.createElement('div');
    comentarioElement.classList.add('comentario');
    comentarioElement.innerHTML = `<strong>${comentario.nombre}</strong>: <p>${comentario.comentario}</p>`;
    comentariosContainer.appendChild(comentarioElement);
});
