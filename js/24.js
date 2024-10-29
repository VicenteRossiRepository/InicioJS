//For loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("----------------------------------------------------------------")
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`El número ${i} es PAR`);
    }else{
        console.log(`El número ${i} es IMPAR`);
    }
}

console.log("----------------------------------------------------------------")
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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);    
}

//while loop
let i = 0;

// while (i<10) {
//     console.log(i);
//     i++;
// }

//do while loop

do {
    console.log(i);
    i++;
} while (i<10);