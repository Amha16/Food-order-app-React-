import './App.css';
import Header from './componets/UI/header';
import './App.css'
import Meal from './componets/meals/meal';
import Cart from './componets/cart/cart';
import { useState } from 'react';
import CartProvider from './store/cartProvide';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showcartHandler = ()=>{
    setCartIsShown(true);
  }

  const hidecartHandler = ()=>{
    setCartIsShown(false);
  }
  return (
  <CartProvider>
    {cartIsShown && <Cart onClose={hidecartHandler}/>}
    <Header onShow={showcartHandler}/>
    <main>
    <Meal />
    </main>
  </CartProvider>
  
  );
}

export default App;
