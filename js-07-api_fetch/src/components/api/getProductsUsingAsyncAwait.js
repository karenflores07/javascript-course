

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

 