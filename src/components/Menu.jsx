import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <HStack p={4} shadow={'base'} bgColor={'blackAlpha.900'} w={'100%'} mb={2}>
      <Button variant={'unstyled'} color={'white'}>
        <Link to='/'>Home</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'}>
        <Link to='/exchanges'>Exchanges</Link>
      </Button>   <Button variant={'unstyled'} color={'white'}>
        <Link to='/coins'>Coins</Link>
      </Button>

    </HStack>


  );
};

export default Menu;