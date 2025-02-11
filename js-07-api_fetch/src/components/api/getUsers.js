<<<<<<< HEAD
/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
*  https://reqres.in/
* 
*  Lista de usuarios: https://reqres.in/api/users?page=2
*/


 const getUsers = (url) => {

    const createCards=( usersArray ) =>{
        document.getElementById("cards").innerHTML= generateUserCards(userArray);
    }
    fetch(url)
      .then((res) => res.json())
      .then((usuarios) => createCards())
      .catch((error) => console.log(error))
      .finally(() => console.log("He terminado"));
  };
  getUsers("https://reqres.in/api/users?page=2");
=======
import { generateUsersCards } from "../../modules/cards/generateUsersCards.js";

/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
 */
const getUsers = (url) => {

    const createCards = ( usersArray )=>{
        document.getElementById("cards").innerHTML = generateUsersCards( usersArray);
    }

    fetch(url)
      .then((res) => res.json())
      .then((users) => createCards( users.data ) )
      .catch((error) => console.log(error))
      .finally(() => console.log("He terminado"));
  };
  // getUsers("https://reqres.in/api/users?delay=5&page=1"); // Página 1 con retardo de 5 segundos
  getUsers("https://reqres.in/api/users?page=2"); // Página 2, sin retardo
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
