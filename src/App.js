import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screen/Home';
import Coins from './screen/Coins';
import Exchange from './screen/Exchange';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/coins" element={<Coins />} />
      <Route path="/exchanges" element={<Exchange />} />
    </Routes>
  );
};

export default App;

