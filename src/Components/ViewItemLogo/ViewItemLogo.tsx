import React from 'react';

import { Box, Divider, AbsoluteCenter, Image } from '@chakra-ui/react';

const ViewItemLogo = ({ products }: { products: any }) => {
  return (
    <Box position='relative' padding='10'>
      <Divider />
      <AbsoluteCenter bg='white' px='4'>
        <Image src={products.ViewLogo} />
      </AbsoluteCenter>
    </Box>
  );
};

export default ViewItemLogo;
