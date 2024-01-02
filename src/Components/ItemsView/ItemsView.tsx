import {
  Image,
  Text,
  Button,
  Box,
  Spinner,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import './ItemsView.css';
import { StarIcon } from '@chakra-ui/icons';

const ItemView = ({ products }: { products: any }) => {
  const { id } = useParams<{ id: any }>();
  console.log(id);

  const productID = parseInt(id);

  const findProduct = products.find((product: any) => product.id === productID);

  console.log(findProduct);

  return (
    <>
      {findProduct ? (
        <div className='grid'>
          <div className='flex'>
            <Image
              h='100%'
              w='30%'
              fit='cover'
              src={findProduct.detaillogo}
              alt={`Picture of ${findProduct.name}`}
              mt={0}
              p={1}
              borderRadius={15}
              justifyContent='center'
              ml={10}
              marginTop={5}
            />
            <div className='item-details'>
              <div className='padding'>
                <Text className='padding' fontSize='1xl' as='b'>
                  {findProduct.name}
                </Text>
                <div className='padding'>
                  <Text fontSize='3xl' as='b'>
                    {findProduct.description}
                  </Text>
                </div>
                <div>
                  <Box p={5} display='flex' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          marginTop='-50px'
                          boxSize='0.8em'
                          key={i}
                          color={
                            i < findProduct.rating ? 'black.500' : 'gray.300'
                          }
                        />
                      ))}
                    <Box
                      marginTop='-50px'
                      as='span'
                      ml='2'
                      color='gray.500'
                      fontSize='sm'
                    >
                      {findProduct.reviewcount}
                    </Box>
                  </Box>
                  <div className='padding'>
                    <Text fontSize='1xl' as='b'>
                      ${findProduct.price}.00
                    </Text>
                  </div>
                  <div className='padding'>
                    <Text fontSize='2xl' as='b'>
                      SIZE: {findProduct.size} OZ
                    </Text>
                  </div>
                  <div className='view-btn padding'>
                    <Button variant='outline' colorScheme='grey'>
                      {findProduct.size}0 oz
                    </Button>
                    <Button variant='outline' colorScheme='grey'>
                      {findProduct.sizetwo}0 oz
                    </Button>
                  </div>
                  <div className='btn-container padding'>
                    <Button
                      marginBottom={5}
                      size='lg'
                      variant='solid'
                      colorScheme='green'
                      className='snipcart-add-item'
                      data-item-id={findProduct.id}
                      data-item-image={findProduct.image}
                      data-item-name={findProduct.name}
                      // data-item-url='/products/:id'
                      data-item-description={findProduct.description}
                      data-item-price={findProduct.price}
                      data-item-size={findProduct.size}
                    >
                      Add To Cart
                    </Button>
                    <Button
                      // className='snipcart-checkout'
                      id='btn-style'
                      size='lg'
                      variant='solid'
                      colorScheme='black'
                    >
                      Buy Now
                    </Button>
                    <div>
                      <Accordion w='100%' marginTop={8} allowToggle>
                        <AccordionItem>
                          <h1>
                            <AccordionButton
                              _expanded={{ bg: 'grey', color: 'white' }}
                            >
                              <Box as='span' flex='1' textAlign='left'>
                                Product Details
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h1>
                          <AccordionPanel>
                            {findProduct.productdescription}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner
          thickness='4px'
          speed='0.55s'
          emptyColor='gray.200'
          color='green'
          size='xl'
        />
      )}
    </>
  );
};

export default ItemView;
