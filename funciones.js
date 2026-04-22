//=== FUNCION NORMAL ===
//Muestra el perfil de un usuario
function mostrarPerfil(nombre, ciudad, amigos) {
    console.log(`${nombre} vive en ${ciudad} y tiene ${amigos} amigos`)
}
mostrarPerfil("Aribeth Villota", "Quito", 350)

//=== PARÁMETROS POR DEFECTO ===
function mostrarPlan(nombre, plan = "Gratuito") {
    console.log(`${nombre} tiene el plan: ${plan}`)
}
mostrarPlan("Aribeth Villota")
mostrarPlan("Johao Barzola", "Premium")

//=== RETORNO DE UNA FUNCION ===
//Calcula si dos personas pueden ser amigos segun amigos en comun
function puedenSerAmigos(amigosEnComun) {
    if (amigosEnComun >= 5) {
        return "Alta probabilidad de amistad"
    } else if (amigosEnComun >= 2) {
        return "Probabilidad media"
    } else {
        return "Probabilidad baja"
    }
}
let resultado = puedenSerAmigos(6)
console.log(resultado)
console.log(puedenSerAmigos(1))

//=== FUNCION ANONIMA ===
//Registra cuando un usuario inicia sesion
let iniciarSesion = function(usuario) {
    console.log(`${usuario} ha iniciado sesión en Facebook`)
}
iniciarSesion("Aribeth Villota")

// === FUNCIÓN AUTOEJECUTABLE ===
// Se ejecuta sola al cargar, como cuando Facebook carga tu feed
(function() {
    let publicaciones = ["Foto en la playa", "Video de cumpleaños", "Estado nuevo"]
    console.log("Cargando tu feed...")
    publicaciones.forEach((post, index) => {
        console.log(`  ${index + 1}. ${post}`)
    })
    console.log("✔ Feed cargado correctamente")
})()

//===FUNCION FLECHA ===
// Calcula el alcance de una publicación
const calcularAlcance = (likes, compartidos, comentarios) => {
    let alcance = (likes * 1) + (compartidos * 3) + (comentarios * 2)
    return `Alcance estimado: ${alcance} personas`
}

console.log(calcularAlcance(45, 10, 12))

//=== THIS ===
//Objeto usuario con metodo this
const usuario = {
    nombre: "Aribeth Villota",
    amigos: 350,
    seguidores: 150,
    plan: "Personal",
    //Presentar Perfil
    presentarPerfil() {
        console.log(`Hola, soy ${this.nombre}`)
        console.log(`Tengo ${this.amigos} amigos y ${this.seguidores} seguidores`)
        console.log(`Mi plan es: ${this.plan}`)
    },
    // Agrega un amigo usando this
    agregarAmigo(nuevoAmigo) {
        this.amigos++
        return `${nuevoAmigo} ahora es amigo de ${this.nombre}. Total: ${this.amigos} amigos`
    }
}
usuario.presentarPerfil()
console.log(usuario.agregarAmigo("Camila"))