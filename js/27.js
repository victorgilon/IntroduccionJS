// POO

// object leteral
const producto = {
    nombre: 'tablet',
    precio: 500
}

// object constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;

}
// Prototype crea funciones que solo se utilizan en un objeto en espesifico
Producto.prototype.formatearProducto = function(){
    return `el producto ${producto.nombre} tiene un precio de ${producto.precio}`;
}


const producto2 = new Producto('monito curvo de 49"', 800);
const producto3 = new Producto('laptop', 300);

function formatearProducto(producto){
    return `el producto ${producto.nombre} tiene un precio de ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());



