import { VStack, Heading, Text, Image, Box, Link } from '@chakra-ui/react';
import React from 'react';

const ExchangeCard = ({ id, imgSrc, rank, name, url, country }) => {
  return (
    <Link href={url} isExternal _hover={{ textDecoration: 'none' }}>
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
      <Heading size={'sm'} noOfLines={1} color={'gray.800'}> Rank: {rank}</Heading>

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

      <Text fontSize={'xs'} color={'gray.600'}>
        {country}
      </Text>

      <Box color={'gray.500'} fontSize={'xs'} mt={2}>
        Visit Exchange
        </Box>
      </VStack>
    </Link>
  );
};

export default ExchangeCard;
