import React from 'react';

import Header from './Components/Header/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <Meals />
    </React.Fragment>
  );
}

export default App;
