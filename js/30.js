const usuarioAutenticado = new Promise((resolve , reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario autenticado'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesion'); // El promise no se cumple
    }
});

usuarioAutenticado.then(resultado => console.log(resultado))
.catch(err => console.log(err))

//Los promises tienen 3 valores posible
//Pending: No se a cumplido pero tampoco rechazado
//Fulfilled : Se cumplio
//Rejected : No se a cumplido 