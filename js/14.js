// Arreglos o Arrays
const numeros = [10, 20 ,30, 40, 50];
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

//acceder a los valores de un arreglo
//console.log(numeros[3]);
//console.log(meses[2]);
//console.log(numeros[6]);

// conocer la extencion de un arreglo
//console.log(meses.length);

//numeros.forEach(function(numero) {
//    console.log(numero);
//})

numeros.push(60,70,80); //agrega al final del arreglo

numeros.unshift(-10,-20,-30);//agrega al inicio del arreglo

console.table(numeros);