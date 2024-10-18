import React, { useState, useEffect } from 'react'; 
import Coin from './components/Coin'; 
import './App.css'
import axios from 'axios'
import Menu from './components/Menu'


const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => { 
    const fetchAllCoins = async () => { 
      try {
        const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20"); // get the data
        setCoins(data); 
        console.log(coins);
        
      } catch (error) {
        console.error('Error fetching coins:', error); 
      }
    };

    fetchAllCoins(); 
  }, []); 

  return (
    <div className='coin'>
      <Menu />
      {coins.map((coin) => ( 
        <Coin key={coin.id} name={coin.name} symbol={coin.symbol} price={coin.current_price} ImgSrc={coin.image}/>
      ))}
    </div>
  );
}

export default App;



