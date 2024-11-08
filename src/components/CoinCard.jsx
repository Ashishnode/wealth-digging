// /* eslint-disable no-template-curly-in-string */
// import React from 'react'
// import { VStack, Heading, Text, Image, Box, Link } from '@chakra-ui/react';


// const CoinCard = ({id, name,imgSrc, symbol }) => {
//   return (
//     <Link to = {'./coin/${id}'}>
//     <VStack
//       w={'48'} 
//       shadow={'lg'} 
//       p={'4'} 
//       bg={'white'} 
//       borderColor={'gray.200'} 
//       m={'3'} 
//       borderRadius={'lg'} 
//       transition={'transform 0.2s'}
//       _hover={{
//         transform: 'scale(1.05)',
//         boxShadow: 'xl', 
//       }}
//       alignItems={'center'}
//     >
//     <Heading size={'sm'} noOfLines={1} color={'gray.800'}>{name}</Heading>
//     <Heading size={'sm'} noOfLines={1} color={'gray.800'}>{symbol}</Heading>


//     <Image
//       src={imgSrc}
//       alt={name}
//       boxSize={'60px'} 
//       objectFit={'contain'}
//       borderRadius={'full'} 
//       mt={3}
//       mb={2}
//       />

//     <Text fontSize={'md'} fontWeight={'bold'} noOfLines={1} color={'gray.800'}>
//       {name}
//     </Text>
//     </VStack>
//   </Link>
      

//   )
// }

// export default CoinCard

import React from 'react';
import { VStack, Heading, Text, Image, Link } from '@chakra-ui/react';

const CoinCard = ({ id, name, imgSrc, symbol }) => {
  return (
    <Link to={`./coin/${id}`}>
      <VStack
        w={'48'} 
        shadow={'lg'} 
        p={'4'} 
        bg={'white'} 
        borderColor={'gray.200'} 
        m={'3'} 
        borderRadius={'lg'} 
        transition={'transform 0.2s'}
        _hover={{
          transform: 'scale(1.05)',
          boxShadow: 'xl', 
        }}
        alignItems={'center'}
      >
        <Heading size={'sm'} noOfLines={1} color={'gray.800'}>{name}</Heading>
        <Heading size={'sm'} noOfLines={1} color={'gray.800'}>{symbol}</Heading>

        <Image
          src={imgSrc}
          alt={name}
          boxSize={'60px'} 
          objectFit={'contain'}
          borderRadius={'full'} 
          mt={3}
          mb={2}
        />

        <Text fontSize={'md'} fontWeight={'bold'} noOfLines={1} color={'gray.800'}>
          {name}
        </Text>
      </VStack>
    </Link>
  );
}

export default CoinCard;


