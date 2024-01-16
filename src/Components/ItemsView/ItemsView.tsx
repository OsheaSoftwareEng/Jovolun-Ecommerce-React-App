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
import { useState, useEffect } from 'react';

const ItemView = ({ products }: { products: any }) => {
  const { id } = useParams<{ id: any }>();
  console.log(id);

  const productID = parseInt(id);

  const findProduct = products.find((product: any) => product.id === productID);

  const [selectedSize, setSelectedSize] = useState(findProduct?.size || '');
  const [selectInfo, setSelectInfo] = useState(findProduct?.description || '');
  const [selectPrice, setSelectPrice] = useState(findProduct?.price || '');

  useEffect(() => {
    setSelectedSize(findProduct?.size || '');
    setSelectInfo(findProduct?.description || '');
    setSelectPrice(findProduct?.price || '');
  }, [findProduct]);

  const handleSizeButtonClick = (size: string) => {
    setSelectedSize(size);
    setSelectInfo(
      findProduct[`description${size === findProduct.size ? '' : 'two'}`]
    );
    setSelectPrice(
      findProduct[`price${size === findProduct.size ? '' : 'two'}`]
    );
  };

  return (
    <>
      {findProduct ? (
        <div className='grid'>
          <div className='flex'>
            <div className='padding'>
              <Text
                className='padding hidden brand-name-sm'
                fontSize='1xl'
                as='b'
              >
                {findProduct.name}
              </Text>
              <div className='border'></div>
            </div>
            <Image
              id='view-image'
              w='600px'
              src={findProduct.detaillogo}
              alt={`Picture of ${findProduct.name}`}
              mt={0}
              p={1}
              justifyContent='center'
              ml={-80}
              marginTop={0}
            />
            <div className='item-details'>
              <div className='padding item-details'>
                <Text className='padding hidden-full' fontSize='1xl' as='b'>
                  {findProduct.name}
                </Text>
                <div className='padding'>
                  <Text fontSize='3xl' as='b'>
                    {selectInfo}
                  </Text>
                </div>
                <div className='ratings-styles'>
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
                  <div className='price-buy-container'>
                    <div className='padding'>
                      <Text fontSize='1xl' as='b'>
                        ${selectPrice}.00
                      </Text>
                    </div>
                    <div className='padding'>
                      <Text fontSize='2xl' as='b'>
                        SIZE: {selectedSize} OZ
                      </Text>
                    </div>
                    <div className='view-btn padding'>
                      <Button
                        variant='outline'
                        colorScheme='grey'
                        borderColor={
                          selectedSize === findProduct.size
                            ? 'solid'
                            : 'transparent'
                        }
                        borderWidth='2px'
                        onClick={() => handleSizeButtonClick(findProduct.size)}
                      >
                        {findProduct.size}0 oz
                      </Button>
                      <Button
                        variant='outline'
                        colorScheme='grey'
                        borderColor={
                          selectedSize === findProduct.sizetwo
                            ? 'solid'
                            : 'transparent'
                        }
                        borderWidth='2px'
                        onClick={() =>
                          handleSizeButtonClick(findProduct.sizetwo)
                        }
                      >
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
                        data-item-description={selectInfo}
                        data-item-price={selectPrice}
                        data-item-size={selectedSize}
                      >
                        Add To Cart
                      </Button>
                      <Button
                        id='btn-style'
                        size='lg'
                        variant='solid'
                        colorScheme='black'
                        className='snipcart-add-item'
                        data-item-id={findProduct.id}
                        data-item-image={findProduct.image}
                        data-item-name={findProduct.name}
                        data-item-description={selectInfo}
                        data-item-price={selectPrice}
                        data-item-size={selectedSize}
                      >
                        Buy Now
                      </Button>
                      <div>
                        <Accordion marginTop={8} allowToggle>
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
