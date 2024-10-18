import React from 'react'


const Coin = ({name, symbol, price ,ImgSrc}) => {
  return (
    <div className='coinWrapper'>
    <img src={ImgSrc} alt={name}/>
      <h1>{symbol}</h1>
      <p>{name}</p>
      <p>₹ {price}</p>
    </div>
  )
}

export default Coin



