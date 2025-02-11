
<<<<<<< HEAD
/**
 
const changeElementById = () =>{
    // document: representa cualquier página web carga en el navegador
    //         sirve como punto e entrada al contenido de la página.
    //         document es el objeto principal del DOM.
      const descripcionOperadores = document.getElementById("descripcion-operadores");
      console.log( descripcionOperadores );
  }
  changeElementById();
  
=======

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
/**
 *  Cambiar el contenido de un elemento HTML por medio de su ID
 */
const changeElementById = () =>{
<<<<<<< HEAD
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
 
=======
  // document: representa cualquier página web carga en el navegador
  //         sirve como punto e entrada al contenido de la página.
  //         document es el objeto principal del DOM.
    const descripcionOperadores = document.getElementById("descripcion-operadores");
    console.log( descripcionOperadores );
    // descripcionOperadores.innerText = "document: representa cualquier página web carga en el navegador.";
    //descripcionOperadores.innerText = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
    //descripcionOperadores.innerHTML = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
    descripcionOperadores.innerHTML = '<span class="text-warning">document</span>: representa cualquier página web carga en el navegador.';
}

changeElementById();

/**
 * Modificar elementos por su tag(etiqueta HTML)
 */
const changeElementsByTagName =  () => {
   const listItems = document.getElementsByTagName("li");
   console.log( listItems );

   for( let item of listItems){
     item.innerText = "Mi nuevo li"
   }

}

// changeElementsByTagName();
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c

/**
 * Acceder a un elemento usando el selector universar
 */
const getElementsByQuerySelector = () =>{
<<<<<<< HEAD
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
=======
                  // document.getElementById("descripcion-operadores");
    const element = document.querySelector("#descripcion-operadores");
    console.log(element);

    const elementParagraph = document.querySelector("p"); // Seleccionar el primer paragraph que se encuentre    
    console.log( elementParagraph );

    const classTextCenter = document.querySelector(".text-center"); // Seleccionar el primer elemento con la clase text-center
    console.log( classTextCenter );

    const anchorAndTextWarning = document.querySelector("a.text-warning"); // primer anchor que tenga la clases text-warning
    console.log( anchorAndTextWarning)
}

getElementsByQuerySelector();
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c

/**
 * Acceder a varios elementos usando el selector universal
 * 
 */
const getListItemsByQuerySelector = () =>{
<<<<<<< HEAD
    const listItems = document.querySelectorAll("main li");
    console.log( listItems );
}
=======
    // const listItems = document.querySelectorAll("main li");
    const listItems = document.querySelectorAll(".text-start li");
    console.log( listItems );
}

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
getListItemsByQuerySelector();

// ----------------------- Ejercicio ----------------------------------
// Seleccionar la imagen de dinosaurio que se muestra.
// mostrar en consola el objeto
<<<<<<< HEAD
 
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
=======
const getImagenDinosaurio = ( ) => {
    const  imagenDinosaurio = document.querySelector ( "main img" );
    console.log ( imagenDinosaurio );
    return imagenDinosaurio;
}
getImagenDinosaurio( );
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c

// Cambiar la imagen de dinosaurio a la imagen web-developer
const changeImage = () => {
    const refImage = getImagenDinosaurio();
    refImage.src = "./public/images/web-developer.jpg";
    refImage.alt = "Chica ninja como web developer";
<<<<<<< HEAD
}

getImagenDinosaurio( );


const imagenPrincipal = getImagenDinosaurio();
imagenPrincipal.style.cursor = "pointer";
=======

}

const imagenPrincipal = getImagenDinosaurio();
imagenPrincipal.style.cursor = "pointer";

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
// imagenPrincipal.addEventListener( evento , callback );
// imagenPrincipal.addEventListener( "click" , changeImage );
imagenPrincipal.addEventListener( "click" , ()=>{
    // Hacer otras cosas
    changeImage();
} );

<<<<<<< HEAD
// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)
// refBtnPrimary = document.quearySelector("#btn-primary")
refBtnPrimary = document.getElementById("btn-primary");
refBtnSecondary = document.getElementById("btn-secondary");
refBtnSuccess = document.getElementById("btn-success");
=======
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c

// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)
<<<<<<< HEAD
=======

>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
// refBtnPrimary = document.quearySelector("#btn-primary")
refBtnPrimary = document.getElementById("btn-primary");
refBtnSecondary = document.getElementById("btn-secondary");
refBtnSuccess = document.getElementById("btn-success");
<<<<<<< HEAD
refBtnPrimary.addEventListener("click", ()=>{
    refBtnPrimary.style.display = "none";
} );
// Aplicar visibility = "hidden" para el btn-secondary

=======

refBtnPrimary.addEventListener("click", ()=>{
    refBtnPrimary.style.display = "none";
} );

// Aplicar visibility = "hidden" para el btn-secondary
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
refBtnSecondary.addEventListener("click", () => {
    refBtnSecondary.style.visibility = "hidden";
});

// Reestablecer la visualizacion de los botones primary y secondary
// Usando el evento mouseover : Se activa cuando el puntero del ratón pasa sobre el botón
// display: "block"      visibility: "visible"
<<<<<<< HEAD
refBtnSuccess.addEventListener ( "mouseover", ( ) => {
=======
refBtnSuccess.addEventListener ( "mouseover", () => {
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
    refBtnPrimary.style.display = "block";
    refBtnSecondary.style.visibility = "visible"; 
} );