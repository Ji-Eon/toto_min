import { Add } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px auto;
  min-height: 600px;
`;
const TopBoardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3px;
  margin: 10px 0;
`;
const BoardItem = styled.div`
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
const BoardItemTitle = styled.div`
  color: gray;
  font-weight: bolder;
  &:hover {
    color: #e00400;
  }
`;
const MainBannerZone = styled.div`
  border: 1px solid #ddd;
  height: 300px;
`;
const MiddleBoardContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row;
  justify-content: space-between;
`;
const MiddleBoard = styled.div`
  border: 1px solid #cdcdcd;
  height: 217px;
  margin-top: 10px;
  width: 210px;
`;
const MiddleBoardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: bold;
  color: #e00400;
  align-items: center;
  border-bottom: 3px solid #e00400;
`;
const MiddleBoardContent = styled.div`
  padding: 2px 10px;
  display: flex;
  justify-content: space-between;
  span {
    color: gray;
  }
`;

const HomePresenter = () => {
  return (

    <Container>
      <div>
        <img alt='main-banner' src='https://www.totohot.net/img/main/top_bann1.png' style={{height:'110px', width: 'auto'}}/>
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
        <img alt='main-middle-banner' src='https://www.totohot.net/img/main/main_head1.png'/>
      </div>
      <MainBannerZone className='main-banner-zone'>
        <img alt='banner' src='https://i.imgur.com/J8JXgIY.gif' style={{marginRight: '5px'}}/>
        <img alt='banner' src='https://i.imgur.com/cy1Cw7v.gif' />
        <div style={{height:'100px', textAlign:'center', margin:'20px 0', fontSize:'20px', color:'gray'}}>Banner Zone</div>
      </MainBannerZone>
      <MiddleBoardContainer>
        <MiddleBoard>
          <MiddleBoardTitle>
            <div>자유게시판</div>
            <Add />
          </MiddleBoardTitle>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
        </MiddleBoard>
        <MiddleBoard>
          <MiddleBoardTitle>
            <div>자유게시판</div>
            <Add />
          </MiddleBoardTitle>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
        </MiddleBoard>
        <MiddleBoard>
          <MiddleBoardTitle>
            <div>자유게시판</div>
            <Add />
          </MiddleBoardTitle>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
        </MiddleBoard>
        <MiddleBoard>
          <MiddleBoardTitle>
            <div>자유게시판</div>
            <Add />
          </MiddleBoardTitle>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
          <MiddleBoardContent>
            <span style={{backgroundColor:'#e00400', color:'white', fontWeight:'bold', padding:'0 2px'}}>N</span>
            <span style={{width:'75px'}}>hihi</span>
            <span>09.29</span>
          </MiddleBoardContent>
        </MiddleBoard>
      </MiddleBoardContainer>
      <div>
        <img alt='main-image01' src='/main/main01.png' style={{width: '870px', height:'auto'}} />
        <img alt='main-image02' src='/main/main02.png' style={{width: '870px', height:'auto'}} />
        <img alt='main-image03' src='/main/main03.png' style={{width: '870px', height:'auto'}} />
      </div>
    </Container>
  );
};

export default HomePresenter;