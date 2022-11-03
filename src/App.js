import './App.css';
import image from "./shopping.jpg";
import imageman from "./man.jpg";
import { GroceryList } from "./GroceryList";
import { Heart } from './Heart';


function App() {
  return (
    <div className="app">
      <div className='container'>
     <img src={ image } width="200px" alt="pichopping"/>
     </div>
     <div className="container"> 
     <h1> Grocery List</h1>
     </div>
     <GroceryList />
<div className='containerOne'>
     <img src={ imageman } width="200px" alt="picman"/>
     <Heart />
     </div>
    </div>
  );
}

export default App;
