//Spread operators

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas={
    peso: '1KG',
    medida: '1M'
}

const nuevoPeroducto = {...producto, ...medidas}

console.log(producto)
console.log(nuevoPeroducto)