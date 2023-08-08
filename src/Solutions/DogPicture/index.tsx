import React, { useState } from "react";
import { useRef } from "react"
import SearchBar from "./SearchBar";
import Display, { TypeItem } from "./Display";



const Dog = [
  { id: "1",location: "France",breed: "France",name: "Happy", ref: "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=1060&t=st=1691341969~exp=1691342569~hmac=b923b91f9337575cc31f62d832f5689b5d46d9d0ce3bd500901f9f7f0b197009" },
  { id: "2",location: "VietNam",breed: "VietNam",name: "Funny", ref: "https://img.freepik.com/free-photo/cute-small-puppy-corgi-dog-calmly-posing-isolated-white-studio-background-looks-happy_155003-46197.jpg?w=1060&t=st=1691342054~exp=1691342654~hmac=a8fa2ee99c35e19843fe9bb0b1b482a299716cd913d93cecfbee7bdd8f6c33df" },
  { id: "3",location: "England",breed: "England",name: "Sad", ref: "https://img.freepik.com/free-photo/dog-waiting-veterinarian-office_23-2149198673.jpg?w=360&t=st=1691342072~exp=1691342672~hmac=351223d2b18fd6a96407ee52e836a4597fff431e0a85b652d29eb8fe6e761478" },
  { id: "4",location: "Japan",breed: "Japan",name: "Cool", ref: "https://img.freepik.com/premium-photo/chow-chow-front-black_100800-4400.jpg?w=1060" },
];



export default function DogPicture() {
  const [dogs,setDogs] = useState(Dog);
  const [detailsDog,setDetailDog] = useState("");


  
  return (
    <div >
      <SearchBar dogs={Dog} setDogs={setDogs}/>
      <Display dogs={dogs} /> 
    </div>
  );
};



