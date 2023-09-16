import React from 'react';

import Header from './Components/Header/Header';
import Meals from './Components/Meals/Meals';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Meals />
    </React.Fragment>
  );
}

export default App;
