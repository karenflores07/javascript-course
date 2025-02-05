
/**
 
const changeElementById = () =>{
    // document: representa cualquier página web carga en el navegador
    //         sirve como punto e entrada al contenido de la página.
    //         document es el objeto principal del DOM.
      const descripcionOperadores = document.getElementById("descripcion-operadores");
      console.log( descripcionOperadores );
  }
  changeElementById();
  
/**
 *  Cambiar el contenido de un elemento HTML por medio de su ID
 */
const changeElementById = () =>{
    // document: representa cualquier página web carga en el navegador
    //         sirve como punto e entrada al contenido de la página.
    //         document es el objeto principal del DOM.
      const descripcionOperadores = document.getElementById("descripcion-operadores");
      console.log( descripcionOperadores );
      descripcionOperadores.innerText = "document: representa cualquier página web carga en el navegador.";
  }
  changeElementById();
      /* descripcionOperadores.innerText = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
  /**
 * Modificar elementos por su tag(etiqueta HTML)
 */
const changeElementsByTagName =  () => {
    const listItems = document.getElementsByName("li");
    console.log( listItems );
 }
 changeElementsByTagName();
 

/**
 * Acceder a un elemento usando el selector universar
 */
const getElementsByQuerySelector = () =>{
    // document.getElementById("descripcion-operadores");
const element = document.querySelector("#descripcion-operadores");
console.log(element);
const elementParagraph = document.querySelector("p"); // Seleccionar el primer paragraph que se encuentre    
console.log( elementParagraph );
const classTextCenter = document.querySelector(".text-center"); // Seleccionar el primer elemento con la clase text-center
console.log( classTextCenter );
const anchorAndTextWarning = document.querySelector("a");
console.log( anchorAndTextWarning)
}
getElementsByQuerySelector();
const anchorAndTextWarning = document.querySelector("a.text-warning"); // primer anchor que tenga la clases text-warning

/**
 * Acceder a varios elementos usando el selector universal
 * 
 */
const getListItemsByQuerySelector = () =>{
    const listItems = document.querySelectorAll("main li");
    console.log( listItems );
}
getListItemsByQuerySelector();

// ----------------------- Ejercicio ----------------------------------
// Seleccionar la imagen de dinosaurio que se muestra.
// mostrar en consola el objeto
 
const getimageItemsByQuerySelector = () =>{
    const imageItems = document.querySelectorAll("main img");
    console.log( listItems );
}
getListItemsByQuerySelector();
const getImagenDinosaurio = ( ) => {
    const  imagenDinosaurio = document.querySelector ( "main img" );
    console.log ( imagenDinosaurio );
    return imagenDinosaurio
}

// Cambiar la imagen de dinosaurio a la imagen web-developer
const changeImage = () => {
    const refImage = getImagenDinosaurio();
    refImage.src = "./public/images/web-developer.jpg";
    refImage.alt = "Chica ninja como web developer";
}

getImagenDinosaurio( );


const imagenPrincipal = getImagenDinosaurio();
imagenPrincipal.style.cursor = "pointer";
// imagenPrincipal.addEventListener( evento , callback );
// imagenPrincipal.addEventListener( "click" , changeImage );
imagenPrincipal.addEventListener( "click" , ()=>{
    // Hacer otras cosas
    changeImage();
} );

// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)
// refBtnPrimary = document.quearySelector("#btn-primary")
refBtnPrimary = document.getElementById("btn-primary");
refBtnSecondary = document.getElementById("btn-secondary");
refBtnSuccess = document.getElementById("btn-success");

// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)
// refBtnPrimary = document.quearySelector("#btn-primary")
refBtnPrimary = document.getElementById("btn-primary");
refBtnSecondary = document.getElementById("btn-secondary");
refBtnSuccess = document.getElementById("btn-success");
refBtnPrimary.addEventListener("click", ()=>{
    refBtnPrimary.style.display = "none";
} );
// Aplicar visibility = "hidden" para el btn-secondary

refBtnSecondary.addEventListener("click", () => {
    refBtnSecondary.style.visibility = "hidden";
});

// Reestablecer la visualizacion de los botones primary y secondary
// Usando el evento mouseover : Se activa cuando el puntero del ratón pasa sobre el botón
// display: "block"      visibility: "visible"
refBtnSuccess.addEventListener ( "mouseover", ( ) => {
    refBtnPrimary.style.display = "block";
    refBtnSecondary.style.visibility = "visible"; 
} );