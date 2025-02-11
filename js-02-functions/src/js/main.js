<<<<<<< HEAD

console.log("JS-02 funciones");
/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:
=======
console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas
<<<<<<< HEAD
  Recomendaciones para el uso de las funciones:
=======

  Recomendaciones para el uso de las funciones:

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.
<<<<<<< HEAD
*/
=======

*/

// =======================================================================

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.
<<<<<<< HEAD
=======

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}
<<<<<<< HEAD
hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.
=======

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
*/

console.log( saludar("Erick") );
console.log( saludar("Serch") );
console.log( saludar("Arely") );
<<<<<<< HEAD
=======

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
function saludar( nombre){
    return `Hola ${nombre}, soy una función declarada`;
}
// En la función anterior saludar()
// Agregar el parámetro nombre y mostrar "Hola nombre, soy una función declarada"
<<<<<<< HEAD
console.log(suma(6,5));
function suma(num1, num2){
    return num1 + num2;
}
=======


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

// console.log( sumarDosNumeros(3,6) ); //  Cannot access 'sumarDosNumeros' before initialization
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c

// Realizar una función declarada que sume dos números, retorna el resultado de la suma
const sumarDosNumeros = function suma(num1, num2){
    return num1 + num2;
};
<<<<<<< HEAD
console.log( sumarDosNumeros(3,6) ); // 9
let hora = 10;
let saludarDependiendoHora;
=======

console.log( sumarDosNumeros(3,6) ); // 9

let hora = 16;
let saludarDependiendoHora;

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
if(hora < 12){
    saludarDependiendoHora = function(){
        return "Buenos días";
    };
} else {
    saludarDependiendoHora = function(){
        return "Buenas tardes";
    };
}
<<<<<<< HEAD
saludarDependiendoHora();
=======

console.log( saludarDependiendoHora() ); 
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.
<<<<<<< HEAD
sintaxis:
   ( function (parámetros ){} )( argumentos );
*/

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.
sintaxis:
   ( function (parámetros ){} )( argumentos );
=======

sintaxis:
   ( function (parámetros ){} )( argumentos );

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
*/
( function setUp( name ) {
    console.log(`Hola ${name}, soy una función autoinvocada`);
})( "Erick" );

<<<<<<< HEAD
=======

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
<<<<<<< HEAD
sintaxis:
    const nombreVariable = (parametros) => instrucción;
=======

sintaxis:
    const nombreVariable = (parametros) => instrucción;

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
<<<<<<< HEAD
*/ 
=======
*/
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c

//Realizar una función declarada que calcule el área de un rectángulo
function areaRectangulo(ladoA, ladoB){
    return ladoA*ladoB;
}
// Convertir la funcion anterior a una función expresada
const calcularAreaRectangulo = function(base, altura) { return base * altura; };
<<<<<<< HEAD
// Convertir la función anterior a una función flecha
const rectangleArea = (height, width) => height * width;
console.log(`El área del rectángulo es : ${rectangleArea(10, 6)} cm2`);

=======

// Convertir la función anterior a una función flecha
const rectangleArea = (height, width) => height * width;

console.log(`El área del rectángulo es : ${rectangleArea(10, 6)} cm2`);


>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca
<<<<<<< HEAD
*/


const saludarPersona = (nombre) => `Hola ${nombre}, bienvenido`;
const saludarPersonaConDefaultParameters = (nombre = "Invitado/a") => `Hola ${nombre}, bienvenido`;
console.log( saludarPersona() ); // Hola undefined, bienvenido
console.log( saludarPersona("Serch") ); // Hola Serch, bienvenido
console.log( saludarPersona("Valeria") ); // Hola Valeria, bienvenido
=======

*/

const saludarPersona = nombre => `Hola ${nombre}, bienvenido`;

const saludarPersonaConDefaultParameters = (nombre = "Invitado/a") => `Hola ${nombre}, bienvenido`;

console.log( saludarPersona() ); // Hola undefined, bienvenido
console.log( saludarPersona("Serch") ); // Hola Serch, bienvenido
console.log( saludarPersona("Valeria") ); // Hola Valeria, bienvenido

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
console.log( saludarPersonaConDefaultParameters() ); // Hola Invitado/a, bienvenido
console.log( saludarPersonaConDefaultParameters("Serch") ); // Hola Serch, bienvenido
console.log( saludarPersonaConDefaultParameters("Valeria") ); // Hola Valeria, bienvenido

// Realizar una función que tenga de parámetros el nombre y cohorte
<<<<<<< HEAD
// Los valored por default de los parámetros son nombre= participante cohorte= "cohorte de Generation"
// Retornar el mensaje "Hola nombre, bienvenido/a a la cohorte de Generation"
// Retornar el mensaje "Hola Dae, bienvenido/a a la cohorte Ch50"

const nombreCohorte = (nombre = "participante", cohorte = "cohorte de Generation") => `Hola ${nombre}, bienvenido/a a la ${cohorte}.`;
console.log(nombreCohorte());
console.log(nombreCohorte("katy", "CH50"));

=======
// Los valored por default de los parámetros son nombre= "participante" cohorte= "cohorte de Generation"
// Retornar el mensaje "Hola participante, bienvenido/a a la cohorte de Generation"
// Retornar el mensaje "Hola Dae, bienvenido/a a la cohorte Ch50"
const nombreCohorte = (nombre = "participante", cohorte = "cohorte de Generation") => `Hola ${nombre}, bienvenido/a a la ${cohorte}.`;

console.log(nombreCohorte()); // Hola participante, bienvenido/a a la cohorte de Generation
console.log(nombreCohorte("Paul", "CH50")); // Hola Paul, bienvenido/a a la cohorte CH50
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c

console.log( parseInt("faba") ); // NaN
console.log( parseInt("faba", 10) ); // NaN
// base decimal(10 dígitos): 0,1,2,3,4,5,6,7,8,9
// base hexadecimal(16 dígitos): 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
// base octal(8 dígitos): 0,1,2,3,4,5,6,7
// base binaria(2 dígitos): 0,1
console.log( parseInt("faba", 16) ); // 64186 valor decimal de la base hexadecimal

<<<<<<< HEAD
/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */
 
 
 
=======
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c

/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */
<<<<<<< HEAD
 // Arrow function que reciba un parámetro y lo imprima en consola
 const mensajeConsola = mensaje => console.log(mensaje);
=======

 // Arrow function que reciba un parámetro y lo imprima en consola
 const mensajeConsola = mensaje => console.log(mensaje);

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
 /** 
  Arrow function que reciba un parámetro y lo imprima con alert
  @param {string} mensaje mensaje a imprimir
 */ 
 const mensajeAlert = mensaje => alert(mensaje);
<<<<<<< HEAD
 mensajeAlert()
 /**
  * Función que imprima en consola o alert un mensaje.
  * @param {string} mensaje mensaje a imprimir
  * @param {string} opcion "consola" o "alert" el destino a imprimir 
  */
 

    const imprimirMensaje = (mensaje = "Hola", opcion = "consola") => {
        if (opcion === "consola") {
          console.log(mensaje);
        } else (opcion === "alert")
          mensajeAlert(mensaje);
      };
      imprimirMensajeArrow("Hola Lisset", "alert");
      const mensajeTitulo = mensaje => document.getElementById("title").innerText = mensaje;
      
/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */
 // Arrow function que reciba un parámetro y lo imprima en consola
 
 /** 
  Arrow function que reciba un parámetro y lo imprima con alert
  @param {string} mensaje mensaje a imprimir
 */ 
 const mensajeAlert = mensaje => alert(mensaje);
 mensajeAlert()
 /**
  * Función que imprima en consola o alert un mensaje.
  * @param {string} mensaje mensaje a imprimir
  * @param {string} opcion "consola" o "alert" el destino a imprimir 
  */


// ============================ Pase por valor y pase por referencia =================
let colorPintura = "rojo";
function cambiarColorPintura(color){
  console.log(`El color que llega a la función es ${color}`); // rojo
    color = "azul";
    console.log(`El color de la pintura que imprime la función es ${color}`); // azul
}
=======

 const mensajeTitulo = mensaje => document.getElementById("title").innerText = mensaje;

 /**
  * Función que imprime en consola o alert un mensaje.
  * @param {string} mensaje mensaje a imprimir
  * @param {string} opcion "consola" o "alert" el destino a imprimir 
  */
 const imprimirMensaje = (mensaje = "Hola", opcion = "consola") => {
    if (opcion === "consola") {
      mensajeConsola(mensaje);
    } else if (opcion === "alert") {
      mensajeAlert(mensaje);
    } else if (opcion === "titulo") {
      mensajeTitulo(mensaje);
    }
  };

  // imprimirMensaje("Hola Lisset", "alert");
  // imprimirMensaje("Hola Serch", "alert");
  imprimirMensaje("Hola Kati");
  imprimirMensaje("Hola Kati", "titulo");
  

// Usar función de callback del ejercicio anterior
const imprimirMensajeConCallback = (mensaje, funcionCallback ) => funcionCallback( mensaje );

imprimirMensajeConCallback("Hola Erick", mensajeConsola );
imprimirMensajeConCallback("Hola Erick", mensajeTitulo );
// imprimerMensajeConCallback("Hola Erick", 589 ); // funcionCallback is not a function


// ============================ Pase por valor =================

let colorPintura = "rojo";

function cambiarColorPintura(color){
  console.log(`El color que llega a la función es ${color}`); // rojo
  color = "azul";
  console.log(`El color de la pintura que imprime la función es ${color}`); // azul
  return color;
}

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
cambiarColorPintura(colorPintura);
console.log(`El color de la pintura final es ${colorPintura}`); // rojo


// ============================ Pase por referencia =================
<<<<<<< HEAD
const colores = ["rojo", "azul", "verde"];
=======

const colores = ["rojo", "azul", "verde"];

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
function cambiarColorArreglo(arreglo){
  console.log(`El arreglo que llega a la función es ${arreglo}`); // "rojo", "azul", "verde"
  arreglo[0] = "negro";
  console.log(`Se imprimen los colores en la función: ${arreglo}`); // "negro", "azul", "verde"
<<<<<<< HEAD
}
=======

}

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
cambiarColorArreglo( colores );
console.log(`Los colores finales dentro del arreglo son: ${colores}`); // "negro", "azul", "verde"

// =============================== Método sort() =====================================
<<<<<<< HEAD
const series = ["Winnie", "Arnold", "Atreve", "Digimon", "Naruto"];
console.log( series.sort() ); //
// =============================== Método sort() =====================================
const series = ["Winnie", "Arnold", "avengers" ,"Atreve", "Digimon", "Naruto"];
console.log( series.sort() ); // ['Arnold', 'Atreve', 'Digimon', 'Naruto', 'Winnie', 'avengers']
const numeros = [ 122, 2, 1, 55]; 
console.log( numeros.sort() ); // [1, 122, 2, 55]
=======

const series = ["Winnie", "Arnold", "avengers" ,"Atreve", "Digimon", "Naruto"];
console.log( series.sort() ); // ['Arnold', 'Atreve', 'Digimon', 'Naruto', 'Winnie', 'avengers']

const numeros = [ 122, 2, 1, 55]; 
console.log( numeros.sort() ); // [1, 122, 2, 55]

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
const ordenarNumeros = ( numA, numB) => {
  if( numA < numB ){
     return -1; // numA va antes que numB
  } else if( numA > numB ) {
     return 1; // numA va después que numB
  } else { // Los números son iguales
    return 0
  }
}
<<<<<<< HEAD
console.log( ordenarNumeros( 3,6 ) ); // -1
console.log( ordenarNumeros( 6,3 ) ); // 1
console.log( ordenarNumeros( 3,3 ) ); // 0
const ordenarNumerosSimplificado = ( numA, numB) => numA - numB;
const otrosNumeros = [  1,   10,   3,   100,   5];
console.log( otrosNumeros.sort( ordenarNumerosSimplificado ) ); //  [1, 3, 5, 10, 100]


const numerosDeLaSuerte = [  7,   21,   14,   28,   35];
console.log( numerosDeLaSuerte.sort( (a,b)=> a-b ) );

const numbers = [  1,   10,   3,   100,   5];
console.log( numbers.sort( ordenarNumeros ) ); //  [1, 3, 5, 10, 100]
=======

console.log( ordenarNumeros( 3,6 ) ); // -1
console.log( ordenarNumeros( 6,3 ) ); // 1
console.log( ordenarNumeros( 3,3 ) ); // 0

const numbers = [  1,   10,   3,   100,   5];
console.log( numbers.sort( ordenarNumeros ) ); //  [1, 3, 5, 10, 100]
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
//  [1,10     3,100,5];
//  [1,3     10,100,5];
//  [1,3,10,100   ,5 ];
//  [1,3,10,5,   100 ];
//  ... después de repetir las iteraciones nuevamente
//  [1,3,5,10,,100 ];
<<<<<<< HEAD
const ordenarNumerosSimplificado = ( numA, numB) => numA - numB;
const otrosNumeros = [  1,   10,   3,   100,   5];

console.log( otrosNumeros.sort( ordenarNumerosSimplificado ) ); //  [1, 3, 5, 10, 100]
const numerosDeLaSuerte = [  7,   21,   14,   28,   35];

console.log( numerosDeLaSuerte.sort( (a,b)=> a-b ) ); // orden ascendente 7, 14, 21, 28, 35
console.log( numerosDeLaSuerte.sort( function(a,b){return a-b} ) ); // orden ascendente 7, 14, 21, 28, 35

const numch50=[19,15,13,18,5];
console.log(numch50.sort((numA,numB)=> numB-numA));
=======

const ordenarNumerosSimplificado = ( numA, numB) => numA - numB;
const otrosNumeros = [  1,   10,   3,   100,   5];
console.log( otrosNumeros.sort( ordenarNumerosSimplificado ) ); //  [1, 3, 5, 10, 100]

const numerosDeLaSuerte = [  7,   21,   14,   28,   35];
console.log( numerosDeLaSuerte.sort( (a,b)=> a-b ) ); // orden ascendente 7, 14, 21, 28, 35
console.log( numerosDeLaSuerte.sort( function(a,b){return a-b} ) ); // orden ascendente 7, 14, 21, 28, 35

// Ordenar de forma descendente los siguientes números:
const numCh50 = [19, 15, 13, 18, 5];
console.log(numCh50.sort((numA, numB) => numB - numA )); // 19, 15, 13, 18, 5
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
