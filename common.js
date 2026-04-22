export const loginAdmin = (username, password) => {
    if (!username && !password)
        return console.log("No autorizado");
    console.log("Bienvenido ${username}");
}

export const LIKES = 150;