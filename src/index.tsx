import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import MainView from './Components/MainView/MainView';
import { ChakraProvider, Container, SimpleGrid } from '@chakra-ui/react';
import NavigationBar from './Components/NavigationBar/NavigationBar';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ChakraProvider>
    <Container maxW='2x0'>
      <NavigationBar />
      <SimpleGrid minChildWidth='300px' spacing='40px'>
        <MainView />
      </SimpleGrid>
    </Container>
  </ChakraProvider>
);
