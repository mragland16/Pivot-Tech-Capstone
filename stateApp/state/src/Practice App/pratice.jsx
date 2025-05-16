
import React from 'react'
import InfoComponent from './InfoComponent';
import Box from './Box';

export default function App() {
    const x=1;
    const y=2;
    const favFood = "burgers"
    const ages=[1,2,3,4];
    const name="Big Mama";
    return (<div> 

<InfoComponent 
name= {name} 
favFood = "pizza" />


<Box

color="blue"
/>

<Box
color= "yellow"/>

    </div>) }
