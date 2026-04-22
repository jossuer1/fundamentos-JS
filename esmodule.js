const loginGuest = (username, password) => {
    if (!username && !password)
        return console.log("No autorizado");
    console.log("Bienvenido ${username}");
}

const apiKEY = "12345";

export default loginGuest;
export { apiKEY };