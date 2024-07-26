// Metodos de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`reproducciendo cancion  con el id: ${id}`)
    },
    pausar: function() {
        console.log('pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`reproduciendo la playlist: ${nombre}`)
    },
}

reproductor.borrarCancion = function(id) {
    console.log(`eliminando la cancion: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');