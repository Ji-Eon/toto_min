import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled, { createGlobalStyle } from 'styled-components';

import TopNavigation from './components/TopNavigation'
import Home from './Router/Home';
import Footer from './components/Footer/Footer';
import SideBanner from './components/SideBanner/SideBanner';
import Login from './components/Login';

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
  display: grid;
  height: calc(100vh - 335px);
  grid-template-areas: 
  'header'
  'main'
  'footer'
  ;
  /* grid-template-rows: 88px 1fr 220px; */
`;
const MainContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 1200px;
  margin: 10px auto;
  grid-area: 'main';
`;

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container className='app-container'>
        <TopNavigation />
        <SideBanner />
        <MainContainer className='main-cotainer'>
          <Login />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainContainer>
        <Footer />
      </Container>
    </BrowserRouter>
  )
};

export default App;