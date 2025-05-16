import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './PivotHW/SimpleApp';
// import App from './Practice App/pratice';
// import InfoComponent from './Practice App/InfoComponent';
// import box from './Practice App/Box';
// import CalculatorApp from "./CalculatorApp/CalculatorApp.jsx";
import CatApp from './CatApp/CatApp.jsx';



// import './index.css';
// import App from './Step App/StepApp';
// import App from "./ToDoApp2"
// import App from "./Step App/CircleComponent"
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CalculatorApp/> */}
    <CatApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
