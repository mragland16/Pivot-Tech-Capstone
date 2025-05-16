import React from "react"



export const InfoComponent = (props) => { 
  return (
<div className = "Info">
<h1 className="Name"> {props.name}</h1>
<p className="desciption"> {props.info} </p>


</div>
  )
  }

   
  