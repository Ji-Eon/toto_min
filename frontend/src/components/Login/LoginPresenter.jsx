import React from 'react';
import styled from 'styled-components';
import { Divider, TextField } from '@mui/material';
import Button from '@mui/material/Button';

const Container = styled.div `
  width:20%;
  height:1200px;
  display:display;
  margin-left:150px;
  margin-top:25px;
  justify-content: space-between;
  float:left;
`;
const LoginBox = styled.div`
  margin-left:20px;
  display:flex;
  border: 1px solid gray;
  width:350px;
  height:160px;
  grid-template-columns: 1fr 1fr 1fr;

`;
const SubContainer = styled.div`
  width:100%;
  height:100%;
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
const RegisterBox =  styled(Button)`
  width:90%;
  background:#989292;
  && {
    background-color: #FFFFFFF;
    color:#f270de;
    margin-left:15px;
    margin-top:5px;

  }

`;
const TextFiled = styled(TextField)`
  width:100%;
  
`;
const BannerContainer = styled.div`
  width:50%;
  height:100%;
  justify-content: space-between;
  float:center;
  margin-top:25px;
`;
const Logo = styled.img `
  width: 350px;
  height:65px;
  margin-left:20px;
  margin;
  cursor: pointer;
`;

const LoginPresenter = (props) => {

    return (
        <Container>
          <LoginBox>
          <SubContainer>
          <TextFiled placeholder='아이디' type="text" name='email' />
          <TextFiled placeholder='비밀번호를' type='password' autoComplete='false' name='password'/> 
          <RegisterBox>회원가입</RegisterBox>

          </SubContainer>
          <LoginBtn>로그인</LoginBtn>

          </LoginBox>



            <BannerContainer>
         
            </BannerContainer>

            
           

        </Container>
    );
};

export default LoginPresenter;