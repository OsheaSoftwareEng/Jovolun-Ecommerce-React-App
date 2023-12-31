import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const FilterListItem = ({ products }: { products: any }) => {
  //variable returning only the product names from the array
  const brandNames: any = new Map([
    ...products.map((products: { name: any }) => [products.name])
  ]);
  // converting brandnames into an array
  const newBrand = Array.from(brandNames);

  //variable returning only the product size from the array
  const brandSize: any = new Map([
    ...products.map((products: { size: any }) => [products.size])
  ]);
  // converting brandnames into an array
  const newSize = Array.from(brandSize);

  const priceArray = [
    'Under $50',
    '$50-$100',
    '$100-$250',
    '$250-$500',
    '$500 & Above'
  ];

  const ratingArray = [5, 4, 3];

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h1>
          <AccordionButton _expanded={{ bg: 'grey', color: 'white' }}>
            <Box as='span' flex='1' textAlign='left'>
              Brands
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h1>
        <AccordionPanel>
          {newBrand.map((newBrand: any) => (
            <Checkbox className='checkbox'>{newBrand}</Checkbox>
          ))}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h1>
          <AccordionButton _expanded={{ bg: 'grey', color: 'white' }}>
            <Box as='span' flex='1' textAlign='left'>
              Price
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h1>
        <AccordionPanel>
          {priceArray.map((price: any) => (
            <Checkbox className='checkbox'>{price}</Checkbox>
          ))}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h1>
          <AccordionButton _expanded={{ bg: 'grey', color: 'white' }}>
            <Box as='span' flex='1' textAlign='left'>
              Fragrance Size
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h1>
        <AccordionPanel>
          {newSize.map((size: any) => (
            <Checkbox className='checkbox'>{size}</Checkbox>
          ))}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h1>
          <AccordionButton _expanded={{ bg: 'grey', color: 'white' }}>
            <Box as='span' flex='1' textAlign='left'>
              Customer's Top Rated
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h1>
        <AccordionPanel>
          <Checkbox className='checkbox'>
            <Box display='flex' mb='2' alignItems='center'>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  // {ratingArray.map((array: any) => ())}
                  <StarIcon
                    boxSize='0.8em'
                    key={i}
                    color={i < ratingArray[0] ? 'black.500' : 'gray.300'}
                  />
                ))}
            </Box>
          </Checkbox>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterListItem;
