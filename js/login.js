let nombre = document.getElementById('nombreJugador');
let formulario = document.getElementById('formulario');

    formulario.addEventListener('submit',function(evt){
        formulario.prevent;
        console.log(nombre.value);
        guardarLocalStorage();
        location.href = "../juego.html";
    });


    function guardarLocalStorage(){

        localStorage.setItem("nombre",nombre.value);
    }