import{generateUserCards} from "../modules/cards/generateUserCards.js"

/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
*  https://reqres.in/
* 
*  Lista de usuarios: https://reqres.in/api/users?page=2
*/

   const getUsersUsingAsyncAwait = async (url) =>{
       document.getElementById("cards").innerHTML-generateUserCards(us)
   }
     

  getUsersUsingAsyncAwait("https://reqres.in/api/users?page=2");


   
   