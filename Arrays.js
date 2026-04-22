// =======================
// ARREGLO PRINCIPAL
// =======================
let publicaciones = [
  {
    id: 1,
    usuario: "Josue",
    texto: "Aprendiendo JavaScript es genial!",
    likes: 10,
    comentarios: [
      { usuario: "Maria", texto: "Buenísimo " },
      { usuario: "Carlos", texto: "Sigue así" }
    ]
  },
  {
    id: 2,
    usuario: "Maria",
    texto: "Hoy hice ejercicio en casa",
    likes: 5,
    comentarios: []
  }
];

// =======================
// MOSTRAR TODO
// =======================
function mostrarPublicaciones() {
  console.log("===== FEED =====");

  publicaciones.forEach(post => {
    console.log(`ID: ${post.id}`);
    console.log(`${post.usuario}: ${post.texto}`);
    console.log(`Likes: ${post.likes}`);

    if (post.comentarios.length > 0) {
      console.log("Comentarios:");
      post.comentarios.forEach(c => {
        console.log(` - ${c.usuario}: ${c.texto}`);
      });
    }

    console.log("-------------------");
  });
}

// =======================
// CREAR PUBLICACIÓN
// =======================
function crearPost(usuario, texto) {
  const nuevoPost = {
    id: publicaciones.length + 1,
    usuario: usuario,
    texto: texto,
    likes: 0,
    comentarios: []
  };

  publicaciones.push(nuevoPost);
}

// =======================
// DAR LIKE
// =======================
function darLike(idPost) {
  const post = publicaciones.find(p => p.id === idPost);
  if (post) {
    post.likes++;
  }
}

// =======================
// AGREGAR COMENTARIO
// =======================
function agregarComentario(idPost, usuario, texto) {
  const post = publicaciones.find(p => p.id === idPost);

  if (post) {
    post.comentarios.push({ usuario, texto });
  }
}
// =======================
// Eliminar post
// =======================
function eliminarPost(idPost) {
  publicaciones = publicaciones.filter(post => post.id !== idPost);
}

// =======================
// ORDENAR POR LIKES
// =======================
function ordenarPorLikes() {
  publicaciones.sort((a, b) => b.likes - a.likes);
}

// =======================
// PRUEBAS
// =======================

mostrarPublicaciones();

crearPost("Tú", "Mi primer post ");
darLike(1);
agregarComentario(1, "Tú", "Está genial ");

ordenarPorLikes();

console.log("\nFeed ordenado por likes:");
mostrarPublicaciones();

eliminarPost(2);

console.log("\nDespués de eliminar:");
mostrarPublicaciones();

