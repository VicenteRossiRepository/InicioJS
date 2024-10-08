// Metodos de propiedad
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproducinedo cancion con el ID: ${id}`);
    },
    pausar : function() {
        console.log(`Pausando...`);
    },
    crearPlayList : function(nombre) {
        console.log(`Creando playlist ${nombre}`);
    },
    reproducirPlayList : function(nombre) {
        console.log(`Reproduciendo playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Borrando canción con el ID: ${id}`);
}

reproductor.reproducir(3850);
reproductor.pausar();
reproductor.borrarCancion(20); 
reproductor.crearPlayList('Heavy metal');
reproductor.reproducirPlayList('Heavy metal');