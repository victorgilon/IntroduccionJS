// Clases

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;                
    }

    formatearProducto(){
        return `el producto ${this.nombre} tiene un precio de ${this.precio}`;
    }
    
}


const producto2 = new Producto('monito curvo de 49"', 800);
const producto3 = new Producto('laptop', 300);

// Herencia
class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;                
        
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la Revolucion', 350, '987654321')
console.log(libro.formatearProducto());


console.log(producto2.formatearProducto());
