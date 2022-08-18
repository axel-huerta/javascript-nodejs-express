//codigo asincronico
/*
function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de axel`);
        setTimeout(()=>{
            if (producto === "taza") {
                resolve("ordenando una taza con el logo de axxll");
            } else {
                reject("este producto no esta disponible.")
            }
        }, 2000);
    });
}

function procesarPedido(respuesta) {
    return new Promise((resolve, reject) => {
        console.log("procesando respuesta...");
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(() => {
            resolve("gracias por tu compra");
        })
    }, 5000);
}
//ordenar producto
ordenarProducto("taza")
    .then(respuesta => {
        console.log("respuesta recibida");
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada=>{
        console.log(respuestaProcesada)
    })
    .catch(error =>{
        console.log(error)
    })



async function realizarPedido(producto){
    try {
    const respuesta = await ordenarProducto(producto);
    console.log("respuesta recibida");
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
    } catch (error) {
        console.log(error)
    }
}
realizarPedido("taza")
*/
