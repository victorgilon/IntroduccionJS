// Estructuras de Control

// const puntaje = 1000;

// if(puntaje==1000) {
//     console.log('si el puntaje es 1000');
// }else {
//     console.log('no es igual')
// }

//------------------------------------------------------

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito){
//     console.log('el usuario puede pagar');
// }else{
//     console.log('fondos insuficientes');
// }

//---------------------------------------------------

const rol = 'visitante';

if(rol === 'administrador'){
    console.log('acceso a todo el sistema');
}else if(rol === 'editor'){
    console.log('eres editor, puedes entrar pero no puedes hacer mucho')
}
else{
    console.log('no tienes acceso')
}
