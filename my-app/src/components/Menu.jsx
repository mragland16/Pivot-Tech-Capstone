import { PizzaComponent } from "../components/pizzacomponents";
import { pizzaData } from "../data";

// "." means same folder
// "/" means down a folder
// ".." means up a folder
export const Menu = function () {
  console.log(pizzaData);

  //return is html (NOT ALWAYS)
//   condition ? code : code 
// if (condition)
// condition && code 
// && if the condition is true then do the action or else statement 

  return (
    <div className="menu-container">
      <h3 className="menu-txt">Menu</h3>
      {/* for loop for array */}
      { pizzaData.length>5?
        pizzaData.map(
          (pizzaItem) => {
            return (
              <PizzaComponent
                title={pizzaItem.name}
                description={pizzaItem.ingredients}
                img={pizzaItem.photoName}
                price={pizzaItem.price}
                //pass down soldOut
                soldOut={pizzaItem.soldOut}
              />
            )
          }
        )
        :<p>something not right</p>
      }
      {/*
      <PizzaComponent
        title={pizzaData[100].name}
        description={pizzaData[100].ingredients}
        img={pizzaData[100].photoName}
        price={pizzaData[100].price}
      />
      <PizzaComponent
        title={pizzaData[2].name}
        description={pizzaData[2].ingredients}
        img={pizzaData[2].photoName}
        price={pizzaData[2].price}
      /> */}
    </div>
  )
}