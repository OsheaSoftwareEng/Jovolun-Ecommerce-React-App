import * as React from 'react';
import { useEffect, useState } from 'react';
import Butter from 'buttercms';
import { Container, SimpleGrid } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import ItemView from '../ItemsView/ItemsView';
import { Link } from 'react-router-dom';

//butter initalization for databse
const butter: any = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE as any);

function MainView() {
  //products from butter ecommerce database
  const [products, setProducts] = useState<string[] | number[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await butter.content.retrieve(['jovos'], {
        order: 'id'
      });
      const { data } = await res.data;
      console.log(data);
      const allProducts = data.jovos;
      setProducts(allProducts);
      console.log(allProducts);
     
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
            element={products.map((products: any ) => (
              <div style={{ display: 'inline-block' }} key={products.id}>
                <Container
                  marginLeft={10}
                  maxW='container.md'
                  key={products.id}
                >
                  <SimpleGrid
                    minChildWidth='300px'
                    spacing='40px'
                    key={products.id}
                  >
                    <ItemCard products={products} key={products.id} />
                  </SimpleGrid>
                </Container>
              </div>
            ))}
          />
          <Route
            path='/products/:id'
            // Component={(products: any) => (
            //   <ItemView products={products} findProduct={findProduct} />
            // )}

            element={<ItemView products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default MainView;
