// POO

// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
}

//Object contructor
function Producto(nombre, precio, disponibilidad) {
    this.nombre = nombre
    this.precio = precio
    this.disponible = disponibilidad
}

const monitor = new Producto(`Monitor curvo de 48"`, 800, true);
const laptop = new Producto(`laptop`, 300, false);
const celular = new Producto(`Telefono celular`, 400, false);
const procesador = new Producto(`Procesador`, 1000, true);

console.log(monitor);
console.log(laptop);
console.log(celular);
console.log(procesador);