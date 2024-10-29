const carrito = [
    {nombre:'Monitor 20 pulgadas', precio: 500},
    {nombre:'Television 50 pulgadas', precio: 700},
    {nombre:'Tablet', precio: 300},
    {nombre:'Audifonos', precio: 200},
    {nombre:'Teclado', precio: 50},
    {nombre:'Celular', precio: 500},
    {nombre:'Bocinas', precio: 300},
    {nombre:'Laptop', precio: 800}
];

// forEach
carrito.forEach(producto=>console.log(producto.precio)); 

//map
carrito.map(producto=>console.log(producto.nombre)); //Devuelve un arreglo si se asigna a una variable
