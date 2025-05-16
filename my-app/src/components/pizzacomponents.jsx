import App from "../App"

export const PizzaComponent = ({
  title,
  description,
  img,
  price,
  soldOut
})=>{


    return (
    <div className = "card-container">
      <h1 className="pizza-title"> {title}</h1>
      <p className="pizza-desciption"> {description} </p>
    
    <img
    src= {img}
    alt= {title}
    width= "500" height="600"
    style={{filter: soldOut===true? 'grayscale(100%)' :null}}
    ></img>
    <h3 className="pizza-price">${price}</h3>
    </div> 
  )
  }

