import * as React from 'react';
import { Text, Box, Image, Button, Flex } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ItemCard = ({ products }: { products: any }) => {
  return (
    <>
      <Link to={`/products/${products.id}`}>
        <Box mt={4}>
          <Box
            bg='white'
            maxW='sm'
            borderWidth='1px'
            rounded='lg'
            shadow='lg'
            _hover={{ shadow: 'dark-lg' }}
            key={products.id}
          >
            <Image
              h='350px'
              fit='cover'
              src={products.image}
              alt={`Picture of ${products.name}`}
              mt={0}
              p={1}
              borderRadius={15}
              justifyContent='center'
              ml={10}
              marginTop={5}
            />

            <Box p='6'>
              <Flex mt='1' justifyContent='space-between' alignContent='center'>
                <Text
                  fontSize='2xl'
                  fontWeight='semibold'
                  as='h4'
                  textTransform='uppercase'
                  lineHeight='tight'
                  fontFamily='Roboto'
                >
                  {products.name}
                </Text>
                <Text as='h4' fontSize='2xl' fontWeight='bold' color='teal.600'>
                  ${products.price}
                </Text>
              </Flex>

              <Text
                mt={2}
                color='gray.500'
                display={{ base: 'none', md: 'flex' }}
              >
                {products.description}
              </Text>

              <Button
                leftIcon={<FiShoppingCart size='24px' />}
                size='lg'
                mt={4}
                colorScheme='blue'
                variant='outline'
                alignSelf={'center'}
                className='snipcart-add-item'
                data-item-id={products.id}
                data-item-image={products.image}
                data-item-name={products.name}
                data-item-url='/'
                data-item-description={products.description}
                data-item-price={products.price}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default ItemCard;
