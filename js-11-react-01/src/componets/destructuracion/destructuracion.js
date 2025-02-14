
let x = 10;
let y = 20;
// Pasar el valor de "x" a "y" y viceversa
console.log(x,y);


let variableTemporal = x;
x = y ;
y = variableTemporal;
 
console.log(x,y);
[x,y]= [y,x];

/**
 *  Desestructuración 
 * 
 *  La desestructuración en JavaScript es una característica 
 *  que te permite extraer datos de arrays y objetos 
 *  de manera más conveniente y legible, 
 *  asignándolos a variables individuales.  
 */

const numeros= [1,2,3,4];
let a;
let b;
let c;

//forma tradicional 
/* a = numero [0];
b = numeros [1];
c = numeros [3];
 */
 [a, b, , c]= numeros;
 console.log (a,b, c);

 const [valueA, valueB, ,valueC] = numeros ;

  // Ejercicio
 // Del siguiente arreglo ["Isabel", "María", "Ana", "Luis", "Pedro"];
 // Extraer en variables independientes los valores de Isabel y Ana

 const nombres =["Isabel", "María", "Ana", "Luis", "Pedro"];
 let d;
 let e;
 let f;
 [d, , e ]=nombres;
 console.log (d, e);

/*  // desustruracion de objetos 
 const datosMiguel ={
    name:"Miguel",
    lastName:"Gonzales",
    age:20

 }
  const {age, name :nombre} = datosMiguel;
  console.log (nombre,age);
 */
  // Ejercicio
const product = {
    name: "Jabón Zote",
    precio: {
        frontera: 10,
        zonaCentro: 20,
        korea: 1000 
    },
    color: "blanco"
}
const {name:nombre, color } = product;
 console.log (nombre,color);
 

 
// obtener en variables independientes el valo de name y color
// Desestructurando un objeto dentro de otro objeto
// const { frontera } = product.precio;
// Obtener el color de precio en frontera
const { color: colorJabon,  precio:{ frontera: precioFrontera }  } = product;

console.log( colorJabon, precioFrontera);
// Desestructurar el name y precio de korea, renombrar las variables
// name -> nombre Producto
// precio.kores -> precioKorea
const {name:nombreProducto, precio:{korea:precioKorea} } = product;
console.log(nombreProducto,precioKorea)
