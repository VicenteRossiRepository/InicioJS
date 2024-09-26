//"use strict"; //Correr JS en modo estricto

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); //Bloquea el poder agregar o modificar elementos del objeto
Object.seal(producto); //Bloquea el poder agregar elementos del objeto, pero si mopdificar
producto.imagen = "imagen.jpg";

console.log(Object.isSealed(producto));

console.log(producto)