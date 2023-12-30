import { Image } from '@chakra-ui/react';
import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ItemView = ({ products }: { products: any}) => {

  const  {id}= useParams<{id: string}>();
  console.log(id);

  console.log(products);
  console.log(products.find((product: any) => product.name === 'TOM FORD'));

//   const productsDetail = products.filter(
//     (product: any) => product.id === id
//   );

const findProduct = products.find((product: any) => product.id === 5);

  console.log(findProduct);

  return (
    <Box
      bg='white'
      maxW='sm'
      borderWidth='1px'
      rounded='lg'
      shadow='lg'
      _hover={{ shadow: 'dark-lg' }}
    >
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
    </Box>
  );
};

export default ItemView;
