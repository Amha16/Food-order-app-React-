import './App.css';
import Header from './componets/UI/header';
import './App.css'
import Meal from './componets/meals/meal';
import Cart from './componets/cart/cart';
import { useState } from 'react';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showcartHandler = ()=>{
    setCartIsShown(true);
  }

  const hidecartHandler = ()=>{
    setCartIsShown(false);
  }
  return (
  <div className='App'>
    {cartIsShown && <Cart onClose={hidecartHandler}/>}
    <Header onShow={showcartHandler}/>
    <main>
    <Meal />
    </main>
  </div>
  
  );
}

export default App;
