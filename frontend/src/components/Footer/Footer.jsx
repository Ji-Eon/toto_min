import React from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const navigate = useNavigate();
  
  const onScrollUp = () => {
    window.scroll(0,0);
  };
  const onGoMenu = (board) => {
    navigate(`/${board}`);
  };

  return (
    <footer className="at-footer">
      <nav className="at-links">
        <div className="at-container">
          <div className="bottom_logo">
            <img src="https://www.totohot.net/img/main/bottom_logo.png" alt="먹튀검증,슈어맨,토토사이트" />
          </div>
          <div className="com_info">
            <ul className="info_ul">
              <li style={{paddingBottom: '15px'}}><img src="https://www.totohot.net/img/main/com_info.png" alt='footer-logo'/></li>
              <li><b>CEO:</b> Gabriel Víctor</li>
              <li><b>Corporate name:</b> Electraworks Malta, PLC.</li>
              <li><b>Address:</b> 46 ST CHRISTOPHER STREET, VLT 1464 Valletta, Malta</li>
            </ul>
          </div>
          <div className="ban_inqu">
            <ul className="info_ul">
              <li style={{paddingBottom: "20px"}}>
                <img src="https://www.totohot.net/img/main/ban_inq.png" alt='ban_inq-logo'/>
              </li>
              <li style={{paddingBottom: "25px"}}>
                <img src="https://www.totohot.net/img/main/telegram2.png" alt="토토사이트,슈어맨,먹튀검증" />
              </li>
              <li>토토사이트 광고 및 제휴문의 가능합니다.</li>
            </ul>
          </div>
          <ul className="pull-right">
            <li className="bottom_qna"><a href="https://www.totohot.net/qalist">문의하기</a></li>
            <li className="bottom_pnm"><a href="https://www.totohot.net/index.php?device=mobile">모바일버전</a></li>
          </ul>
          <div className="clearfix"></div>
        </div>
      </nav>
      <div className="at-infos">
        <div className="at-copyright">
          Copyright (C)
          <strong>토토핫  - 토토사이트 꽁머니 먹튀 검증 커뮤니티 안전한 메이저 놀이터  네임드 스포츠 프로토</strong>
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;