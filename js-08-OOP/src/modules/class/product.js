/**
 *  Clase producto
 *  El nombre de las clases(plantillas) debe ser con UpperCamelCase
 *  Se recomienda que el nombre sea un sustantivo.
 * 
 * */
 
 
/**
 *  Clase producto
 *  El nombre de las clases(plantillas) debe ser con UpperCamelCase
 *  Se recomienda que el nombre sea un sustantivo.
 * 
 *
 * */
 
class Product {
    

// El método constructor nos ayuda a inicializar un objeto
contructor( producName){
    console.log(`Te he dado vida ${producName}`);
}
}
class Product {
  // Determinar los atributos de mi clase
  // El método constructor nos ayuda a inicializar un objeto
 constructor( productName="---", price, brand ){
     this.productName = productName; 
     this.price = price;
     this.brand = brand;
 }
}
class Product {
  // Determinar los atributos de mi clase
  #productName;
  #price;
  #brand;
  // El método constructor nos ayuda a inicializar un objeto
 constructor( productName="---", price, brand ){
     this.#productName = productName; 
     this.#price = price;
     this.#brand = brand;
 }
 // Métodos setters y getters
 set productName( newProductName ){
     // TODO continuar solo si cumple 
     // ciertas condiciones
     this.#productName = newProductName;
 }
 get productName(){
     return this.#productName;
 }
}
  


/*  // Generar el set y get de #price y #brand
 set price (price ){
  this.#price = price ;
 }
 get price(){
  return this.#price;
 } */
 set price (price){
  this.#price = price;
}
get price(){
return this.#price;
}
set brand (brand){
this.#brand = brand;
}
get brand(){
return this.#brand;
}
 
export {Producto};

