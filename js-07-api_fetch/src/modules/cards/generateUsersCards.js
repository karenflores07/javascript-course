<<<<<<< HEAD
import userCard from "./userCard.js"
const genereteUserCards = (userArray) =>{
      /*const cards = userArray.map((element, index , array) =>);*/
  const cards =userArray.map((user) => userCard (user));


}
export{genereteUserCards};
return cards.join ("");


/*[
    {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
] */
=======
import userCard from "./userCard.js"; // importación por default

/**
 * Crea un grid de tarjetas de usuarios
 * @param {Object array} userArray Arreglo de usuarios
 */
const generateUsersCards = ( userArray )=>{

    // const cards = userArray.map( (element, index , array )=>  );
    const cards = userArray.map( ( user )=>  userCard( user ) );

    return cards.join("");

}

export {  generateUsersCards };

/*
 [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
 ]


*/
>>>>>>> 280c939a8fc337f04b1da7001d3da41a2a84a91c
