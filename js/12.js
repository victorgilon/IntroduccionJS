// odjetos
const producto = {
    nombreProducto : "monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

// freeze no permite agregar o eliminar propiedades a un objeto ni cambiar valores del objeto 
Object.freeze(producto);
// seal no permite agregar o eliminar propiedades a un objeto pero si cambiar valores del objeto 
Object.seal(producto);

producto.precio = 'imagen.jpg';
delete producto.precio;

console.log(producto);