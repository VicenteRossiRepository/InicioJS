async function obtenerEmpleados(){
    const url = 'empleados.json'
    // fetch(url)
    // .then(resultado => resultado.json())
    // .then(datos =>{ 
    //     // console.log(datos.empleados[1])
    //     const {empleados} = datos

    //     empleados.forEach(empleado => {
    //         console.log(`${empleado.id} - Nombre: ${empleado.nombre} - Puesto: ${empleado.puesto}`)
    //     })
    // })

    const resultado = await fetch(url)
    const datos = await resultado.json();
    console.log(datos)
}

obtenerEmpleados();