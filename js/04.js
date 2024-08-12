//Variables string

// const producto = "Monitor 20 pulgadas" //variable String
// const producto2 = String("Monitor 30 pulgadas")
// const producto3 = new String("Monitor 50 pulgadas") 
// const producto4 = "Monitor de 20\"";

// console.log(producto)
// console.log(producto2)
// console.log(producto3)
// console.log(producto4)


const tweet = 'Aprendiendo JavaScript con el curso de desarrollo web completo'
const producto2 = 'Monitor HD'

//Length es para ver la cantidad de caracteres en un string
console.log(tweet.length);
console.log(producto2);

//IndexOf

console.log(tweet.indexOf('JavaScript')) //Devuelve la posición inicial de la primera coincidencia
console.log(producto2.indexOf('Tablet'))

//includes (Regresa true-false)
console.log(tweet.includes('JavaScript')) 
console.log(producto2.includes('Tablet'))