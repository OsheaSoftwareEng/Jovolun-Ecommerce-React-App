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
  const [products, setProducts] = useState<any>([]);

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
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={products.map((products: any ) => (
                    <ItemCard products={products} key={products.id} />
            ))}
          />
          <Route
            path='/products/:id'
            // Component={() => (
            //   <ItemView products={products}/>
            // )}

            element={<ItemView products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default MainView;
