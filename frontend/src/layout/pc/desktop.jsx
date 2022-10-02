import React from 'react';
import {useLocation} from 'react-router-dom';

import styled, { createGlobalStyle } from 'styled-components';


// Component
import TopNavigation from '../../components/TopNavigation'
import LeftBanner from '../../components/Banner/LeftBanner';
import RightBanner  from '../../components/Banner/RightBanner';
import CenterBanner  from '../../components/Banner/CenterBanner';

import Footer  from '../../components/Footer/Footer';

const Container = styled.div `
  width:100%;
  height:100%;
  background:#FFFFFF;
`;


const DesktopLayout = (props) => {
    const location = useLocation();
    return (
        <Container
            style={{
                width: '100%',
                height: '100%',
                background:'#FFFFFF',
                display: 'grid',
            }}>
            <div>
                <TopNavigation/>

                <div
                style={{
                    marginTop:'500',
                    width: '100%',
                    height: '100%',
                    background:'#FFFFFF',
                    display:'flex',
                }}>

                    

                    <LeftBanner />
                    <div 
                    style={{
                        width: '80%',
                        height: '100%',
                        textAlign:'center',
                        display: 'grid',
                     
                    }}>
                        <CenterBanner/>
                     
                        </div>

                    <RightBanner />
                </div>

                <Footer/>
               

            </div>
           
        </Container>
    );
};

export default DesktopLayout;