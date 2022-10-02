import React from 'react';
import styled from 'styled-components';
import {Divider, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import {Add} from '@mui/icons-material';

const Container = styled.div `
  width:100%;
  height:50%;
  display:flex;
  margin-top:25px;
  justify-content: space-between;
  float:center;
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
  display:display;


`;
const CenterContainer = styled.div `
  width:100%;
  height:auto;
  margin-top:25px;
  background:#FFFFFF;
  justify-content: space-between;
  text-align:center;
  margin-right:25px;
  display:display;


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
const LoginBox = styled.div `
  display:flex;
  border: 1px solid gray;
  width:100%;
  height:160px;
  grid-template-columns: 1fr 1fr 1fr;
`;
const SubContainer = styled.div `
  width:100%;
  height:100%;
`;
const TextFiled = styled(TextField)`
  width:100%;
  
`;
const LoginBtn = styled(Button)`
  width:20%;
  height:100%;
  && {
    background-color: #e20000;
    background:#e20000;
    color:#FFFFFF;
    margin-left:5px;
  }
`;
const RegisterBox = styled(Button)`
  width:90%;
  background:#989292;
  && {
    background-color: #FFFFFFF;
    color:#f270de;
    margin-left:15px;
    margin-top:5px;
  }
`;

const LeftLogo = styled.img `
  width: 350px;
  height:65px;
  margin-left:20px;
  margin-top:5px;
  cursor: pointer;
`;
const MainBannerZone = styled.div `
  border: 1px solid #ddd;
  height: 300px;
`;
const MiddleBoardContainer = styled.div `
  display: flex;
  gap: 5px;
  flex-direction: row;
  justify-content: space-between;
`;
const MiddleBoard = styled.div `
  border: 1px solid #cdcdcd;
  height: 217px;
  margin-top: 10px;
  width: 210px;
`;
const MiddleBoardTitle = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: bold;
  color: #e00400;
  align-items: center;
  border-bottom: 3px solid #e00400;
`;
const MiddleBoardContent = styled.div `
  padding: 2px 10px;
  display: flex;
  justify-content: space-between;
  span {
    color: gray;
  }
`;
const TopBoardContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3px;
  margin: 10px 0;
`;
const BoardItem = styled.div `
  border: 2px solid #ddd;
  color: gray;
  padding: 5px;
  border-radius: 4px;
  height: 85px;
  &:hover {
    border-color: #e00400;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BoardItemTitle = styled.div `
  color: gray;
  font-weight: bolder;
  &:hover {
    color: #e00400;
  }
`;
const CenterBanner = (props) => {

    return (
        <Container>

            <> <LeftContainer>
                <LoginBox>
                    <SubContainer>
                        <TextFiled placeholder='아이디' type="text" name='email'/>
                        <TextFiled
                            placeholder='비밀번호를'
                            type='password'
                            autoComplete='false'
                            name='password'/>
                        <RegisterBox>회원가입</RegisterBox>

                    </SubContainer>
                    <LoginBtn>로그인</LoginBtn>

                </LoginBox>
                <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo'/>
                <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo'/>
                <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo'/>
                <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo'/>
                <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo'/>
                <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo'/>
                <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo'/>
                <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo'/>
                <LeftLogo src='https://i.imgur.com/PtQwQAM.gif' alt='Bodeum-logo'/>

            </LeftContainer>
            <CenterContainer>
                <div>
                    <img
                        alt='main-banner'
                        src='https://www.totohot.net/img/main/top_bann1.png'
                        style={{
                            height: '110px',
                            width: 'auto'
                        }}/>
                </div>
                <TopBoardContainer>
                    <BoardItem>
                        <BoardItemTitle>사진게시판</BoardItemTitle>
                    </BoardItem>
                    <BoardItem>
                        <BoardItemTitle>출석체크</BoardItemTitle>
                    </BoardItem>
                    <BoardItem>
                        <BoardItemTitle>구인구직</BoardItemTitle>
                    </BoardItem>
                    <BoardItem>
                        <BoardItemTitle>업체홍보</BoardItemTitle>
                    </BoardItem>
                </TopBoardContainer>
                <div>
                    <img
                        alt='main-middle-banner'
                        src='https://www.totohot.net/img/main/main_head1.png'/>
                </div>
                <MainBannerZone className='main-banner-zone'>
                    <img
                        alt='banner'
                        src='https://i.imgur.com/J8JXgIY.gif'
                        style={{
                            marginRight: '5px'
                        }}/>
                    <img alt='banner' src='https://i.imgur.com/cy1Cw7v.gif'/>
                    <div
                        style={{
                            height: '100px',
                            textAlign: 'center',
                            margin: '20px 0',
                            fontSize: '20px',
                            color: 'gray'
                        }}>Banner Zone</div>
                </MainBannerZone>
                <MiddleBoardContainer>
                    <MiddleBoard>
                        <MiddleBoardTitle>
                            <div>자유게시판</div>
                            <Add/>
                        </MiddleBoardTitle>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                    </MiddleBoard>
                    <MiddleBoard>
                        <MiddleBoardTitle>
                            <div>자유게시판</div>
                            <Add/>
                        </MiddleBoardTitle>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                    </MiddleBoard>
                    <MiddleBoard>
                        <MiddleBoardTitle>
                            <div>자유게시판</div>
                            <Add/>
                        </MiddleBoardTitle>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                    </MiddleBoard>
                    <MiddleBoard>
                        <MiddleBoardTitle>
                            <div>자유게시판</div>
                            <Add/>
                        </MiddleBoardTitle>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                        <MiddleBoardContent>
                            <span
                                style={{
                                    backgroundColor: '#e00400',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '0 2px'
                                }}>N</span>
                            <span
                                style={{
                                    width: '75px'
                                }}>hihi</span>
                            <span>09.29</span>
                        </MiddleBoardContent>
                    </MiddleBoard>
                </MiddleBoardContainer>
                <div>
                    <img
                        alt='main-image01'
                        src='/main/main01.png'
                        style={{
                            width: '870px',
                            height: 'auto'
                        }}/>
                    <img
                        alt='main-image02'
                        src='/main/main02.png'
                        style={{
                            width: '870px',
                            height: 'auto'
                        }}/>
                    <img
                        alt='main-image03'
                        src='/main/main03.png'
                        style={{
                            width: '870px',
                            height: 'auto'
                        }}/>
                </div>
            </CenterContainer>

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
          */
        }

    </Container>
    );
};

export default CenterBanner;