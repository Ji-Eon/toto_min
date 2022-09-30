import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  width:5%;
  height:100%;
  display:display;
  margin-top:25px;
  justify-content: space-between;
  float:left;
`;
const Logo = styled.img `
  width: 160px;
  height:400px;
  margin-top:30px;
  margin-left:50px;
  margin;
  cursor: pointer;
`;

const LeftBanner = (props) => {

    return (
        <Container>
            <div>
                <Logo src='https://i.imgur.com/vLeyaAS.gif' alt='Bodeum-logo' />
            </div>
            <div>
                <Logo src='https://imgur.com/ursBX9H.gif' alt='Bodeum-logo' />
            </div>

        </Container>
    );
};

export default LeftBanner;