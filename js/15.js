// Array methods

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre')

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

//For each

meses.forEach(function (mes){
    if (mes == 'Marzo') { //Verifica si elemento exise dentro del array
        console.log("Marzo si existe");
    };
});

// Includes
const resultado = meses.includes('Marzo'); //devuelve bool si parametro existe en arreglo
console.log(resultado);

const resultado2 = carrito.some(function(producto){ //Devuelve bool se elemento existe dentro de un objeto con elemento correspondiente
    return producto.nombre === 'Celular';  
}); 
console.log(resultado2);

//Reduce
const resultado3 = carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0)
console.log(resultado3);

//Filter
const resultado4 = carrito.filter(function(producto){
    return producto.precio < 400;
})
console.log(resultado4);
