import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import MainView from './Components/MainView/MainView';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ChakraProvider>
    <MainView/>
  </ChakraProvider>
);


