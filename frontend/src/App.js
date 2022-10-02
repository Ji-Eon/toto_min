import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled, { createGlobalStyle } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import TopNavigation from './components/TopNavigation'
import Login from './components/Login'
import LeftBanner from './components/Banner/LeftBanner'
import RightBanner from './components/Banner/RightBanner'



import Footer from './components/Footer/Footer';
import ResponsiveLayout from './layout/ResponsiveLayout';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
  }
  a{
    text-decoration: none;
  }
  ul {
    list-style: none;;
  }
  
`;

const Container = styled.div`
  width:100%;
  height:100%;

`;

const App = () => {

  return (
    <BrowserRouter>
          <GlobalStyle />
          <Container>
            <div>
            {/* <TopNavigation />
            <LeftBanner/>
            <Login/>

            <RightBanner/> */}
            </div>
            
            <Routes>
              <Route path="/" element={<ResponsiveLayout />} />

            </Routes>
          </Container>
        </BrowserRouter>
  )
};

export default App;