import React from 'react'


export function ImgComponent (props) {
      return ( 
        <div className="image-box">
   <img 
            src= {props.src}
            alt= "Mariah press"
           /> 
      </div> 
    )
    }