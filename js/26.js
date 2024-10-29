//This

const reservacion = {
    nombre:'vicente',
    apellido: 'rossi',
    total: 3000,
    pagado: false,
    informacion: function(){
        if(this.pagado){
            console.log(`El cliente ${this.nombre} ya ha pagado`);
            
        }else{
            console.log(`El cliente ${this.nombre} aún no ha pagado`);
            console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
        }
        
    }
}

reservacion.informacion()