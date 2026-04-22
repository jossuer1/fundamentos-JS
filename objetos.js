//===(ES6) ===
let nombreUsuario = "Aribeth Villota"
let estadoActivo = "La vida es hoy. ¡Aprovechando cada minuto!"
let ciudad = "Quito"
let amigos = 350
let seguidores = 150

const perfilCorto = { nombreUsuario, estadoActivo, ciudad, amigos, seguidores }
console.log("Perfil abreviado :")
console.log(perfilCorto)

//=== OBJETO BASE ===
const usuario = {
    nombreUsuario: "Aribeth Villota",
    estadoActivo: "La vida es hoy. ¡Aprovechando cada minuto!",
    ciudad: "Quito",
    amigos: 350,
    seguidores: 150,
    plan: "Personal",
    activo: true
}
//=== DESTRUCTURACION DE OBJETOS ===
const { nombreUsuario, estadoActivo, ciudad, amigos, seguidores } = usuario;
console.log("Perfil desestructurado:")
console.log({ nombreUsuario, estadoActivo, ciudad, amigos, seguidores });
console.log(`   Amigos: ${totalAmigos} | Seguidores: ${totalSeguidores}`)

//=== CONGELAR UN OBJETO ===
//Datos que Facebook no permite cambiar
const politicasFacebook = Object.freeze({
    edadMinima: 13,
    maxCaracteresPost: 63206,
    maxFotos: 1000,
    terminos: "Debes aceptar los términos de uso"
})

console.log("\nObjeto congelado - Políticas Facebook:")
console.log(politicasFacebook)

//=== COPIAR DOS OBJETOS ===
const datosBasicos = {
    nombreUsuario: "Aribeth Villota",
    ciudad: "Quito",
    amigos: 350
}

const datosExtra = {
    seguidores: 150,
    plan: "Personal",
    activo: true
}

// Combinar con spread operator
const perfilCompleto = { ...datosBasicos, ...datosExtra }
console.log("\n📎 Copia y combinación de objetos:")
console.log(perfilCompleto)
// Copiar y modificar sin afectar el original
const perfilModificado = { ...datosBasicos, ciudad: "Cuenca", amigos: 400 }
console.log("\nPerfil modificado (original intacto):")
console.log("Original:", datosBasicos)
console.log("Modificado:", perfilModificado)

// === MÉTODOS PARA TRABAJAR CON OBJETOS ===
const publicacion = {
    autor: "Aribeth Villota",
    contenido: "La vida es hoy. ¡Aprovechando cada minuto! ☀️",
    likes: 45,
    comentarios: 12,
    compartidos: 8,
    fecha: "2024-04-21"
}

// Object.keys - obtiene las claves
console.log("\n Object.keys:")
console.log(Object.keys(publicacion))

// Object.values - obtiene los valores
console.log("\n Object.values:")
console.log(Object.values(publicacion))

// Object.assign - otra forma de copiar
const copia = Object.assign({}, publicacion)
console.log("\n Copia con Object.assign:")
console.log(copia)