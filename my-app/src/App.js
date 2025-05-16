import './App.css';
import { Header } from "./components/Header";
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
// COMPONE
// reusable blocks of code 


// Set the src attribute to the image URL


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
    ;
}

export default App;