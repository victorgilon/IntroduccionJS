const usuarioAutenticado = new Promise((resolve, reject) => {
    const autenticacion = false;

    if (autenticacion){
        resolve('Usuario autenticado');// el promise se cumple 
    }else{
        reject('no se pudo iniciar sesion');// el promise no se cumple
    }
});

//console.log(usuarioAutenticado);

usuarioAutenticado
    .then(function(resultado){
        console.log(resultado)
    })
    .catch(function(error){
        console.log(error)
    })

// en los promises existen 3 valores 
// pending = no se ha cumplido pero tampoco se ha rechazado
// fulfilled = ya se cumplio
// rejected = se ha rechasado o no se pudo cumplir