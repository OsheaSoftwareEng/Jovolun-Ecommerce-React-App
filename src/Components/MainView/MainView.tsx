import * as React from 'react';
import { useEffect, useState } from 'react';
import Butter from 'buttercms';
import {
  Container,
  SimpleGrid,
  Box,
  AbsoluteCenter,
  Divider
} from '@chakra-ui/react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import ItemView from '../ItemsView/ItemsView';
import ItemFilter from '../ItemFilter/ItemFilter';
import ViewItemLogo from '../ViewItemLogo/ViewItemLogo';

//butter initalization for databse
const butter: any = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE as any);

function MainView() {
  //products from butter ecommerce database
  const [products, setProducts] = useState<any>([]);

  const [showItemFilter, setShowItemFilter] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const handleItemFilterClick = () => {
    setShowItemFilter(false);
    navigate('/');
  };
  useEffect(() => {
    // Reset state and show navigation bar when navigating to the main page
    if (location.pathname === '/') {
      setShowItemFilter(true);
    } else {
      setShowItemFilter(false);
    }
  }, [location.pathname]);

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
      <Container maxW='2x0'>
        <NavigationBar />
        {showItemFilter && <ItemFilter products={products} />}
        <ViewItemLogo products={products} />
        <SimpleGrid minChildWidth='300px' spacing='40px'>
          <Routes>
            <Route
              path='/'
              element={products.map((products: any) => (
                <ItemCard
                  products={products}
                  key={products.id}
                  onItemClick={handleItemFilterClick}
                />
              ))}
            />
            <Route
              path='/products/:id'
              element={<ItemView products={products} />}
            />
          </Routes>
        </SimpleGrid>
      </Container>
    </>
  );
}
export default MainView;
