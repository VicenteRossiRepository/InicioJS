// Declaracion de funcion
sumar();
function sumar(){
    console.log(10+10);
}
//Se puede llamar la funcion antes de declararla

// expresion de la funcion
const sumar2 = function(){
    console.log(3+3);
}
sumar2();
//Primero tiene que declararse la funcion antes de llamarla

// IIFE
(function(){
    console.log("Esto es una funcion")
})();