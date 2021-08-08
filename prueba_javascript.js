¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript.A diferencia de un examen, nadie te obligará a nada.Puedes hacer trampa y saltar a la siguiente clase, ese es el camino fácil.Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

Instrucciones para tomar esta prueba
Evalúa muy críticamente tu conocimiento.
Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a la siguiente clase y tomar el resto del curso.
Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú.
Vuelve al Curso Básico de JavaScript, anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.
Recuerda que el éxito no se mide por cuánto tiempo te toma aprender, esa métrica es relativamente inútil.Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!

Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve ?
¿Cuál es la diferencia entre declarar e inicializar una variable ?
¿Cuál es la diferencia entre sumar números y concatenar strings ?
¿Cuál operador me permite sumar o concatenar ?
  2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre
Apellido
Nombre de usuario en Platzi
Edad
Correo electrónico
Mayor de edad
Dinero ahorrado
Deudas
3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo(nombre y apellido)
Dinero real(dinero ahorrado menos deudas)
Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función ?
¿Cuándo me sirve usar una función en mi código ?
¿Cuál es la diferencia entre parámetros y argumentos de una función ?
  2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional ?
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias ?
¿Puedo combinar funciones y condicionales ?
  2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

    const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    break;
}
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

  Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional.😏

Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo ?
¿Qué tipos de ciclos existen en JavaScript ?
¿Qué es un ciclo infinito y por qué es un problema ?
¿Puedo mezclar ciclos y condicionales ?
  2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

    for (let i = 0; i < 5; i++) {
      console.log("El valor de i es: " + i);
    }
for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

  Pista: puedes usar la función prompt de JavaScript.

    Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array ?
¿Qué es un objeto ?
¿Cuándo es mejor usar objetos o arrays ?
¿Puedo mezclar arrays con objetos o incluso objetos con arrays ?
  2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno(no se vale imprimir el array completo).

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno(no se vale imprimir el objeto completo).

¿Cómo te fue ?🏆
¡Felicidades por completar la prueba de JavaScript! Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que ya no puedes abandonar el curso, debes completarlo hasta el final.No importa cuánto tiempo te tome.Yo sé que tú puedes y tú deberías de saberlo también.Mira todo lo que lograste con esta prueba.🏆

¡Te espero en la siguiente clase para comenza



///////////////////////////////////////////////////////////////////////////////////////////////////////////

RESULTADO DE COMPAÑEROS.

/* Variables y operaciones */
// 1.-
// a) Una variable es figuradamente una caja donde 	puedes guardar distintas cosas, como por ejemplo :
let number = 23;
const nombre = 'Jesús';
let mayorDeEdad = true;

// b) La diferencia es que al declarar una variable no estamos asignándole algún valor y al inicializarla si, por ejemplo:
// Declarar
let variable;
// Inicializar
variable = true;
// c) La diferencia  que al sumar strings no se suman los números solo se añaden ejemplo:

function sumar(a, b) {
  return a + b
}

console.log(sumar(4, 2)); // Resultado 6
console.log(sumar('4', '2')); // Resultado '42'


// d) El operador de más o suma  (+), ejemplo:
function sumar(a, b) {
  return a + b
}

console.log(sumar(4, 2)); // Resultado 6
console.log(sumar('Jesús ', 'Sotelo')); // Resultado 'Jesús Sotelo'

// 2.-
const nombre = 'string';
const apellido = 'string';
let usuarioPlatzi = 'string';
let edad = number;
const email = 'string';
let mayorDeEdad = boolean;
let dineroAhorrado = number;
let deudas = number;

// 3.- Podríamos generar un Objeto
const objeto = {
  nombre: 'Jesús',
  apellido: 'Sotelo',
  usuarioPlatzi: '@JesúsSotelo98',
  edad: 23,
  email: 'jesus_sotelo_98@gmail.com',
  mayorDeEdad: true,
  dineroAhorrado: 2000,
  deudas: 500
}

// 4.-
const nombreCompleto = objeto.nombre + ' ' + objeto.apellido;
console.log(nombreCompleto); // Resultado Jesús Sotelo
const dineroReal = objeto.dineroAhorrado - objeto.deudas;
console.log(dineroReal); // Resultado 1500


/* Funciones */

// 1.-
// a) Un bloque de código o de sentencias que se pueden utilizar para generar acciones con los valores que ya se han guardado en variables. En resumen te permiten ahorrar código que se repite mucho
sumar('Esta función ', 'la declare hasta arriba'); // Resultado 'Esta función la declare hasta arriba'

// b) Hay que utilizarlas cuando varias sentencias o algoritmos son iguales y solo cambian algunos parámetros, esto nos ayuda ahorrarnos mucho código.
sumar('Sigo utilizando ', 'la función de suma');

// c) Los parámetros se definen en la función pueden ser la cantidad de parámetros que recibirá y los argumentos es la información que se la pasara a la función.

function parametros(p) { // La (p) representa los parámetros
  return p + ' solucionado'
}

console.log(parametros('argumento')); // Al declarar la función se le agregan los argumentos R: 'argumento solucionado'

// 2.-
function precentacion(n, l, nk) {
  return 'Mi nombre es ' + n + ' ' + l + ', pero prefiero que me digas ' + nk
}
console.log(precentacion('Juan David', 'Castro Gallegos', 'JuanDC')); // Resultado: 'Mi nombre es Juan David Castro Gallegos, pero prefiero que me digas JuanDC'
console.log(precentacion('Jesús', 'Sotelo', 'Chuy')); // Resultado: 'Mi nombre es Jesús Sotelo, pero prefiero que me digas Chuy'

/* Condicionales */

// 1.-
// a) Una condicional indican si se cumple o no una condición.
function comprobarEdad(edad) {
  if (edad > 18) {
    return console.log('Eres Mayor de edad');
  } else if (edad === 18) {
    return console.log('Apenas y ya eres mayor, ya puedes pasar al teibol');
  } else {
    return console.log('No eres mayor de edad');
  }
}
comprobarEdad(17); // Resultado: No eres mayor de edad
comprobarEdad(18); // Resultado: Apenas y ya eres mayor, ya puedes pasar al teibol
comprobarEdad(23); // Resultado: Eres Mayor de edad

// b) if elseif else, switch, Operador Ternario, Todos hacen lo mismo al comprobar si es true o false pero es diferente la sintaxis y la aplicación

// c) Sí y es lo mas común

// 2.-
function tipoDeSuscripcion(s) {
  if (s == 'Free') {
    return console.log("Solo puedes tomar los cursos gratis");
  } else if (s == 'Basic') {
    return console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  }
  else if (s == 'Expert') {
    return console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  }
  else if (s == 'Expert +') {
    return console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  } else {
    return console.log('Que esperas para adquirir tu suscripción');
  }
}

tipoDeSuscripcion('Expert +'); // Resultado: Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año
tipoDeSuscripcion('no tengo'); // Resultado: Que esperas para adquirir tu suscripción

// 3.- Jejeje todavía no soy tan pro.

/* Ciclos */

// 1.-
// a) Es una forma rápida y sencilla de hacer algo repetidamente
// b) Los ciclos que hay son los ciclos for, for in, for of, while, do while
// c) Es cuando no pones un limite al ciclo como un tope o un break y puede llegar a crashear el navegador o incluso el dispositivo en el que se esta ejecutando el ciclo.
// d) Sí, es funcional en ciertos casos

// 2.-

let i = 0;
while (i < 5) {
  console.log("El valor de i es: ", i);
  i++;
}

let i = 10;
while (i >= 2) {
  console.log("El valor de i es: ", i);
  i--;
}

// 3.-

function juego() {
  let resultado;
  do {
    resultado = parseInt(prompt('¿Cuál es el resultado de "2 + 2". R: '));
  } while (resultado !== 4);
  if (resultado === 4);
  return console.log('¡Eres un GENIO!');
}
juego();

/* Listas */

// 1.-
// a) Un array es un tipo de datos objetos, puedes guardar distintos valores como si fuera una lista y se encuentran seguidos en memoria.
let lista = ['hola', 'como', 'estas']
// b) Un objeto te permite guardar datos con claves y valores ejemplo:
const objetoCarro = {
  marca: 'Bugatti',
  modelo: 'Chiron',
  precio: '1 USD'
}
// d) Depende mucho, pero algo que ahorita se me viene a la cabeza, es mejor utilizar un objeto cuando tienes que guardar datos que son repetitivos como un usuario que siempre va a tener las mismas claves y solo cambian los valores.
// c) Creo que sí.

// 2.-
function array(a) {
  return console.log(a[0]);
}

array(lista);
// 3.-
for (const value of lista) {
  console.log(value);
}
// 4.-
for (const property in objetoCarro) {
  if (Object.hasOwnProperty.call(objetoCarro, property)) {
    const element = objetoCarro[property];
    console.log(element);
  }
}