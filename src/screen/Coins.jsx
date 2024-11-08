import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {Server} from '../api/Api'
import { HStack } from '@chakra-ui/react';
import CoinCard from '../components/CoinCard';

const Coins = () => {
    const [Coins, setCoins] = useState([]);
    const [currency, setCurrency] = useState('inr');
    const [pages, setPages] = useState(1)

   useEffect(()=>{
  
    const fetchAllCoins = async()=>{
      try {   
        const {data :CoinData} = await 
        axios.get(`${Server}/coins/markets?vs_currency=${currency}&page=${pages}`)
        setCoins(CoinData)
        console.log(CoinData);
        
        
      }
      catch{ console.log("Something got wrong")
   
      }
    }
    fetchAllCoins()
   },[currency, pages])
  
  return (
    <HStack wrap={'wrap'}>
      {
        Coins.map((coin)=> <CoinCard id={coin.id} imgSrc={coin.image} symbol={coin.symbol}/>)
      }
    </HStack>
    
  )
}

export default Coins
