import * as React from 'react';
import { useEffect, useState } from 'react';
import Butter from 'buttercms';
import { Container, SimpleGrid } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import ItemView from '../ItemsView/ItemsView';

//butter initalization for databse
const butter: any = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE as string);

function MainView() {
  //products from butter ecommerce database
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await butter.content.retrieve(['jovos'], {
        order: 'name'
      });
      const { data } = await res.data;
      const allProducts = data.jovos;
      setProducts(allProducts);
    }

    fetchData();
  }, []);

  return (
    <>
      <Container marginLeft={10} maxW='container.xl'>
        <NavigationBar />
      </Container>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={products.map((products) => (
              <div style={{ display: 'inline-block' }}>
                <Container marginLeft={10} maxW='container.md'>
                  <SimpleGrid minChildWidth='300px' spacing='40px'>
                    <ItemCard products={products} />
                  </SimpleGrid>
                </Container>
              </div>
            ))}
          />
          <Route
            path='/products/:id'
            element={<ItemView products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default MainView;
