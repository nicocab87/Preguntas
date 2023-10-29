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

/* const arrayPregunta =[
    {numero: 1,
    pregunta: "¿Qué es un antígeno?", 
    opcionA: "a) Un microorganismo",
    opcionB: "b) Una molécula que el sistema inmunológico reconoce",
    opcionC: "c) Un medicamento",
    repuesta: "b"
    },

    {numero: 2,
    pregunta: "¿Cuál es uno de los métodos comunes para administrar una vacuna?", 
    opcionA: "a) Intramuscular",
    opcionB: "b) Intravenosa",
    opcionC: "c) Oral",
    repuesta: "a"
    },

    {numero: 3,
    pregunta: "¿Qué es una vacuna?", 
    opcionA: "a) Un tratamiento médico",
    opcionB: "b) Intravenosa",
    opcionC: "c) Una preparación que estimula el sistema inmunológico",
    repuesta: "c"
    },

    {numero: 4,
    pregunta: "¿Cuál es el propósito principal de una vacuna?", 
    opcionA: "a) Tratar enfermedades",
    opcionB: "b) Prevenir enfermedades " ,
    opcionC: "c) Diagnosticar enfermedades",
    repuesta: "b"
    },

    {numero: 5,
    pregunta: "¿Qué es la inmunidad de rebaño?",
    opcionA: "a) Cuando todos en una comunidad tienen la misma enfermedad",
    opcionB: "b) Cuando una gran proporción de la población es inmune a una enfermedad, lo que protege a aquellos que no lo son",
    opcionC: "c) Cuando se desarrolla inmunidad permanente después de una sola vacunación",
    repuesta: "b"
    },

    {
    numero: 6,
    pregunta: "¿Cuál es la función principal de las vacunas de ARN mensajero (ARNm)?",
    opcionA: "a) Introducir ARN viral en el cuerpo.",
    opcionB: "b) Estimular la respuesta inmunológica sin utilizar virus vivos/atenuados.",
    opcionC: "c) Modificar el ADN humano.",
    repuesta: "b"
    },
    {
    numero: 7,
    pregunta: "¿Cuál es el proceso por el cual una célula se divide en dos células hijas idénticas?",
    opcionA: "a) Fagocitosis",
    opcionB: "b) Meiosis",
    opcionC: "c) Mitosis",
    repuesta: "c"
    },
    {
    numero: 8,
    pregunta: "¿Qué tipo de molécula contiene la información genética en las células?",
    opcionA: "a) Proteínas",
    opcionB: "b) Carbohidratos",
    opcionC: "c) Ácido desoxirribonucleico (ADN)",
    repuesta: "c"
    },
    {
    numero: 9,
    pregunta: "¿Cuál es la función principal de las enzimas?",
    opcionA: "a) Transportar oxígeno en la sangre",
    opcionB: "b) Facilitar reacciones químicas",
    opcionC: "c) Almacenar energía en las células",
    repuesta: "b"
    },
    {
    numero: 10,
    pregunta: "¿Cuál es la unidad básica de la herencia en los seres vivos?",
    opcionA: "a) Aminoácido",
    opcionB: "b) Gen",
    opcionC: "c) Célula",
    repuesta: "b"
    },
    {
    numero: 11,
    pregunta: "¿Qué tipo de virus utiliza ARN en lugar de ADN para su información genética?",
    opcionA: "a) Retrovirus",
    opcionB: "b) Adenovirus",
    opcionC: "c) Herpesvirus",
    repuesta: "a"
    },
    {
    numero: 12,
    pregunta: "¿Qué tipo de ácido nucleico se encuentra en las vacunas de ARN?",
    opcionA: "a) ARN ribosómico (ARNr)",
    opcionB: "b) ARN de transferencia (ARNt)",
    opcionC: "c) ARN mensajero (ARNm)",
    repuesta: "c"
    },
    {
    numero: 13,
    pregunta: "¿Cuál es la función de las células B en el sistema inmunitario?",
    opcionA: "a) Producir anticuerpos",
    opcionB: "b) Fagocitar patógenos",
    opcionC: "c) Transportar oxígeno en la sangre",
    repuesta: "a"
    },
    {
    numero: 14,
    pregunta: "¿Cuál es la función principal de las células T en el sistema inmunológico?",
    opcionA: "a) Producir anticuerpos.",
    opcionB: "b) Destruir células infectadas por patógenos.",
    opcionC: "c) Filtrar la sangre.",
    repuesta: "b"
    },
    {
    numero: 15,
    pregunta: "¿Cuál es el propósito de una vacuna de refuerzo?",
    opcionA: "a) Estimular la respuesta inmunológica inicial.",
    opcionB: "b) Mantener alta la inmunidad a largo plazo.",
    opcionC: "c) Tratar las infecciones activas.",
    repuesta: "b"
    },
    {
    numero: 16,
    pregunta: "¿Cuál es el proceso de fabricación de proteínas a partir de la información genética?",
    opcionA: "a) Transcripción",
    opcionB: "b) Traducción",
    opcionC: "c) Replicación",
    repuesta: "b"
    },
    {
    numero: 17,
    pregunta: "¿Qué tipo de ARN lleva la información genética de un gen desde el núcleo hasta el citoplasma para la síntesis de proteínas?",
    opcionA: "a) ARN ribosómico (ARNr)",
    opcionB: "b) ARN mensajero (ARNm)",
    opcionC: "c) ARN de transferencia (tARN)",
    repuesta: "b"
    },
    {
    numero: 18,
    pregunta: "¿Cuál es el objetivo de un adyuvante en una vacuna?",
    opcionA: "a) Prevenir reacciones alérgicas",
    opcionB: "b) Potenciar la respuesta inmunitaria",
    opcionC: "c) Reducir la eficacia de la vacuna",
    repuesta: "b"
    },
    {
    numero: 19,
    pregunta: "¿Qué función tienen los anticuerpos en el sistema inmunitario?",
    opcionA: "a) Transportar oxígeno en la sangre",
    opcionB: "b) Eliminar patógenos y toxinas",
    opcionC: "c) Digerir alimentos",
    repuesta: "b"
    },

    {
    numero: 20,
    pregunta: "¿Qué es la PCR (Reacción en Cadena de la Polimerasa)?",
    opcionA: "a) Una técnica para amplificar y detectar material genético.",
    opcionB: "b) Un tipo de vacuna.",
    opcionC: "c) Una técnica para purificar proteínas.",
    repuesta: "a"
    }

] */



let preguntaACtual
let preguntaContenedor

let preguntaSection = document.createElement (`section`);
preguntaSection.innerHTML =`<section id="preguntaSection" class="preguntaSection"> </section>`
main.appendChild(preguntaSection)

let objetoDatos


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
             })}
        

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

            } else if (puntos == 60) {

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











// Final
/* if(numPreg*3 === puntos){
    console.log(`Felicitaciones, ${nombre}, has logrado un puntaje perfecto, la verdad que superaste toda expectativa posible! has salvado la humanidad y fuiste recompensado con cinco millones de dolares`)
}else if(36 < puntos < numPreg*3){
    console.log(`Excelente desempeño ${nombre}! Has logrado encontrar la vacuna y la sociedad te lo ha agradecido con una estatua con tu nombre! Fe-li-ci-ta-ciones!`)
}else if (15 < puntos <= 36){
    console.log(`La vacuna ha salido, ${nombre}, pero la fakes news ganaron, lamentablemente la gente sufrió mucho culpa de grupos conspiranoicos.`)
}else{
    console.log(`${nombre}, has fallecido duarente el inteto. Vuelve a intentarlo!`)
}

console.log(`Tu puntaje final fue de: ${puntos}`)

console.log(`FIN DEL JUEGO`) */
