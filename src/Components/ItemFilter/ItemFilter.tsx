import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import './ItemFilter.css';
import FilterListItem from '../FilterListItem/FilterListItem';

const ItemFilter = ({ products }: { products: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

  return (
    <>
      <div className='filterOptions'>
        <Button
          ref={btnRef}
          variant='outline'
          colorScheme='grey'
          onClick={onOpen}
        >
          Brands
        </Button>
        <Button
          ref={btnRef}
          variant='outline'
          colorScheme='grey'
          onClick={onOpen}
        >
          Price
        </Button>
        <Button
          ref={btnRef}
          variant='outline'
          colorScheme='grey'
          onClick={onOpen}
        >
          Fragrance Size
        </Button>
        <Button
          ref={btnRef}
          variant='outline'
          colorScheme='grey'
          onClick={onOpen}
        >
          Rating
        </Button>
      </div>
      <Drawer
        isOpen={isOpen}
        size='md'
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>

          <DrawerBody>
            <FilterListItem products={products} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ItemFilter;
