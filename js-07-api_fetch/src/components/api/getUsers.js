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
