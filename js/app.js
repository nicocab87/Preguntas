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
}

let numPreg = 0
function sum(){
    numPreg+=1
}




// Personajes


const imgHombreSrc = "./img/personajeHombre.jpg";
const imgMujerSrc = "./img/personajeMujer.jpg";
const imgDinosaurioSrc = "./img/personajeDino.jpg";

const opciones =["A", "B", "C"]


/* El objeto personaje está dentro de la función personaje porque es la única forma que ${nombre} se defina después de definir nombreInput.value*/


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
        preguntar()
          
        
    })



    let personaje1 = document.querySelector(`#personaje1`)
    personaje1.addEventListener(`click`, () => {
        personajeElegido = personajes.filter ((psj)=> psj === personajeMujer);
        eleccionPersonaje();
         preguntar()

    })


    let personaje2 = document.querySelector(`#personaje2`)
    personaje2.addEventListener(`click`, () => {
        personajeElegido = personajes.filter ((psj)=> psj === personajeDinosaurio);
        eleccionPersonaje();
         preguntar()

       
    })
}

const eleccionPersonaje = function (){
    personajeMain.classList.add(`ocultarPersonaje`)
    console.log(personajeElegido)
    nombre = personajeElegido[0].nombre;  

}



btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    bienvenida.classList.add("ocultar");
    personajeMain.classList.remove("ocultarPersonaje")
    personaje()
});



// Esta era la forma que habia intentado hacer que la function preguntas se ejecutara, pero me daba errores, asi que lo intente resolver de la forma que se obserba mas abajo


// Juego

/* let divPregunta = document.querySelector(`#preguntaDiv`) */

/* 
const preguntaDiv = document.createElement(`div`);

function preguntados ( pregunta, op1, op2, op3, rta, pregX) {

    preguntaDiv.innerHTML = `
<div id="${pregX}" class="nes-container with-title is-centered preguntaDiv ocultar">
  <p class="title">${pregunta}</p>
  <p class="opcionPregunta">Las opciones son: </p>
  <p class="opcionPregunta">${op1}</p>
  <p class="opcionPregunta">${op2}</p>
  <p class="opcionPregunta">${op3}</p>
  <a class="nes-btn" id="btnA-${pregX}" href="#">Opcion A</a>
  <a class="nes-btn" id="btnB-${pregX}" href="#">Opcion B</a>
  <a class="nes-btn" id="btnC-${pregX}" href="#">Opcion C</a>
</div>`

    
    preguntaSection.appendChild(preguntaDiv);
 */
    
    
    

/*     let btnConfirm = document.querySelector(`#btnConfirm-${pregX}`);
    let dialogo = document.querySelector(`#dialog-default-${pregX}`); */ 

/* 
    function funcionDialogo (x){
        if ( x === rta){
            let divOpcionCorrecta = document.createElement(`div`);
            divOpcionCorrecta.innerHTML =`
            <div class="nes-dialog" id="dialog-default-${pregX}">
                <form method="dialog">
                  <p>Bien ahi! acertaste!</p>
                  <menu class="dialog-menu">
                    <button id= "btnConfirm-${pregX}" class="nes-btn is-primary">Confirm</button>
                  </menu>
                </form>
            </div>`

            preguntaSection.appendChild(divOpcionCorrecta)
            

            agregarPuntos();

        }else{
            let divOpcionIncorrecta = document.createElement(`div`);
            divOpcionIncorrecta.innerHTML =`
            <div class="nes-dialog" id="dialog-default-${pregX}">
                <form method="dialog">
                  <p>Alert: Nooo mi rey, no era esa</p>
                  <menu class="dialog-menu">
                    <button id= "btnConfirm-${pregX}" class="nes-btn is-primary">Confirm</button>
                  </menu>
                </form>
            </div>`
            preguntaSection.appendChild(divOpcionIncorrecta)
        }


        let btnConfirm = document.querySelector(`#btnConfirm-${pregX}`);
        let dialogo = document.querySelector(`#dialog-default-${pregX}`); 

        btnConfirm.addEventListener(`click`, () => {
    
            dialogo.classList.add(`ocultar`)
        })

        preguntaDiv.classList.add("ocultar")
        sum();
    }
 
    btnA.addEventListener(`click`, () => { 
        funcionDialogo("a");
        
     })
     
     btnB.addEventListener(`click`, () => { 
        funcionDialogo("b"); 
        
     })

     btnC.addEventListener(`click`, () => { 
        funcionDialogo("c");
    
     })
 */
    


/* Array de pregunta de funciomes */
let btnA
let btnB
let btnC

const arrayPregunta =[
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
        numero: "7",
        pregunta: "¿Cuál es el proceso por el cual una célula se divide en dos células hijas idénticas?",
        opcionA: "a) Fagocitosis",
        opcionB: "b) Meiosis",
        opcionC: "c) Mitosis",
        repuesta: "c"
    },
    {
        numero: "8",
        pregunta: "¿Qué tipo de molécula contiene la información genética en las células?",
        opcionA: "a) Proteínas",
        opcionB: "b) Carbohidratos",
        opcionC: "c) Ácido desoxirribonucleico (ADN)",
        repuesta: "c"
    },
    {
        numero: "9",
        pregunta: "¿Cuál es la función principal de las enzimas?",
        opcionA: "a) Transportar oxígeno en la sangre",
        opcionB: "b) Facilitar reacciones químicas",
        opcionC: "c) Almacenar energía en las células",
        repuesta: "b"
    },
    {
        numero: "10",
        pregunta: "¿Cuál es la unidad básica de la herencia en los seres vivos?",
        opcionA: "a) Aminoácido",
        opcionB: "b) Gen",
        opcionC: "c) Célula",
        repuesta: "b"
    },
    {
        numero: "11",
        pregunta: "¿Qué tipo de virus utiliza ARN en lugar de ADN para su información genética?",
        opcionA: "a) Retrovirus",
        opcionB: "b) Adenovirus",
        opcionC: "c) Herpesvirus",
        repuesta: "a"
    },
    {
        numero: "12",
        pregunta: "¿Qué tipo de ácido nucleico se encuentra en las vacunas de ARN?",
        opcionA: "a) ARN ribosómico (ARNr)",
        opcionB: "b) ARN de transferencia (ARNt)",
        opcionC: "c) ARN mensajero (ARNm)",
        repuesta: "c"
    },
    {
        numero: "13",
        pregunta: "¿Cuál es la función de las células B en el sistema inmunitario?",
        opcionA: "a) Producir anticuerpos",
        opcionB: "b) Fagocitar patógenos",
        opcionC: "c) Transportar oxígeno en la sangre",
        repuesta: "a"
    },
    {
        numero: "14",
        pregunta: "¿Cuál es la función principal de las células T en el sistema inmunológico?",
        opcionA: "a) Producir anticuerpos.",
        opcionB: "b) Destruir células infectadas por patógenos.",
        opcionC: "c) Filtrar la sangre.",
        repuesta: "b"
    },
    {
        numero: "15",
        pregunta: "¿Cuál es el propósito de una vacuna de refuerzo?",
        opcionA: "a) Estimular la respuesta inmunológica inicial.",
        opcionB: "b) Mantener alta la inmunidad a largo plazo.",
        opcionC: "c) Tratar las infecciones activas.",
        repuesta: "b"
    },
    {
        numero: "16",
        pregunta: "¿Cuál es el proceso de fabricación de proteínas a partir de la información genética?",
        opcionA: "a) Transcripción",
        opcionB: "b) Traducción",
        opcionC: "c) Replicación",
        repuesta: "b"
    },
    {
        numero: "17",
        pregunta: "¿Qué tipo de ARN lleva la información genética de un gen desde el núcleo hasta el citoplasma para la síntesis de proteínas?",
        opcionA: "a) ARN ribosómico (ARNr)",
        opcionB: "b) ARN mensajero (ARNm)",
        opcionC: "c) ARN de transferencia (tARN)",
        repuesta: "b"
    },
    {
        numero: "18",
        pregunta: "¿Cuál es el objetivo de un adyuvante en una vacuna?",
        opcionA: "a) Prevenir reacciones alérgicas",
        opcionB: "b) Potenciar la respuesta inmunitaria",
        opcionC: "c) Reducir la eficacia de la vacuna",
        repuesta: "b"
    },
    {
        numero: "19",
        pregunta: "¿Qué función tienen los anticuerpos en el sistema inmunitario?",
        opcionA: "a) Transportar oxígeno en la sangre",
        opcionB: "b) Eliminar patógenos y toxinas",
        opcionC: "c) Digerir alimentos",
        repuesta: "b"
    },

    {
        numero: "20",
        pregunta: "¿Qué es la PCR (Reacción en Cadena de la Polimerasa)?",
        opcionA: "a) Una técnica para amplificar y detectar material genético.",
        opcionB: "b) Un tipo de vacuna.",
        opcionC: "c) Una técnica para purificar proteínas.",
        repuesta: "a"
    }

]

function pushearObjeto(num, preguntas, A, B,C,rta ){
    this.numero=num
    this.pregunta = preguntas
    this.opcionA= A
    this.opcionB = B
    this.opcionC= C
    this.repuesta=rta
    arrayPregunta.push (pushearObjeto)
}

/* pushearObjeto ("5", "¿Qué es la inmunidad de rebaño?", "a) Cuando todos en una comunidad tienen la misma enfermedad", "b) Cuando una gran proporción de la población es inmune a una enfermedad, lo que protege a aquellos que no lo son", "c) Cuando se desarrolla inmunidad permanente después de una sola vacunación", "b")
pushearObjeto("6", "¿Cuál es la función principal de las vacunas de ARN mensajero (ARNm)?", "a) Introducir ARN viral en el cuerpo.", "b) Estimular la respuesta inmunológica sin utilizar virus vivos/atenuados.", "c) Modificar el ADN humano.", "b")
pushearObjeto("7", "¿Cuál es el proceso por el cual una célula se divide en dos células hijas idénticas?", "a) Fagocitosis", "b) Meiosis", "c) Mitosis", "c")
pushearObjeto("8", "¿Qué tipo de molécula contiene la información genética en las células?", "a) Proteínas", "b) Carbohidratos", "c) Ácido desoxirribonucleico (ADN)", "c")
pushearObjeto("9","¿Cuál es la función principal de las enzimas?", "a) Transportar oxígeno en la sangre", "b) Facilitar reacciones químicas", "c) Almacenar energía en las células", "b")
pushearObjeto("10", "¿Cuál es la unidad básica de la herencia en los seres vivos?", "a) Aminoácido", "b) Gen", "c) Célula", "b")
pushearObjeto("11", "¿Qué tipo de virus utiliza ARN en lugar de ADN para su información genética?", "a) Retrovirus", "b) Adenovirus", "c) Herpesvirus", "a")
pushearObjeto("12", "¿Qué tipo de ácido nucleico se encuentra en las vacunas de ARN?", "a) ARN ribosómico (ARNr)", "b) ARN de trasnferencia (ARNt)", "c) ARN mensajero (ARNm)", "c")
pushearObjeto("13", "¿Cuál es la función de las células B en el sistema inmunitario?", "a) Producir anticuerpos", "b) Fagocitar patógenos", "c) Transportar oxígeno en la sangre", "a")
pushearObjeto("14", "¿Cuál es la función principal de las células T en el sistema inmunológico?", "a) Producir anticuerpos.", "b) Destruir células infectadas por patógenos.", "c) Filtrar la sangre.", "b")
pushearObjeto("15", "¿Cuál es el propósito de una vacuna de refuerzo?", "a) Estimular la respuesta inmunológica inicial.", "b) Mantener alta la inmunidad a largo plazo.", "c) Tratar las infecciones activas.", "b")
pushearObjeto("16", "¿Cuál es el proceso de fabricación de proteínas a partir de la información genética?", "a) Transcripción", "b) Traducción", "c) Replicación", "b")
pushearObjeto("17", "¿Qué tipo de ARN lleva la información genética de un gen desde el núcleo hasta el citoplasma para la síntesis de proteínas?", "a) ARN ribosómico (ARNr)", "b) ARN mensajero (ARNm)", "c) ARN de transferencia (tARN)", "b")
pushearObjeto("18", "¿Cuál es el objetivo de un adyuvante en una vacuna?", "a) Prevenir reacciones alérgicas", "b) Potenciar la respuesta inmunitaria", "c) Reducir la eficacia de la vacuna", "b")
pushearObjeto("19", "¿Qué función tienen los anticuerpos en el sistema inmunitario?", "a) Transportar oxígeno en la sangre", "b) Eliminar patógenos y toxinas", "c) Digerir alimentos", "b")
pushearObjeto("20", "¿Qué es la PCR (Reacción en Cadena de la Polimerasa)?", "a) Una técnica para amplificar y detectar material genético.", "b) Un tipo de vacuna.", "c) Una técnica para purificar proteínas.", "a")
 */

let preguntaACtual
let preguntaContenedor

let preguntaSection = document.createElement (`section`);
preguntaSection.innerHTML =`<section id="preguntaSection" class="preguntaSection"> </section>`
main.appendChild(preguntaSection)


async function preguntar (){

        for (i=0; i<  arrayPregunta.length; i+=1){
            preguntaContenedor = document.createElement(`div`)
            preguntaContenedor.classList.add(`scale-up-hor-center`)
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

            if(numPreg==arrayPregunta.length){

                let divFinal = document.createElement(`div`)
                divFinal.innerHTML= `
                <div class="nes-container is-rounded">
                <p>${nombre} has llegado añ final! tu puntuación fue: ${puntos}</p>
                </div>`
                preguntaSection.appendChild(divFinal)
                
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
