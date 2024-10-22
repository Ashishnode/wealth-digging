import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Server } from '../api/Api'
import { HStack } from '@chakra-ui/react';
import ExchangeCard from '../components/ExchangeCard';
import Menu from '../components/Menu'
import Loader from '../components/Loader'
import ErrorModules from '../components/ErrorModules';

const Exchange = ({current}) => {
  const [exchanges, setExchanges] = useState([]);
  const [loading,setLoading] =useState(true)
  const [error,setError] =useState(false)


 useEffect(()=>{

  const fetchAllExchanges = async()=>{
    try {   
      const {data} = await axios.get(`${Server}/echanges?per_page=100`)
      setExchanges(data);
      setLoading(false);
      
    }
    catch{
      setError(true);
      setError(true);
      setLoading(false);
    }
  }
  fetchAllExchanges()
 },[error])

 if(error)return <ErrorModules />

  return (
    <>
      <Menu />
      <HStack wrap={'wrap'} justifyContent={'center '}>
       {loading ? <Loader/> :
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
