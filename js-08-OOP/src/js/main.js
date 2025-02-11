import { insertMainHeader } from "/src/modules/header/header.js";
import { insertMainFooter } from "/src/modules/footer/footer.js";
import {amdRadeonRx}  from "/src/modules/class/amd-radeon-rx.js";

insertMainHeader();


insertMainFooter();;

console.log (amdole,RadeonRx);
console.log(amdRadeonRx.compatibilidad.length);
console.log(mouseGamePixArt.compatibilidad.lrngth);



// accediendo a atributos que no existen
console.log( amdRadeonRx.dato1 ); // Descrip 1
console.log( mouseGamerPixArt.dato1 ); //  undefined
console.log( mouseGamerPixArt.compatibilidad ); //  undefined
// Obteniendo el número de elementos
console.log( amdRadeonRx.compatibilidad.length ); // 2
//console.log( mouseGamerPixArt.compatibilidad.length ); // Cannot read properties of undefined
// Operador de encadenamiento opcional  ( ?. )
console.log( mouseGamerPixArt.compatibilidad?.length ); 
console.log( amdRadeonRx.imprimirPrecioMxN() );
console.log( amdRadeonRx.imprimirPrecioDolares() );
console.log( mouseGamerPixArt.imprimirPrecioMxN() );
console.log( mouseGamerPixArt.imprimirPrecioDolares() );


const maulogi= new Product ("Mouse ");
const tecladoGamer = new Product("Teclado");
const monitorHp  = new Produc ("Monitor");
const bateria = new Product ();



mouseLogi.price =1;
console.table (mouseLogi);