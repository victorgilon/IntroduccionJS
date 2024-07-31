// POO

// object leteral
const producto = {
    nombre: 'tablet',
    precio: 500
}

// object constructor


function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){
    return `el cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;    
}

// Prototype crea funciones que solo se utilizan en un objeto en espesifico
Producto.prototype.formatearProducto = function(){
    return `el producto ${this.nombre} tiene un precio de ${this.precio}`;
}


const producto2 = new Producto('monito curvo de 49"', 800);
const producto3 = new Producto('laptop', 300);
const cliente = new Cliente('victor', 'gilon');

console.log(cliente);
console.log(producto2);
console.log(cliente.formatearCliente());
console.log(producto2.formatearProducto());



