import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  width:15%;
  height:100%;
  display:display;
  margin-top:25px;
  float:right;
`;
const Logo = styled.img `
  width: 160px;
  height: 400px;
  margin-top:30px;
  cursor: pointer;
`;

const RightBanner = (props) => {

    return (
        <Container>
            <div>
                <Logo src='https://i.imgur.com/docnXy4.png' alt='Bodeum-logo' />
            </div>
            <div>
                <Logo src='https://imgur.com/ddKjEfP.png' alt='Bodeum-logo' />
            </div>

        </Container>
    );
};

export default RightBanner;