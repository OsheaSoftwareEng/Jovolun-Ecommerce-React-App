import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import MainView from './Components/MainView/MainView';
import { ChakraProvider, Container, SimpleGrid } from '@chakra-ui/react';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import ItemFilter from './Components/ItemFilter/ItemFilter';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <MainView />
    </BrowserRouter>
  </ChakraProvider>
);
