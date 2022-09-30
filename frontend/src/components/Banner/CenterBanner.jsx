import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  width:100%;
  height:100%;
  display:flex;
  margin-top:25px;
  justify-content: space-between;
  float:left;
  margin-top:25px;

`;

const LeftContainer = styled.div `
  width:45%;
  height:auto;
  margin-top:25px;
  background:#FFFFFF;
  justify-content: space-between;
  text-align:center;
  margin-right:25px;
  background:#000000;
  display:display3;


`;

const ListContainer = styled.div `
    width:120%;
    display:grid
    gridTemplateRows: 1fr;
    gridTemplateColumns: 1fr,1fr,1fr,1fr;
    backgroundColor: '#000000';

`;

const DivTest = styled.div `
    width:120%;
   

`;
const TopLogo = styled.img `
  width: 115%;
  height:110px;
  margin;
  cursor: pointer;
`;
const TestLogo = styled.img `
  width: 32%;
  margin-left:5;
  margin-top:10px;
  height:110px;
  float:center;
  cursor: pointer;
`;

const CenterLogo = styled.img `
  width: 115%;
  margin-left:5;
  margin-top:10px;
  height:50px;
  float:center;
  cursor: pointer;
`;

const LeftListLogo = styled.img `
  width: 45%;
  margin-top:10px;
  height:90px;
  float:left;
`;
const RightListLogo = styled.img `
  width: 45%;
  margin-top:10px;
  height:90px;
  margin-left:5%;
`;

const LeftLogo = styled.img `
  width: 350px;
  height:65px;
  margin-left:20px;
  margin;
  cursor: pointer;
`;
const CenterBanner = (props) => {

    return (
        <Container>
            <>
            <LeftContainer>
            <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo' />
            <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo' />
            <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo' />
            <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo' />
            <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo' />
            <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo' />
            <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo' />
            <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo' />
            <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo' />


            </LeftContainer>
            <LeftContainer/>
            <LeftContainer/>

            </>
           



            {/* <div>
                <TopLogo
                    src='https://www.totohot.net/img/main/top_bann1.png'
                    alt='Bodeum-logo'/>
            </div>
            <ListContainer>
                <TestLogo
                    src='https://www.totohot.net/img/main/main_1_on.png'
                    alt='Bodeum-logo'/>
                <TestLogo
                    src='https://www.totohot.net/img/main/main_2_on.png'
                    alt='Bodeum-logo'/>
                <TestLogo
                    src='https://www.totohot.net/img/main/main_3_on.png'
                    alt='Bodeum-logo'/>
                <TestLogo
                    src='https://www.totohot.net/img/main/main_4_on.png'
                    alt='Bodeum-logo'/>
                <TestLogo
                    src='https://www.totohot.net/img/main/main_5_on.png'
                    alt='Bodeum-logo'/>
                <TestLogo
                    src='https://www.totohot.net/img/main/main_6_on.png'
                    alt='Bodeum-logo'/>

            </ListContainer>

            <div>
                <CenterLogo
                    src='https://www.totohot.net/img/main/main_head1.png'
                    alt='Bodeum-logo'/>
            </div>

            <DivTest>
                <LeftListLogo
                    src='https://i.imgur.com/t9tk6ql.gif'
                    alt='Bodeum-logo'/>
                <RightListLogo

                    src='https://i.imgur.com/t9tk6ql.gif'
                    alt='Bodeum-logo'/>
                     <LeftListLogo
                    src='https://i.imgur.com/t9tk6ql.gif'
                    alt='Bodeum-logo'/>
                <RightListLogo

                    src='https://i.imgur.com/t9tk6ql.gif'
                    alt='Bodeum-logo'/>
                     <LeftListLogo
                    src='https://i.imgur.com/t9tk6ql.gif'
                    alt='Bodeum-logo'/>
                <RightListLogo

                    src='https://i.imgur.com/t9tk6ql.gif'
                    alt='Bodeum-logo'/>
                     <LeftListLogo
                    src='https://i.imgur.com/t9tk6ql.gif'
                    alt='Bodeum-logo'/>
                <RightListLogo

                    src='https://i.imgur.com/t9tk6ql.gif'
                    alt='Bodeum-logo'/>
                     <LeftListLogo
                    src='https://i.imgur.com/t9tk6ql.gif'
                    alt='Bodeum-logo'/>
                <RightListLogo

                    src='https://i.imgur.com/t9tk6ql.gif'
                    alt='Bodeum-logo'/>
            </DivTest>
          */}

        </Container>
    );
};

export default CenterBanner;