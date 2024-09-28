function sumar(numero1, numero2){ //Numero 1 y 2 son parametros
    console.log(numero1+numero2);
}
sumar(10,10); //dentro del parentesis son argumentos
sumar(5,16); 
sumar(1,12); 

const sumar2 = function(n1=0,n2=0){ //Al darle al parametro valor a 0, si el argumento no existe, ya tiene un valor por default que evita edl error
    console.log(n2+n1);
}
sumar2(2);