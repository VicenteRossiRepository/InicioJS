// Objetos

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}



// console.log(producto.precio)
// console.log(producto.nombreProducto)
// console.log(producto.disponible)

// console.log(producto["precio"])

// Agregar nuevbas propiedades al objeto
producto.imagen= 'imagen.jpg'

// Eliminar propiedades
delete producto.disponible

console.log(producto)