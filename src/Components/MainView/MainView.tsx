import * as React from 'react';
import { useEffect, useState } from 'react';
import Butter from 'buttercms';
import {
  Container,
  Text,
  Divider,
  Box,
  Image,
  Button,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import { FiShoppingCart, FiShoppingBag } from 'react-icons/fi';

const butter: any = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE as string);

function MainView() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await butter.content.retrieve(['jovos'], {
        order: 'name'
      });
      const { data } = await res.data;
      const allProducts = data.jovos;
      setProducts(allProducts);
    }
    fetchData();
  }, []);

  return (
    <Container maxW='container.xl' h='100vh'>
      <Flex justifyContent='space-between' alignContent='center'>
        <Text
          as='a'
          href='/'
          fontSize='2.5rem'
          color='gray.900'
          fontFamily='Robo'
          my='5px'
        >
          Jovolun Fashion
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
      <Box mt={4}>
        <SimpleGrid
          minChildWidth='280px'
          alignItems='center'
          justifyContent='center'
          spacing='40px'
          mb={32}
        >
          {products.map((product) => (
            <Box
              bg='white'
              maxW='sm'
              borderWidth='1px'
              rounded='lg'
              shadow='lg'
              _hover={{ shadow: 'dark-lg' }}
              key={product.id}
            >
              <Image
                h='350px'
                fit='cover'
                src={product.image}
                alt={`Picture of ${product.name}`}
                roundedTop='lg'
                mt={0}
                p={1}
                borderRadius={15}
              />

              <Box p='6'>
                <Flex
                  mt='1'
                  justifyContent='space-between'
                  alignContent='center'
                >
                  <Text
                    fontSize='2xl'
                    fontWeight='semibold'
                    as='h4'
                    textTransform='uppercase'
                    lineHeight='tight'
                    fontFamily='Roboto'
                  >
                    {product.name}
                  </Text>
                  <Text
                    as='h4'
                    fontSize='2xl'
                    fontWeight='bold'
                    color='teal.600'
                  >
                    ${product.price}
                  </Text>
                </Flex>

                <Text
                  mt={2}
                  color='gray.500'
                  display={{ base: 'none', md: 'flex' }}
                >
                  {product.description}
                </Text>

                <Button
                  leftIcon={<FiShoppingCart size='24px' />}
                  size='lg'
                  mt={4}
                //   isFullWidth
                  colorScheme='blue'
                  variant='outline'
                  alignSelf={'center'}
                  className='snipcart-add-item'
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.name}
                  data-item-url='/'
                  data-item-description={product.description}
                  data-item-price={product.price}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
export default MainView;
