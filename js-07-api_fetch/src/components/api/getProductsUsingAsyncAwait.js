<<<<<<< HEAD


 async function fuctionName(){
  await fetch();
 }
 const getProductsUsingAsyncAwait = async ( url ) =>{
    console.log("Estoy iniciciando en la funcion on Asynic y await ")
    const resolve = await fetch(url);
          resolve.json();
     console.log("Finalizado la petición fetch con Async y Aeait")
 };
 
 getProductsUsingAsyncAwait("https://fakestoreapi.com/products");

 
=======
/*
Async y Await facilita la escritura y lectura de código asíncrono.
 Permite escribir código asíncrono de manera similar a cómo se escribiría
 código síncrono.
*/

async function functionName() {
  await fetch(url);
}

const getProductsUsingAsyncAwait = async (url) => {
  console.log("Estoy iniciando en la función con Async y Await");
  const resolve = await fetch(url);
  const products = await resolve.json();
  console.log(products);
  console.log("Finalizado la petición fetch con Async y Await");
};

const realizaSecuenciaPrincipal = async () => {
  try {
    console.log("Antes de la llamada de la función");
    await getProductsUsingAsyncAwait("https://fakestoreapi/products");
    console.log("Después de la llamada de la función");
  } catch (error) {
    console.warn("No corro, no grito, no empujo");
    console.error("Que pasó?", error);
  }
};

realizaSecuenciaPrincipal();
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
