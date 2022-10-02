import React from 'react';
import { Avatar, Chip } from '@mui/material';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';



const TopHead = styled.div`
  width:100%;
  height:50px;
  background:#EEEEEE;
`;

const TopWordContainer = styled.div`
  width:100%;
  height:40px;
  display:flex;
  justify-content: space-between;
`;

const Container = styled.div`
  
  grid-area: header;
  z-index: 1000;
  display: grid;
  grid-template-rows: 100px 48px;
  `;

const TopNavContainer = styled.div`
  margin-left:10%;
  display: flex;
3  float:center;
`;
const Logo = styled.img`
  width: 280px;
  margin-left:350px;
  height:64px;
  margin;
  cursor: pointer;
`;
const MenuConatiner = styled.div`
  width: 280px;
  height:64px;
  margin-left:50px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  text-align: center;
  `;
const Menu = styled.li`
  width:350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: #6c6a6a;
  font-weight: bolder;
  background-color: #FFFFFF;
  &:hover {
    color: #dc0000;
  }
`; 


const TopNavigationPresenter = (props) => {
  const { 
    onLogoClick, 
  } = props;

  const Today_date = ()=>{
    let now = new Date();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    const week = ['일','월','화','수','목','금','토'];

    let dayofWeek = week[now.getDay()];

    let today_date = todayMonth + '월'+todayDate+'일' +'('+dayofWeek+')'
   
    return <span style={{fontSize:'large', marginBottom: '10px' ,color:'#000000', marginLeft:'15px'}}>{today_date}</span>

  }

  return (
    <Container>
      <TopHead>
      <TopWordContainer>
     
      <div style={{marginLeft:'10%',marginTop:'10.5px'}}>
      <span style={{fontSize:'large', fontWeight: 'bolder', marginBottom: '10px' ,color:'#E60000'}}>즐겨찾기</span>
      <span style={{fontSize:'large', fontWeight: 'bolder', marginBottom: '10px' ,color:'#000000', marginLeft:'5px'}}>추가</span>
      {
        Today_date()
      }
      
      </div>     
      <div style={{marginRight:'10%',marginTop:'10.5px'}}>
      <span style={{fontSize:'large', fontWeight: 'bolder', marginBottom: '10px' ,color:'#E60000'}}>토토핫</span>
      <span style={{fontSize:'large', fontWeight: 'bolder', marginBottom: '10px' ,color:'#000000', marginLeft:'5px'}}>이벤트</span>
      
        </div>       
   
   
      </TopWordContainer>

      
      </TopHead>
      <TopNavContainer>
        <div>
            <Logo src='/head_logo.png' alt='Bodeum-logo' onClick={onLogoClick}/>
        </div>      
        <div>
        <MenuConatiner>

          <Menu >사진게시판</Menu>
          <Menu >출석체크</Menu>
          <Menu >구인구직</Menu>
          <Menu >업체홍보</Menu>

        </MenuConatiner>    

   
      </div>      

      </TopNavContainer>
      <>
      <Divider style={{fontSize:'large', height:'5px', marginTop: '35px' ,background:'#e70909'}} variant="middle" />
      </>


               
       
    </Container>

  );
};

export default TopNavigationPresenter;