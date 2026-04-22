import loginGuest from "./esmodule.js";
import { apiKEY } from "./esmodule.js";
import { loginAdmin, LIKES } from "./common.js";

//----------- Login --------------
loginAdmin("Emily", "1234");
loginGuest("Guest", "1234");

console.log("Likes:", LIKES);
console.log("API KEY:", apiKEY);


// ---------------- API (simulacion publicaciones) ----------------
//usando async y await para consumir la API
async function getPosts(){
  try{
    const peticion = await fetch("https://jsonplaceholder.typicode.com/posts");
    const respuesta = await peticion.json();

    console.log("Publicación 1:", respuesta[0].title);
    console.log("Publicación 2:", respuesta[1].title);

  } catch (error){
    console.log("Error API:", error);
  }
}

getPosts();


// ---------------- Local storage (guardar usuario) ----------------
const usuario = {
  nombre: "Emily",
  redSocial: "Facebook"
};

// guardar
localStorage.setItem("user", JSON.stringify(usuario));

// obtener
const obtenerUsuario = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  console.log("Usuario guardado:", data);
};

obtenerUsuario();

//eliminar usuario (quitarlo de comentarios para probar que se borra correctamente)
//localStorage.removeItem("user");