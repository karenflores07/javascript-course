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