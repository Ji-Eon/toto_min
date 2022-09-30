import React from 'react';
import './side.css';

const SideBanner = () => {
  return (
    <div className='side-banner'>
      <div className='left-banner'>
        <div>
          <a href='/'><img src='https://i.imgur.com/vLeyaAS.gif' alt='banner' /></a>
        </div>
        <div>
          <a href='/'><img src='https://i.imgur.com/vLeyaAS.gif' alt='banner' /></a>
        </div>
      </div>
      <div className='right-banner'>
        <div>
          <a href='/'><img src='https://i.imgur.com/vLeyaAS.gif' alt='banner' /></a>
        </div>
        <div>
          <a href='/'><img src='https://i.imgur.com/vLeyaAS.gif' alt='banner' /></a>
        </div>
      </div>
    </div>
  );
};

export default SideBanner;