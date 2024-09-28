// function sumar (n1,n2){
//     return n1 + n2;
// }

// const resultado = sumar (2,3)

// console.log(resultado)

let total = 0;

function carrito(precio) {
    return total += precio
}

function calcularImpuesto(total) {
    return 1.15 * total
}

total = carrito(200)
total = carrito(400)
total = carrito(600)

console.log(total)

const totalAPagar = calcularImpuesto(total)
console.log(`El total a pagar con impuestos es de $${totalAPagar}`)