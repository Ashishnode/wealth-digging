import { Stack, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ErrorModules = () => {
  return (
    <Stack
      w={'100vw'} 
      h={'100vh'} 
      justifyContent={'center'} 
      alignItems={'center'} 
      bg={'white'} 
      spacing={4} 
    >
      <Image
        src={"https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7971.jpg?t=st=1729591585~exp=1729595185~hmac=c086bf8d444fb70eccd01a37c36e4390d4eedc1454c8d60cafd6bc3a39260aff&w=740"}
        alt='No Internet Connection'
        boxSize={["200px","300px" ]}
        objectFit='contain' 
      />
      <Text fontSize='xl' color='gray.800'>No Internet Connection</Text>
      <Text color='gray.600'>Please check your internet settings and try again.</Text>
    </Stack>
  );
};

export default ErrorModules;
