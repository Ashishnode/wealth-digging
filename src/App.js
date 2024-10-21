import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screen/Home';
import Coin from './screen/Coin';
import Exchange from './screen/Exchange';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/coins" element={<Coin />} />
      <Route path="/exchange" element={<Exchange />} />
    </Routes>
  );
};

export default App;

