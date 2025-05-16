export function Footer() {

    // to use js in html
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
   const openingTime =9;
   const closingTime =17;
const isOpen = today.getHours()>= openingTime && today.getHours()
<= closingTime ? "Open": "Closed" 

  const orderHandler = () => {alert ("Hey ya'll");}
const test =true;

if (test===true) {
  return (<p>"test"</p>);
}
// ?hard challenge
// disabled = {isOpen === true? "brown "}
    return (
      <div className="footer-container">
        <button onClick={orderHandler}> 
        style={{backgroundColor: isOpen === true ? "yellow" : "gray"}}

        <h1>{today.getHours()}</h1>
     <h3>{formattedDate}</h3>
     <p> We are currently { isOpen ? "Open" : "CLOSED JUST DON'T COME IN"}  </p> 

  </button>
    </div>
    )}
   
    

