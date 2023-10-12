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
          
        
    })



    let personaje1 = document.querySelector(`#personaje1`)
    personaje1.addEventListener(`click`, () => {
        personajeElegido = personajes.filter ((psj)=> psj === personajeMujer);
        eleccionPersonaje();

    })


    let personaje2 = document.querySelector(`#personaje2`)
    personaje2.addEventListener(`click`, () => {
        personajeElegido = personajes.filter ((psj)=> psj === personajeDinosaurio);
        eleccionPersonaje();

       
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
    
    


let vPreg1
let vPreg2
let vPreg3
let vPreg4
let vPreg5
let vPreg6
let vPreg7
let vPreg8
let vPreg9
let vPreg10
let vPreg11
let vPreg12
let vPreg13
let vPreg14
let vPreg15
let vPreg16
let vPreg17
let vPreg18
let vPreg19
let vPreg20


let arrayVariables = [

vPreg1= document.querySelector(`#preg1`)  ,     
vPreg2= document.querySelector(`#preg2`)  ,     
vPreg3= document.querySelector(`#preg3`)  ,     
vPreg4= document.querySelector(`#preg4`)  ,     
vPreg5= document.querySelector(`#preg5`)  ,     
vPreg6= document.querySelector(`#preg6`)  ,     
vPreg7= document.querySelector(`#preg7`)  ,     
vPreg8= document.querySelector(`#preg8`)  ,     
vPreg9= document.querySelector(`#preg9`)  ,     
vPreg10= document.querySelector(`#preg10`),
vPreg11= document.querySelector(`#preg11`),
vPreg12= document.querySelector(`#preg12`),
vPreg13= document.querySelector(`#preg13`),
vPreg14= document.querySelector(`#preg14`),
vPreg15= document.querySelector(`#preg15`),
vPreg16= document.querySelector(`#preg16`),
vPreg17= document.querySelector(`#preg17`),
vPreg18= document.querySelector(`#preg18`),
vPreg19= document.querySelector(`#preg19`),
vPreg20= document.querySelector(`#preg20`)
] 

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
    opcionA: "b) Un tratamiento médico",
    opcionB: "b) Intravenosa",
    opcionC: "c) Una preparación que estimula el sistema inmunológico",
    repuesta: "c"
    }
]

let preguntaACtual
let preguntaContenedor

let btnConfirm
let dialogo 
let clase

let preguntaSection = document.createElement (`section`);
preguntaSection.innerHTML =`<section id="preguntaSection" class="preguntaSection"> </section>`
main.appendChild(preguntaSection)


function preguntar (){

        for (i=0; i<arrayPregunta.length; i+=1){
            preguntaContenedor = document.createElement(`div`)
            preguntaACtual = arrayPregunta[i]
            preguntaContenedor.innerHTML = `
            <div id="${preguntaACtual.numero}" class="nes-container with-title is-centered preguntaDiv">
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

            btnConfirm = document.querySelector(`#btnConfirm-${preguntaACtual.numero}`);
            dialogo = document.querySelector(`#dialog-default-${preguntaACtual.numero}`);   
 
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
    
   
        }

        function funcionDialogo (x){
            if ( x === preguntaACtual.repuesta){
                let divOpcionCorrecta = document.createElement(`div`);
                divOpcionCorrecta.innerHTML =`
                <div class="nes-dialog" id="dialog-default-preg${preguntaACtual.numero}">
                    <form method="dialog">
                      <p>Bien ahi! acertaste!</p>
                      <menu class="dialog-menu">
                        <button id= "btnConfirm-preg${preguntaACtual.numero}" class="nes-btn is-primary">Confirm</button>
                      </menu>
                    </form>
                </div>`
    
                preguntaSection.appendChild(divOpcionCorrecta)
                
    
                agregarPuntos();
    
            }else{
                let divOpcionIncorrecta = document.createElement(`div`);
                divOpcionIncorrecta.innerHTML =`
                <div class="nes-dialog" id="dialog-default-preg${preguntaACtual.numero}}">
                    <form method="dialog">
                      <p>Alert: Nooo mi rey, no era esa</p>
                      <menu class="dialog-menu">
                        <button id= "btnConfirm-preg${preguntaACtual.numero}" class="nes-btn is-primary">Confirm</button>
                      </menu>
                    </form>
                </div>`
                preguntaSection.appendChild(divOpcionIncorrecta)
            }


            btnConfirm = document.querySelector(`#btnConfirm-${preguntaACtual.numero}`);
            dialogo = document.querySelector(`#dialog-default-${preguntaACtual.numero}`);   

            
            btnConfirm.addEventListener(`click`, () => {
                dialogo.classList.add(`ocultar`)
            }) 
 
            preguntaContenedor.classList(`ocultar`)

            sum();
        } 
 



}

preguntar()



/* preguntar (   "preg1" )
preguntar (    "preg2")
preguntar (     "preg3") */
/* preguntar ("¿Cuál es el propósito principal de una vacuna?", "a) Tratar enfermedades", "b) Prevenir enfermedades " , "c) Diagnosticar enfermedades", "b", "preg4") */

// Linea de juego






/*
console.log(`Parece que a mucha gente le genera desconfianza la vacuna, ya que se generó una gran ola de desinformación y fake news en internet, podrás ayudar a aclarar sus dudas?`)
console.log(`1) Si
2) No (en este caso podrías perder puntos por no responder)`)

let rtaSegundaInstancia = prompt (`Ingrese su repuesta aqui!(responder con 1 o 2)`)

if(rtaSegundaInstancia == 1){
    preg5= preguntar ("¿Qué es la inmunidad de rebaño?", "a) Cuando todos en una comunidad tienen la misma enfermedad", "b) Cuando una gran proporción de la población es inmune a una enfermedad, lo que protege a aquellos que no lo son", "c) Cuando se desarrolla inmunidad permanente después de una sola vacunación", "b")
    preg6= preguntar ("¿Cuál es la función principal de las vacunas de ARN mensajero (ARNm)?", "a) Introducir ARN viral en el cuerpo.", "b) Estimular la respuesta inmunológica sin utilizar virus vivos/atenuados.", "c) Modificar el ADN humano.", "b")
}else{
    console.log(`Otro compañero del CONICET ha salido en un medio televisivo y ha aclarado todas las dudas`)
}

console.log (`Estas un poco nervioso, ya que tenes una gran responsabilidad encima. Asi que volviste a agarrar esos viejos apuntes sobre biología molecular para repasar`)

preg7= preguntar ("¿Cuál es el proceso por el cual una célula se divide en dos células hijas idénticas?", "a) Fagocitosis", "b) Meiosis", "c) Mitosis", "c")
preg7= preguntar ("¿Qué tipo de molécula contiene la información genética en las células?", "a) Proteínas", "b) Carbohidratos", "c) Ácido desoxirribonucleico (ADN)", "c")
preg9= preguntar ("¿Cuál es la función principal de las enzimas?", "a) Transportar oxígeno en la sangre", "b) Facilitar reacciones químicas", "c) Almacenar energía en las células", "b")
preg10= preguntar ("¿Cuál es la unidad básica de la herencia en los seres vivos?", "a) Aminoácido", "b) Gen", "c) Célula", "b")

if ( 15<= puntos ){
    console.log(`Felicitaciones, ${nombre}. Vienes muy bien! Ahora viene la parte mas dificil... la creación de la vacuna!`)

    preg11= preguntar ("¿Qué tipo de virus utiliza ARN en lugar de ADN para su información genética?", "a) Retrovirus", "b) Adenovirus", "c) Herpesvirus", "a")
    preg12= preguntar ("¿Qué tipo de ácido nucleico se encuentra en las vacunas de ARN?", "a) ARN ribosómico (ARNr)", "b) ARN de trasnferencia (ARNt)", "c) ARN mensajero (ARNm)", "c")
}else{
    console.log(`La verdad que estuvimos un poco flojos, el laboratorio cerró por cuarentena y nos costó mas de lo que creimos, pero capaz ahora podemos remontar.`)
    preg13= preguntar ("¿Cuál es la función de las células B en el sistema inmunitario?", "a) Producir anticuerpos", "b) Fagocitar patógenos", "c) Transportar oxígeno en la sangre", "a")
    preg14= preguntar ("¿Cuál es la función principal de las células T en el sistema inmunológico?", "a) Producir anticuerpos.", "b) Destruir células infectadas por patógenos.", "c) Filtrar la sangre.", "b")
}

alert(`URGENTE! Una vez lograda la vacuna, la gente tiene miedo de sacar turno, podrás ayudar a concientizar?`)

preg15= preguntar (" ¿Cuál es el propósito de una vacuna de refuerzo?", "a) Estimular la respuesta inmunológica inicial.", "b) Mantener alta la inmunidad a largo plazo.", "c) Tratar las infecciones activas.", "b")

 */



/*
 preg16= preguntar ("¿Cuál es el proceso de fabricación de proteínas a partir de la información genética?", "a) Transcripción", "b) Traducción", "c) Replicación", "b")
preg17= preguntar ("¿Qué tipo de ARN lleva la información genética de un gen desde el núcleo hasta el citoplasma para la síntesis de proteínas?", "a) ARN ribosómico (ARNr)", "b) ARN mensajero (ARNm)", "c) ARN de transferencia (tARN)", "b")
preg18= preguntar ("¿Cuál es el objetivo de un adyuvante en una vacuna?", "a) Prevenir reacciones alérgicas", "b) Potenciar la respuesta inmunitaria", "c) Reducir la eficacia de la vacuna", "b")
preg19= preguntar ("¿Qué función tienen los anticuerpos en el sistema inmunitario?", "a) Transportar oxígeno en la sangre", "b) Eliminar patógenos y toxinas", "c) Digerir alimentos", "b")
preg20= preguntar ("¿Qué es la PCR (Reacción en Cadena de la Polimerasa)?", "a) Una técnica para amplificar y detectar material genético.", "b) Un tipo de vacuna.", "c) Una técnica para purificar proteínas.", "a")
*/




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
