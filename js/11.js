const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Forma anterior
// const precioProducto = producto.precio
// const nombreProducto = producto.nombreProducto

// console.log(`El precio del producto ${nombreProducto} es $${precioProducto}`)

// Destructuring
const {precio} = producto; //El nombre de la variable dentro delos {} debe ser igual al de la propiedad del objeto
const {nombreProducto} = producto;

console.log(`El precio del producto es $${precio}`)
console.log(`El nombre del producto es ${nombreProducto}`)