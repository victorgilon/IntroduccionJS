// se les asigna un cero a los 2 parametros en caso de que uno de los argumentos no tenga asigando un valor 
function sumar(numero1 = 0, numero2= 0){// numero 1 y 2 son parametros
    console.log(numero1+numero2);
}
sumar(10,10)// argumentos o los valores reales
sumar(3,3);
sumar(3,6);
sumar(1); 



// Exprecion de la funcion
const sumar2 = function(n1, n2){
    console.log(n1+n2);
}
 sumar2(5,10);