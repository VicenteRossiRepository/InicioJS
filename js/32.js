// Async / await

function descargarNuevosClientes(){
    return new Promise (resolve =>{
        console.log("descargando clientes... espere");

        setTimeout(() => {
            resolve("Los clientes fueron descargados")
        },1000);
    })
}


async function app(){
    try {
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
        console.log("Este codigo si se bloquea");
    } catch (error) {
        console.log("Error: " + error);
    }
}

app();

console.log("Este codigo no se bloquea");