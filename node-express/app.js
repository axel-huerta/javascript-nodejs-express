/*
function mostrarTema(tema){
    console.log(`Estoy apremdiendo ${tema}, genial`)
};
function sumar(x, y){
    console.log(`el resultado es ${x + y}`)
}

setTimeout(mostrarTema, 5000, "Python");
//setImmediate(sumar, 5000, 10, 20);

setInterval(mostrarTema, 4000, 15, 15)//code infinyte with retraso in ms

//console.log("hello")

//:::::::::::::: EVENTOS :::::::::::::::::::::::::

const { reject } = require("assert");
const EventEmitter = require("events");
const { resolve } = require("path");

const emisorProductos = new EventEmitter()
emisorProductos.on("compra", (total, cantidad) => {
    console.log(`Se realizo una compra por ${total}`)
    console.log(`Nuemro de cantidad: ${cantidad}`)
})

emisorProductos.emit("compra", 500, 10);  
*/

//:::::::::::::PROMESAS::::::::::::::::::::::::::::
let boton = document.getElementById("btt");
let botonDos = document.getElementById("bttDos");
let presentacion = document.getElementById("pe");

let promesaCumplida;
boton.addEventListener("click", ()=>{
    promesaCumplida = true; 
})
botonDos.addEventListener("click", ()=>{
    promesaCumplida = false; 
})
//const promesaCumplida= confirm("Is v or f...");
//console.log(promesaCumplida)

const miPromesa = new Promise((resolve, rejact)=>{
    setTimeout(()=>{
        if(promesaCumplida==true){
            resolve("verdadero");
        } else{
            rejact("rechazada");
        }
    }, 5000);
});
const manejarPromezaCumplida = (valor)=>{
    //console.log(valor);
    presentacion.innerText = "Ingresando..."

}
const manejarPromezaRachazada = (razonRechazo)=>{
    //console.log(razonRechazo);
    presentacion.innerText = "saliendo..." 
};

miPromesa.then(manejarPromezaCumplida, manejarPromezaRachazada);

//lkdldkd

