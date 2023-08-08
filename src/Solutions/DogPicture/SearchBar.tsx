import React, { useState } from "react";
import { TypeItem } from "./Display";

type SearchProps = {
    dogs: Array<TypeItem>
    setDogs: (dogsnew : Array<TypeItem>) => void
 };


export default function SearchBar({dogs, setDogs} : SearchProps) {
    const [input,setInput] = useState("");
    
    function handleSearch (input :string){
        const newsDogs = dogs.filter((e) => e.name === input);
        setDogs(newsDogs);
    }

    return (
        <div>
            <input type="text" placeholder="Search The Dog By Name" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => handleSearch(input)}>Search</button>
        </div>
    );
}