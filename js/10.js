// objeto

const producto = {
    nombreProducto : "monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

//console.log(producto);
//console.log(producto.precio);// aqui accedemos al precio 
//console.log(producto.nombreProducto);
//console.log(producto.disponible);

//console.log(producto["precio"]);

// Agregar nuevas Propiedades
producto.imagen = 'imagen.jpg';

// Eliminar propiedades 
delete producto.disponible;

console.log(producto);