// Arrow function

// Si la funcion tiene una sola linea puede ir sin {}
const sumar = (n1,n2) => console.log(n1+n2);
sumar(5,10);

// Si la funcion tiene un solo parametro puede ir sin parentesis
const aprendiendo = Tecnologia => {
    console.log(`Aprendiendo ${Tecnologia}`);
}
aprendiendo("Javascript");


// Arrow function con arreglos
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

meses.forEach( mes =>{
    if (mes == 'Marzo') { //Verifica si elemento exise dentro del array
        console.log("Marzo si existe");
    };
});

const resultado2 = carrito.some(producto => producto.nombre === 'Celular'); 
console.log(resultado2);

//Reduce
const resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado3);

//Filter
const resultado4 = carrito.filter(producto => producto.precio < 400);
console.log(resultado4);
