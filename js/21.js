// arrow functions 

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5 ,10);

const aprendiendo = tegnologia => console.log(`Aprendiendo ${tegnologia}`)

aprendiendo('JavaScript')


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500 },
    {nombre: 'television 50 pulgadas', precio: 700 },
    {nombre: 'Tablet', precio: 300 },
    {nombre: 'Audifonos', precio: 200 },
    {nombre: 'Teclado', precio: 50 },
    {nombre: 'Celular', precio: 500 },
    {nombre: 'Bocinas', precio: 300 },
    {nombre: 'laptop', precio: 800}
];

// foreach

meses.forEach(function(mes) {
    if(mes = 'marzo'){
        console.log('marzo si exiate');
    }
});

let resultado2;
// some ideal para arreglo de objetos
resultado2 = carrito.some(producto => producto.nombre == 'Celular');

console.log(resultado2);

// Reduce
resultado3 = carrito.reduce((total, producto) =>
     total + producto.precio, 0);
console.log(resultado3);

// Filter

resultado4 = carrito.filter(producto => producto.precio > 400);
console.log(resultado4);

resultado5 = carrito.filter(producto => producto.nombre === 'Celular');
console.log(resultado5);