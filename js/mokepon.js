const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionBotonReiniciar = document.getElementById('reiniciar')
const botonMascota = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")  
const selecionMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const seleccionMensaje = document.getElementById('resultado')  
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorBotonesDeAtaques = document.getElementById('EligeAtaque')
const contenedorAtaques = document.getElementById('contenedorAtaques')

//Variables Globales 
let mokepones =[]
let ataqueEnemigo =[]
let opcionDeMokepones
let botonesDeAtaques

let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let inputLangostelvis 
let inputTucapalma 
let inputPydos 

let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua
let botonTierra
let botones = []
let ataqueJugador =[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let VictoriasJugador = 0
let VictoriasEnemigo = 0
let mascotaSeleccionada

//clases
class Mokepon{
    constructor(nombre,foto,vida){
        this.nombre =nombre
        this.foto=foto
        this.vida= vida
        this.ataques = []
    }
}
//objetos
let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png',5)
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5)
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5)
let langostelvis = new Mokepon('Langostelvis','./assets/mokepons_mokepon_langostelvis_attack.png',5)
let tucapalma = new Mokepon('Tucapalma','./assets/mokepons_mokepon_tucapalma_attack.png',5)
let pydos = new Mokepon('Pydos','./assets/mokepons_mokepon_pydos_attack.png',5)

hipodoge.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌵', id:'boton-tierra'},
)
capipepo.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌵', id:'boton-tierra'},
    { nombre: '🌵', id:'boton-tierra'},
    { nombre: '🌵', id:'boton-tierra'},
)
ratigueya.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌵', id:'boton-tierra'},
)
langostelvis.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌵', id:'boton-tierra'},
)
tucapalma.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌵', id:'boton-tierra'},
    { nombre: '🌵', id:'boton-tierra'},
)
pydos.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌵', id:'boton-tierra'},
    { nombre: '🌵', id:'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)
//Funciones
function iniciarJuego(){
    sectionSeleccionarAtaque.style.display ='none' 
    mokepones.forEach((mokepon) =>{
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p> 
            <img src=${mokepon.foto} alt="${mokepon.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
        inputLangostelvis = document.getElementById('Langostelvis')
        inputTucapalma = document.getElementById('Tucapalma')
        inputPydos = document.getElementById('Pydos')
    }) 
    sectionBotonReiniciar.style.display ='none' 

    botonMascota.addEventListener('click', seleccionarMascotaJugador) 
    botonReiniciar.addEventListener('click',reiniciarJuego)
}
function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display ='none'
    sectionSeleccionarAtaque.style.display ='flex'

    if(inputHipodoge.checked ){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaSeleccionada = inputHipodoge.id
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaSeleccionada =inputCapipepo.id
    }else if(inputRatigueya.checked ){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaSeleccionada = inputRatigueya.id
    }else if(inputLangostelvis.checked ){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaSeleccionada = inputLangostelvis.id
    }else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaSeleccionada = inputTucapalma.id
    }else if(inputPydos.checked ){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaSeleccionada = inputPydos.id
    }else{
        reiniciarJuego()
        alert('No seleccionas te mascota 🙈')
    }
     extraerAtaques(mascotaSeleccionada)
     seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaSeleccionada){
    let ataques
    for(let i=0; i <mokepones.length; i++){
       if(mascotaSeleccionada === mokepones[i].nombre){
        ataques = mokepones[i].ataques
       }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
 ataques.forEach((ataque) => {
    ataquesMokepon = `
    <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon
 })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra= document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')

    
}
function secuenciaAtaque(){
     botones.forEach((boton)=>{
        boton.addEventListener('click',(e) =>{
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('Fuego')
                
                boton.style.background = '#112F58'
            } else if(e.target.textContent ==='💧'){
                ataqueJugador.push('Agua')
               
                boton.style.background = '#112F58'
            }else{
                ataqueJugador.push('Tierra')
                
                boton.style.background = '#112F58'
            }
             enemigoAtaca()
        })
     })
    
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0,mokepones.length-1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}



function enemigoAtaca(){
    let tipoDeAtaque = aleatorio(0,ataquesMokeponEnemigo.length-1)        
    if(tipoDeAtaque ==0 || tipoDeAtaque == 1){
        ataqueEnemigo.push('Fuego')
    }else if(tipoDeAtaque==2 || tipoDeAtaque == 3){
        ataqueEnemigo.push('Agua')
    }else {
        ataqueEnemigo.push('Tierra')
    }
    
   iniciarPelea()
}
function iniciarPelea(){
    if(ataqueJugador.length ===5 ){
        combate()
    }
}
function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate(){
    for(let index=0;index<ataqueJugador.length;index++){
        if(ataqueJugador[index]=== ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            creaMensaje("Empate") 
        }else if((ataqueJugador[index] == 'Fuego' && ataqueEnemigo[index] == 'Tierra') || (ataqueJugador[index] == 'Agua' && ataqueEnemigo[index] =='Fuego') || (ataqueJugador[index] == 'Tierra' && ataqueEnemigo[index] == 'Agua')){
            indexAmbosOponentes(index,index)
            creaMensaje("Ganaste") 
            VictoriasJugador++
            spanVidasJugador.innerHTML = VictoriasJugador
        }else{
            indexAmbosOponentes(index,index)
            creaMensaje("Perdiste")
            VictoriasEnemigo++
            spanVidasEnemigo.innerHTML = VictoriasEnemigo
        }
    }
    
    revisarVidas()
}

function revisarVidas(){
   
     if(VictoriasEnemigo < VictoriasJugador){
        creaMensajeFinal("Felicitaciones GANASTE 🥇")
    } else if(VictoriasJugador < VictoriasEnemigo){
        creaMensajeFinal("Lo siento PERDISTE 😭")
    } else{
        creaMensajeFinal("Empate 😭")
    }
}

function creaMensaje(resultado){
    let nuevoataqueDelJugador = document.createElement('p')
    let nuevoataqueDelEnemigo = document.createElement('p')
    nuevoataqueDelJugador.innerHTML = indexAtaqueJugador+"  " +resultado
    nuevoataqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    ataqueDelJugador.appendChild(nuevoataqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoataqueDelEnemigo)
}

function creaMensajeFinal(resultadoFinal){
    seleccionMensaje.innerHTML =resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionBotonReiniciar.style.display ='block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min+1)+min)
}
window.addEventListener('load',iniciarJuego)
