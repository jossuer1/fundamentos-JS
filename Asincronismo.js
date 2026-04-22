// Función que simula una petición (como a un servidor)
function obtenerDatos() {
  return new Promise((resolve, reject) => {

    console.log("Cargando datos...");

    setTimeout(() => {
      const exito = true;

      if (exito) {
        resolve("Datos recibidos correctamente ");
      } else {
        reject("Error al cargar datos ");
      }

    }, 2000); // tarda 2 segundos
  });
}

// =======================
// USANDO async/await
// =======================
async function cargar() {
  try {
    const resultado = await obtenerDatos();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

// Ejecutar
cargar();