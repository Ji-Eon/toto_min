import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  width:20%;
  height:auto;
  background:#FFFFFF;
  justify-content: space-between;
  text-align:right;
  margin-right:50px;;
  margin-top:50px;

`;
const Logo = styled.img `
  width: 160px;
  height:400px;

  cursor: pointer;
`;

const LeftBanner = (props) => {

    return (
        <Container>
            <div >
                <Logo src='https://i.imgur.com/vLeyaAS.gif' alt='Bodeum-logo' />
            </div>
            <div>
                <Logo src='https://imgur.com/ursBX9H.gif' alt='Bodeum-logo' />
            </div>

        </Container>
    );
};

export default LeftBanner;