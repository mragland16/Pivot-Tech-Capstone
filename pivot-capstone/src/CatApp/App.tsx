import React, { useState } from 'react'
import "./App.css"
import CatImages from "./Components/CatImages";
import Lottie from "lottie-react";
import CatLottie from "../assets/cat_1.json";


export default function catApp() {
    const [isLoading, setIsLoading] = useState(false);
    const [catImage, setCatImage] = useState(null);
    const [catText, setCatText] = useState(null);
    const [whatCatSays, setWhatCatSays] = useState("");
    const [enterSite, setEnterSite] = useState(false);



    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://cataas.com/cat?json=true");
            const data = await response.json();

            setCatImage(data.url);


        }
        catch (error) {

            alert(error)

        }
    };




    //      setTimeout (()=>{

    // setIsLoading(false);
    //      },1000;




    const fetchCatText = () => {
        fetch(`https://cataas.com/cat/cute/says/hello/${whatCatSays}`)
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error("Something went wrong!");
                }
                setCatText(response.url);
            }
            )
            .catch((error) => { alert(error) })
    }

const enterHandler = ()=> {setEnterSite(true);

}

0 
const fetchCatFacts = async()=>{
try {
    const response=await fetch("https:);
    if (!response.ok) {
        throw new Error("Something went wrong!");
    }
} catch (error) {
    
}



}



    if (enterSite === false) {
        return (
            <div>
                <h2>Welcome to my Cat App</h2>
                <Lottie animationData={CatLottie} loop={true} />;
                <button onClick={enterHandler}>Enter</button>)
                </div>
                )
}  




        return (



            <div className="Main">

                <h1>Cat App </h1>
                <p>  Press the button to resuce a cat! </p>
                <button onClick={fetchData}>{isLoading === true ? "Loading..." : "Meow"}
                </button>

                <img
                    src={catImage}
                    alt="new cat image"
                />


                <input
                    type="text"
                    value={whatCatSays}
                    onChange={(e) => setWhatCatSays(e.target.value)}
                />


<button onClick={addItem}>Add Item</button>


                <button onClick={fetchCatText}>{isLoading === true ? "Loading..." : "Cat Says"}
                </button>

            </div>

        )

    }