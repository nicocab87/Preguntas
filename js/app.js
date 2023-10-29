// --------------- Juego de preguntas --------------------- 

// Declaración de variables

const nombreInput = document.querySelector (`#name_field`);
let nombre

nombreInput.addEventListener(`input`, (e)=>{
    nombre = nombreInput.value;
    sessionStorage.setItem(`nombre`, nombre)

})


const bienvenida = document.querySelector("#bienvenida");
const btnEnviar = document.querySelector("#btnEnviar");


let personajeElegido = []

let puntos = 0;

function agregarPuntos(){
puntos+=3
actualizarPuntuacion()
}

let numPreg = 0
function sum(){
    numPreg+=1
}


function actualizarPuntuacion() {
    const puntuacionDiv = document.querySelector(".puntaje");
    puntuacionDiv.innerHTML = `${nombre} Puntos: ${puntos}`;
  }


// Personajes


const imgHombreSrc = "./img/personajeHombre.jpg";
const imgMujerSrc = "./img/personajeMujer.jpg";
const imgDinosaurioSrc = "./img/personajeDino.jpg";

const opciones =["A", "B", "C"]



let main = document.querySelector(`main`)
const personajeMain = document.createElement (`section`)
personajeMain.classList.add(`personajeMain`)
personajeMain.classList.add(`ocultarPersonaje`)
main.append(personajeMain)



function personaje (){

    const personajes = [
        personajeHombre = {
            nombre: `Dr. ${nombre} `,
            genero: "Hombre",
            profesion: "Becario de CONICET",
            especialidad: "Mantiene el laboratorio ordenado ",
            caracteristicas: "Exeperto en manipulacion de ADN",
            img: imgHombreSrc,
        
          },
        
          personajeMujer = {
            nombre: `Dra. ${nombre} `,
            genero: "Mujer",
            profesion: "Inmunóloga",
            especialidad: "Investigación en inmunidad y desarrollo de vacunas",
            caracteristicas: "Experta en inmunología, futura ganadora de premio Nobel",
            img: imgMujerSrc,
          },
        
           personajeDinosaurio = {
            nombre: `Dino-${nombre} Rex `,
            genero: "Tyrannosaurus Immunologicus",
            profesion: "Paleovacunólogo",
            especialidad: "Investigación de vacunas prehistóricas",
            caracteristicas: "Demasiado inteligente para actuar de extra en Jurasick Park",
            img: imgDinosaurioSrc,
          },
    
    ]

    for (i=0; i<personajes.length; i+=1){

        let item = personajes[i]

        const itemDiv= document.createElement (`div`)
        
        const imgElement = document.createElement(`img`);
        imgElement.src = item.img;

        itemDiv.innerHTML = `<div id=personaje${i}>
            <p>Nombre: ${item.nombre}</p>
            <p>Genero: ${item.genero}</p>
            <p>Profesion: ${item.profesion}</p>
            <p>Especialidad: ${item.especialidad}</p>
            <p>Caracteristicas: ${item.caracteristicas}</p>
            </div>
        `;
        itemDiv.classList.add(`personaje`);

        itemDiv.appendChild(imgElement);

        personajeMain.appendChild(itemDiv);


    }

   

    let personaje0 = document.querySelector(`#personaje0`)
    personaje0.addEventListener(`click`, () => {
        personajeElegido = personajes.filter ((psj)=> psj === personajeHombre);
        eleccionPersonaje();
        preguntar();  
    })



    let personaje1 = document.querySelector(`#personaje1`)
    personaje1.addEventListener(`click`, () => {
        personajeElegido = personajes.filter ((psj)=> psj === personajeMujer);
        eleccionPersonaje();
        preguntar();
    })


    let personaje2 = document.querySelector(`#personaje2`)
    personaje2.addEventListener(`click`, () => {
        personajeElegido = personajes.filter ((psj)=> psj === personajeDinosaurio);
        eleccionPersonaje();
         preguntar(); 
    })
}


const eleccionPersonaje = function (){
    personajeMain.classList.add(`ocultarPersonaje`)
    console.log(personajeElegido)
    nombre = personajeElegido[0].nombre; 

    let imgElegida= document.createElement(`img`);
    imgElegida.src = personajeElegido[0].img;
    imgElegida.classList.add(`img`)

    let divPuntaje = document.createElement(`div`)
    divPuntaje.classList.add(`divPregunta`)
    divPuntaje.innerHTML = `<div class="puntaje"> ${nombre} Puntos: ${puntos} </div>`
    main.appendChild(divPuntaje)
    divPuntaje.appendChild(imgElegida)

}



btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    bienvenida.classList.add("ocultar");
    personajeMain.classList.remove("ocultarPersonaje")
    personaje()
});


//Ranking



/* Array de pregunta de funciomes */
let btnA
let btnB
let btnC

let preguntaACtual
let preguntaContenedor

let objetoDatos

let preguntaSection = document.createElement (`section`);
preguntaSection.innerHTML =`<section id="preguntaSection" class="preguntaSection"> </section>`
main.appendChild(preguntaSection)


function ranking (){
    let listaJugadores = []

    let datosRecuperados = localStorage.getItem(`datosPartida`)
    
   if (datosRecuperados) {
        listaJugadores = JSON.parse(datosRecuperados) 
    }

    objetoDatos = {
        jugador: nombre,
        puntaje: puntos
    }

    listaJugadores.push(objetoDatos)

    localStorage.setItem(`datosPartida`, JSON.stringify(listaJugadores))

    let divRanking = document.createElement(`div`);
    divRanking.classList.add(`ranking`);
    divRanking.classList.add(`ocultar`)

    if (listaJugadores.length > 0) {
        let listaHTML = '<div class="lists"><ul class="nes-list is-disc"> <h1>Puntaje</h1>';
        
        listaJugadores.forEach((jugador) => {
            listaHTML += `<li>${jugador.jugador} = ${jugador.puntaje}</li>`;
        });

        listaHTML += '</ul></div>';
        divRanking.innerHTML = listaHTML;
    }else{
        let sinTexto = document.createElement(`div`)
        sinTexto.classList.add(`ranking`)
        sinTexto.innerHTML = `
        <div class="nes-container is-rounded">
            <p>Todavia no existe ninguna partida jugada.</p>
        </div>
        `

        main.appendChild(sinTexto)
    }

    main.appendChild(divRanking)

    let divBtnRanking = document.createElement(`div`)
    divBtnRanking.innerHTML = `
    <div>
        <button type="button" id="btnRanking" class="nes-btn is-error btnRanking">Historial Puntaje</button>
    </div>`
    main.appendChild(divBtnRanking)

    let btnRanking = document.querySelector(`#btnRanking`)

    btnRanking.addEventListener(`click`, ()=>{
    divRanking.classList.toggle(`ocultar`)
    preguntaSection.classList.toggle(`ocultar`)
    })

    divPuntaje.classList.add(`ocultar`)
}


let arrayPregunta

function preguntar (){

    fetch(`./json/preguntas.json`)
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            arrayPregunta=data
            generarPregunta()
        })

    async function generarPregunta(){
    for (i=0; i<  arrayPregunta.length; i+=1){
        preguntaContenedor = document.createElement(`div`)
        preguntaContenedor.classList.add(`scale-in-hor-center`)
        preguntaACtual = arrayPregunta[i]
        preguntaContenedor.innerHTML = `
        <div id="preg${preguntaACtual.numero}" class="nes-container with-title is-centered preguntaDiv">
            <p class="title">${preguntaACtual.pregunta}</p>
            <p class="opcionPregunta">Las opciones son: </p>
            <p class="opcionPregunta">${preguntaACtual.opcionA}</p>
            <p class="opcionPregunta">${preguntaACtual.opcionB}</p>
            <p class="opcionPregunta">${preguntaACtual.opcionC}</p>
            <a class="nes-btn" id="btnA-preg${preguntaACtual.numero}" href="#">Opcion A</a>
            <a class="nes-btn" id="btnB-preg${preguntaACtual.numero}" href="#">Opcion B</a>
            <a class="nes-btn" id="btnC-preg${preguntaACtual.numero}" href="#">Opcion C</a>
        </div>`
        preguntaSection.appendChild(preguntaContenedor)
        

        btnA = document.querySelector(`#btnA-preg${preguntaACtual.numero}`);
        btnB = document.querySelector(`#btnB-preg${preguntaACtual.numero}`);
        btnC = document.querySelector(`#btnC-preg${preguntaACtual.numero}`);

        btnA.addEventListener(`click`, () => { 
            funcionDialogo("a"); 
        })
         
         btnB.addEventListener(`click`, () => { 
            funcionDialogo("b"); 
        })
    
         btnC.addEventListener(`click`, () => { 
            funcionDialogo("c");
    })
         
         
        await esperarFuncion();
        function esperarFuncion() {
            return new Promise((resolve) => {
                btnB.addEventListener("click", () => {
                   resolve()
                    preguntaContenedor.classList.add(`ocultar2`)})
                btnA.addEventListener("click", () => {
                   resolve()
                    preguntaContenedor.classList.add(`ocultar2`)})
                btnC.addEventListener("click", () => {
                   resolve()
                    preguntaContenedor.classList.add(`ocultar2`)});
            })
        }
    }

    function funcionDialogo (x){
        if ( x == preguntaACtual.repuesta){
            Swal.fire({
                title: '<strong>Bien ahi!</strong>',
                html:
                `<div class="nes-dialog" id="dialog-default-preg${preguntaACtual.numero}}">
                    <form method="dialog">
                      <p> Acertaste, sos crack</p>
                    </form>
                </div>`,
                focusConfirm: false,
                confirmButtonText:
                  '<button id= "confirm" class=""nes-btn is-primary"></button> Ok!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
              })
            agregarPuntos();

        }else{
            Swal.fire({
                title: '<strong>Incorrecta!</strong>',
                html:
                `<div class="nes-dialog" id="dialog-default-preg${preguntaACtual.numero}}">
                    <form method="dialog">
                      <p> Noo mi rey, la pifiaste</p>
                    </form>
                </div>`,
                focusConfirm: false,
                confirmButtonText:
                  '<button id= "confirm" class=""nes-btn is-primary"></button> Ok!'
              })
        }
        btnConfirm = document.querySelector(`#btnConfirm-preg${preguntaACtual.numero}`);
        dialogo = document.querySelector(`#dialog-default-preg${preguntaACtual.numero}`);
        preguntaContenedor.classList.add(`ocultar`)
        sum()
        

        if (numPreg == arrayPregunta.length) {
            if (puntos <= 15) {

                let divFinal15 = document.createElement('div');
                divFinal15.innerHTML = `
                    <div class="nes-container is-rounded textoFinal">
                        <p>${nombre}, has fallecido durante el intento. Vuelve a intentarlo! Respondiste bien solamente el ${(puntos * 100) / 60}% de las preguntas</p>
                    </div>`;
                preguntaSection.appendChild(divFinal15);
                ranking()
                
            } else if (puntos > 15 && puntos <= 30) {

                let divFinal30 = document.createElement('div');
                divFinal30.innerHTML = `
                    <div class="nes-container is-rounded textoFinal">
                        <p>${nombre} has hecho lo más que pudiste, lamentablemente no alcanzó. Pero se valora el esfuerzo! Lograste un ${(puntos * 100) / 60}% de respuestas correctas!</p>
                    </div>`;
                preguntaSection.appendChild(divFinal30);
                ranking()

            } else if (puntos > 30 && puntos <= 45) {

                let divFinal45 = document.createElement('div');
                divFinal45.innerHTML = `
                    <div class="nes-container is-rounded textoFinal">
                        <p>${nombre} Has logrado encontrar la vacuna y salvar muchas vidas! La sociedad está en deuda contigo. ¡Felicidades! Lograste un ${(puntos * 100) / 60}% de respuestas correctas!</p>
                    </div>`;
                preguntaSection.appendChild(divFinal45);
                ranking()

            } else if (puntos > 45 && puntos < 60) {

                let divFinal59 = document.createElement('div');
                divFinal59.innerHTML = `
                    <div class="nes-container is-rounded textoFinal">
                        <p>${nombre} Lograste un ${(puntos * 100) / 60}% de respuestas correctas, casi un puntaje perfecto! No solo encontraste la vacuna, sino que fuiste premiado con varios premios. ¡Gran trabajo!</p>
                    </div>`;
                preguntaSection.appendChild(divFinal59);
                ranking()

            }   else if (puntos == 60) {

                let divFinal60 = document.createElement('div');
                divFinal60.innerHTML = `
                    <div class="nes-container is-rounded textoFinal">
                        <p>${nombre} Lograste un ${(puntos * 100) / 60}% de respuestas correctas, un puntaje perfecto! No solo encontraste la vacuna, sino que tu trabajo fue el ganador del premio Nobel.</p>
                    </div>`;
                preguntaSection.appendChild(divFinal60);
                ranking()
                }
            }
        }
    }
}

