//Arreglos

const numeros = [10,20,30,40,50]
console.table(numeros)

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre')
console.table(meses)

// const arreglo = ["Hola",10,true,"si",null,{nombre:"Juan",trabajo:"Programador"},[1,2,3]]
// console.log(arreglo)

// //Acceder al arreglo
// console.log(numeros[4])

// //Conocer extencion arreglo
// console.log(meses.length)

// //Recorrer arreglo con forEach
// meses.forEach(function(mes){
//     console.log(mes)
// })


numeros.push(60,70,80) //Agregar elementos al final del arreglo


numeros.unshift(-10,-20,-30) //Agregar elementos al principio del arreglo


// meses.pop() //Remover elementos del final del arreglo
// meses.shift() //Remover elementos del principio del arreglo

meses.splice(2,1) //Eliminar elementos del arreglo especifico (indice donde comienza,cantidad de elementos a eliminar)

console.table(meses)

//Rest operator o spread operator
const nuevoArreglo = [...meses,'Marzo'];
console.log(nuevoArreglo)