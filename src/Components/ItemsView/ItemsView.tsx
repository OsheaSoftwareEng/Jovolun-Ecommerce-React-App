import { Image, SimpleGrid, AbsoluteCenter, Divider } from '@chakra-ui/react';
import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import ViewItemLogo from '../ViewItemLogo/ViewItemLogo';

const ItemView = ({ products }: { products: any }) => {
  const { id } = useParams<{ id: any }>();
  console.log(id);

  const productID = parseInt(id);

  const findProduct = products.find((product: any) => product.id === productID);

  console.log(findProduct);

  return (
    <>
      <ViewItemLogo products={products} />
      <SimpleGrid>
        {findProduct ? (
          <Image
            h='350px'
            fit='cover'
            src={findProduct.image}
            alt={`Picture of ${findProduct.name}`}
            mt={0}
            p={1}
            borderRadius={15}
            justifyContent='center'
            ml={10}
            marginTop={5}
          />
        ) : (
          <Spinner
            thickness='4px'
            speed='0.55s'
            emptyColor='gray.200'
            color='green'
            size='xl'
          />
        )}
      </SimpleGrid>
    </>
  );
};

export default ItemView;
