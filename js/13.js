// unir 2 odjetos
const producto = {
    nombreProducto : "monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

const nuevoProducto = {...producto,...medidas };

console.log(producto);
console.log(nuevoProducto);
