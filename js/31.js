const boton = document.querySelector('#boton');
boton.addEventListener('click', function(){
    Notification.requestPermission()
    // .then(function(resultado){
    //     console.log('el resultado es', resultado);
    // })
    .then(resultado => console.log('el resultado es', resultado))
});

if (Notification.permission == 'granted'){
    new Notification('esta es una notificacion', {
        icon: `img/ccj.png`,
        body: `codigo con victor, los mejores tutoriales`
    })
}