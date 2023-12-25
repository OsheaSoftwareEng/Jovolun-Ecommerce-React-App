import * as React from 'react';
import { Text, Divider, Button, Flex } from '@chakra-ui/react';
import { FiShoppingBag } from 'react-icons/fi';

const NavigationBar = () => {
  return (
    <>
      <Flex justifyContent='space-between' alignContent='center'>
        <Text
          as='a'
          href='/'
          fontSize='2.5rem'
          color='gray.900'
          fontFamily='Robo'
          my='5px'
        >
          Jovolun Fragrance
        </Text>
        <Button
          my='5px'
          colorScheme='green'
          variant='ghost'
          leftIcon={<FiShoppingBag size='24px' />}
          size='lg'
          p={2}
          className='snipcart-checkout'
        >
          View Cart
        </Button>
      </Flex>
      <Text
        as='a'
        fontSize='1.3rem'
        color='gray.900'
        fontFamily='Robo'
        my='5px'
      >
        Men With Taste
      </Text>
      <Divider />
    </>
  );
};

export default NavigationBar;
