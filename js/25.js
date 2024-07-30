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

 // ForEach
carrito.forEach(producto => console.log(producto.nombre));

// Map
carrito.map(producto => console.log(producto.nombre));

