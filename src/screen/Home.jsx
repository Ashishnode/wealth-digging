import React, { useState, useEffect } from 'react'; 
import Coin from './Coin';
import '../App.css'
import axios from 'axios'
import { Server } from '../api/Api.jsx';
import Menu from "../components/Menu"
import Loader from '../components/Loader'
import Footer from "../components/Footer"


const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] =useState(true);

  useEffect(() => { 
    const fetchAllCoins = async () => { 
      try {
        const { data } = await 
        axios.get(`${Server}/coins/markets?vs_currency=inr&per_page=800`); 
        setCoins(data); 
        setLoading(false);
        
      } catch (error) {
        console.error('unable to connect:', error); 
      }
    };

    fetchAllCoins(); 
  }, []); 

  return (
    <div className='coin'>
      <Menu />
      {
        loading ? <Loader /> : coins.map((coin) => ( 
          <Coin key={coin.id} 
          name={coin.name} 
          symbol={coin.symbol} 
          price={coin.current_price} 
          ImgSrc={coin.image}/>
        ))
      }
      <Footer />
    </div>
  );
}

export default Home;



