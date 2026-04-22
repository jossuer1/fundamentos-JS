//===VARIABLES===
var cantidadUsuarios = 3070000000
let usuarioActivo= true
const redesSociales = "Facebook"

//===STRINGS===
let nombreUsuario="Aribeth Villota"
let estadoActivo= "La vida es hoy. ¡Aprovechando cada minuto!"
let ciudad="Quito"
let amigos=350
let seguidores= 150

console.log(`${nombreUsuario.toUpperCase()} vive en ${ciudad}.
Tiene ${amigos} amigos y ${seguidores} seguidores en ${redesSociales}. 
Estado: ${estadoActivo.toLowerCase()}`)

//===BOOLEAN===
let cuantaVerificada= true
let notifiicacionesActivadas= false
let tieneStoriesActivas= true

console.log(`Cuenta verificada: ${cuantaVerificada}`)
console.log(`Notificaciones activadas: ${notifiicacionesActivadas}`)

//===CONDICIONALES===
//Verificar si el usuario es popular
if (seguidores> 300 ){
    console.log(`✔${nombreUsuario} es un usuario popular `)
}else if (seguidores > 100){
    console.log(`${nombreUsuario} es un usuario con seguidores moderados `)
}else{
    console.log(`✖${nombreUsuario} es un usuario regular `)
}

//Verificar plan del usuario
let tipoCuenta="personal"

switch (tipoCuenta) {
    case "personal":
        console.log("Cuenta personal- Acesso básico")
        break;
    case "business":
        console.log("Cuenta empresarial- Acceso completo")
        break;
    case "creator":
        console.log("Cuenta de creador- Monetizacion activa")
        break;
        default:
        console.log("Tipo de cuenta desconocida")    
}

//===BUCLES===
//Mostrar notificaciones pendientes
let notificaciones=[
    "Johao le dio like a tu foto",
    "Nicol comento tu publicacion",
    "Tienes 5 solucitudes de amistades",
    "Recuerda el cumpleaños de Nayely",
    "Tu historia expira en 1 hora"
]
console.log("Notificaciones:")
for (let i = 0; i < notificaciones.length; i++) {
    console.log(`${i + 1}. ${notificaciones[i]}`)
}

//Contar likes con while
let likesRestantes = 10
let totalLikes=0
while (likesRestantes > 0) {
    totalLikes++
    likesRestantes--
}
console.log(`Total de likes dados: ${totalLikes}`)

//forEach para mostrar amigos sugeridos
let amigosSugeridos=["Josue Patriño","Emily Pazmiño","Alessia Perez"]
console.log("Amigos sugeridos:")
amigosSugeridos.forEach((amigo, index) => { console.log(`${index + 1}. ${amigo}`) })

//===MATH===
//Numero aleatorio para sugerir amigo
let indiceAleatorio=Math.floor(Math.random() * amigosSugeridos.length)
console.log(`Sugerencia del dia: ${amigosSugeridos[indiceAleatorio]}`)

