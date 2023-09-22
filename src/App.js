import React, {useState} from 'react';

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
    <React.Fragment>
      {displayCart && <Cart onCloseCart={closeCartHandler}/>}
      <Header onCheckCart={openCartHandler}/>
      <Meals />
    </React.Fragment>
  );
}

export default App;
