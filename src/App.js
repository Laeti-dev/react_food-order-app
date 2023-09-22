import React, {useState} from 'react';

import CartProvider from './store/CartProvider';
import Header from './Components/Header/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

import './App.css';

function App() {
  const [displayCart, setDisplayCart] = useState(false)

  const closeCartHandler = () => {
    setDisplayCart(false)
  }

  const openCartHandler = () => {
    setDisplayCart(true)
  }
  return (
    <CartProvider>
      {displayCart && <Cart onCloseCart={closeCartHandler}/>}
      <Header onCheckCart={openCartHandler}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
