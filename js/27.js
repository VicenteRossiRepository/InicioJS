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

function Cliente(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

//Crear funciones que solo se utilizan en objetos en especificos
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
}

Cliente.prototype.getNombreCompleto = function(){
    return `El cliente ${this.nombre} ${this.apellido}`;
}

const monitor = new Producto(`Monitor curvo de 48"`, 800, true);
const laptop = new Producto(`laptop`, 300, false);
const celular = new Producto(`Telefono celular`, 400, false);
const procesador = new Producto(`Procesador`, 1000, true);

const cliente1 = new Cliente("Juan", "Perez");
const cliente2 = new Cliente("Rodrigo", "Rojas");



console.log(monitor.formatearProducto());
console.log(laptop.formatearProducto());
console.log(celular);
console.log(procesador.formatearProducto());

console.log(cliente1.getNombreCompleto());
console.log(cliente2);