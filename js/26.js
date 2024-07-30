// This

const reservacion = {
    nombre: 'victor',
    apellido: 'gilon',
    total: 150000,
    pagado: false,
    informacion: function() {
        console.log(`el cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'samara',
    apellido: 'gilon',
    total: 150000,
    pagado: false,
    informacion: function() {
        console.log(`el cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();