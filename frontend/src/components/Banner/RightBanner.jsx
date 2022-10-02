import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  width:20%;
  height:auto;
  background:#FFFFFF;
  justify-content: space-between;
  text-align:left;
  margin-left:50px;;
  margin-top:50px;
`;
const Logo = styled.img `
  width: 160px;
  height: 400px;
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