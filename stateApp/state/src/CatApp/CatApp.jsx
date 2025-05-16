// import React, { useState } from 'react';

const COLORS = [
    { color: "puple" },
    { color: "blue" },
    { color: "red" },
]



console.log(COLORS[1].color)


const ANIMALS = {
    breed: [
        { type: "cat" },
        { type: "dog" },
        { type: "bird" },
    ]
}
console.log(ANIMALS.breed[1].type)

const NEW_ANIMALS =
    [
        { type: "cat", name: "Rubio" },
        { type: "dog", name: "Wally" },
        { type: "bird", name: "Tweety" },
    ]

console.log(NEW_ANIMALS[1].name)


export default function CatApp() {
    const getAnimalName = () => {
        const check = NEW_ANIMALS.some(furryFriends); {
         return   NEW_ANIMALS.name === "Tweety"}

        return () => {console.log("It's name is" + (NEW_ANIMALS[2].name)) };
    } 

const myTimeout = setTimeout(getAnimalName, 1000);

getAnimalName();


return (
    <div>
<header className='header'> Hello Ya'll    </header>
<p>OK Let's just talk CATS </p> 






    </div>)
}