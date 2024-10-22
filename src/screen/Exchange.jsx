import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Server } from '../api/Api'
import { HStack, VStack } from '@chakra-ui/react';
import ExchangeCard from '../components/ExchangeCard';
import Loader from '../components/Loader';
import Menu from '../components/Menu'
import { logDOM } from '@testing-library/react';

const Exchange = ({current}) => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] =useState(true);

 useEffect(()=>{
  const fetchAllExchanges = async()=>{
    try {   
      const {data} = await axios.get(`${Server}/exchanges?per_page=250`)
      setExchanges(data);
      console.log(data);
      
    }
    catch{
      console.log("somethings error ashish");
      
    }
  }
  fetchAllExchanges()

 },[])

  return (
    <>
      <Menu />
      <HStack wrap={'wrap'} justifyContent={'center'}>
        { 
         exchanges.map((exchange) => ( 
          <ExchangeCard key={exchange.id} 
          name={exchange.name} 
          rank={exchange.trust_score_rank} 
          imgSrc={exchange.image}
          country={exchange.country}
          url={exchange.url}
          />
        ))
      }
      </HStack>
    </>
  )
}

export default Exchange
