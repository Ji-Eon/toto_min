import React from 'react';
import './top-menu.css'

const TopNavigationPresenter = () => {
  return (
		<nav className="at-menu">
			<div className='pc-menu'>
				<div className='logo-container'>
					<a href='https://www.totohot.net/'>
						<img alt='menu-logo' src='https://www.totohot.net/img/main/head_logo.png'/>
					</a>
				</div>
				<div className='menu-wrap'>
					<div className='menu-item'>사진게시판 <span>|</span></div>
					<div className='menu-item'>출석체크 <span>|</span></div>
					<div className='menu-item'>구인구직 <span>|</span></div>
					<div className='menu-item'>업체홍보</div>
				</div>
			</div>
		</nav>
  );
};

export default TopNavigationPresenter;