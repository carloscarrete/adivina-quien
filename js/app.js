let personajes = [
    {Nombre : 'Batman', Sexo: 'M', Inteligencia: true, Velocidad: false, Vuelo: false, Fuerza:false, Capa:true,Sombrero:false, Invisibilidad: false},
    {Nombre : 'Flash', Sexo: 'M', Inteligencia: false, Velocidad: true, Vuelo:false, Fuerza:false, Capa:false,Sombrero:false, Invisibilidad: false},
    {Nombre : 'Chicha Halcón', Sexo: 'F', Inteligencia: true, Velocidad: false, Vuelo:true, Fuerza:true, Capa:false,Sombrero:false, Invisibilidad:false},
    {Nombre : 'Superman', Sexo: 'M', Inteligencia: false, Velocidad: true, Vuelo:true, Fuerza: true, Capa:true,Sombrero:false, Invisibilidad:false},
    {Nombre : 'La sombra', Sexo: 'M', Inteligencia: false, Velocidad: false, Vuelo: false, Fuerza: false, Capa:false,Sombrero:true, Invisibilidad:false},
    {Nombre : 'Cabeza de Kobra', Sexo: 'M', Inteligencia: true, Velocidad: true,Vuelo:false, Fuerza: false, Capa:false,Sombrero:false, Invisibilidad:false},
    {Nombre : 'Star Saphire', Sexo: 'F', Inteligencia: false, Velocidad: false, Vuelo:true, Fuerza: true, Capa:false,Sombrero:false, Invisibilidad:false},
    {Nombre : 'Ultra Humanite', Sexo: 'M', Inteligencia: true, Velocidad: false, Vuelo: false, Fuerza: true, Capa:false,Sombrero:false, Invisibilidad:false},
    {Nombre : 'El marciano detective', Sexo: 'M', Inteligencia: false, Velocidad: true, Vuelo: true, Fuerza: true, Capa:true,Sombrero:false, Invisibilidad:true},
    {Nombre : 'Wonder Woman', Sexo: 'F', Inteligencia: false, Velocidad: true, Vuelo: true, Fuerza: true, Capa:false,Sombrero:false, Invisibilidad:false}
]

let questionsBox = [
    '¿Tu personaje es un hombre?',
    '¿Tu personaje puede volar?',
    '¿Tu personaje tiene una inteligencia superior a la media?',
    '¿Tu persona es veloz?',
    '¿Tu personaje tiene una fuerza sobre humana?',
    '¿Tu personaje suele utilizar capa?',
    '¿Tu personaje suele utilizar un sombrero?',
    '¿Tu personaje tiene la capacidad de hacerse invisible?'
];
let filtrado = personajes;


function characterQuestion(pregunta,respuesta){
    switch(pregunta){
        case '¿Tu personaje es un hombre?':
            if(respuesta==='si'){
                filtrado = filtrado.filter(personaje => personaje.Sexo==='M');
            }else{
                filtrado = filtrado.filter(personaje => personaje.Sexo==='F');
            }
            break;
        case '¿Tu personaje puede volar?':
            if(respuesta==='si'){
                filtrado = filtrado.filter(personaje => personaje.Vuelo===true);
            }else{
                filtrado = filtrado.filter(personaje => personaje.Vuelo===false);
            }
            break;
        case '¿Tu personaje tiene una inteligencia superior a la media?':
            if(respuesta==='si'){
                filtrado = filtrado.filter(personaje => personaje.Inteligencia===true);
            }else{
                filtrado = filtrado.filter(personaje => personaje.Inteligencia===false);
            }
            break;
        case '¿Tu persona es veloz?':
            if(respuesta==='si'){
                filtrado = filtrado.filter(personaje => personaje.Velocidad===true);
            }else{
                filtrado = filtrado.filter(personaje => personaje.Velocidad===false);
            }
            break;
        case '¿Tu personaje tiene una fuerza sobre humana?':
            if(respuesta==='si'){
                filtrado = filtrado.filter(personaje => personaje.Fuerza===true);
            }else{
                filtrado = filtrado.filter(personaje => personaje.Fuerza===false);
            }
            break;
        case '¿Tu personaje suele utilizar capa?':
            if(respuesta==='si'){
                filtrado = filtrado.filter(personaje => personaje.Capa===true);
            }else{
                filtrado = filtrado.filter(personaje => personaje.Capa===false);
            }
            break;
        case '¿Tu personaje suele utilizar un sombrero?':
            if(respuesta==='si'){
                filtrado = filtrado.filter(personaje => personaje.Sombrero===true);
            }else{
                filtrado = filtrado.filter(personaje => personaje.Sombrero===false);
            }
            break;
        case '¿Tu personaje tiene la capacidad de hacerse invisible?':
            if(respuesta==='si'){
                filtrado = filtrado.filter(personaje => personaje.Invisibilidad===true);
            }else{
                filtrado = filtrado.filter(personaje => personaje.Invisibilidad===false);
            }
            break;
    

    }
}

function verificarLongitud(){
    if(filtrado.length==1){
        return true;
    }
}

let nombre = document.getElementById('nombreJugador');
let pregunta = document.getElementById('pregunta');
let botonIzquierdo = document.getElementById('left');
let botonDerecho = document.getElementById('right');

let nombreDelJugador = obtenerLocalStorage();
function obtenerLocalStorage(){
    let getNombre = localStorage.getItem("nombre");
    return getNombre;
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random()*(max-min)+parseInt(min));
  }


randomQuestion = parseInt(getRandomArbitrary(0,questionsBox.length-1))

pregunta.innerHTML = questionsBox[randomQuestion];

botonIzquierdo.addEventListener('click',function(evt){
    botonIzquierdo.prevent
    characterQuestion(questionsBox[randomQuestion],'si');
    questionsBox.splice(randomQuestion,1);
    randomQuestion = parseInt(getRandomArbitrary(1,questionsBox.length-1));
    setTimeout(function(){ 
    }, 500);    
    if(verificarLongitud()){
        pregunta.innerHTML = `<span style='color: red;'>${nombreDelJugador}</span> tu personaje es: <span style='color: green;'>${filtrado[0].Nombre} </span>`
    }else{
        pregunta.innerHTML = questionsBox[randomQuestion];
    }
});

botonDerecho.addEventListener('click',function(evt){
    botonDerecho.prevent
    characterQuestion(questionsBox[randomQuestion],'no');
    questionsBox.splice(randomQuestion,1);
    randomQuestion = parseInt(getRandomArbitrary(1,questionsBox.length-1));
    setTimeout(function(){ 
    }, 500);
    if(questionsBox.length==0){
        pregunta.innerHTML = 'No le atine';
    }else{
     if(verificarLongitud()){
        pregunta.innerHTML = `<span style='color: red;'>${nombreDelJugador}</span> tu personaje es: <span style='color: green;'>${filtrado[0].Nombre} </span>`
    }else{
        pregunta.innerHTML = questionsBox[randomQuestion];
    }
    }
});


let formulario = document.getElementById('formulario')!== null;

if(formulario.value!=undefined){
    formulario.addEventListener('submit',function(evt){
        formulario.prevent;
        console.log(nombre.value);
        alert(nombre.value);
    });
}
