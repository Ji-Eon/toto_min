import React from 'react';

import { useMediaQuery } from 'react-responsive';

import DesktopLayout from './pc/desktop';
import MobileLayout from './mobile/mobile';



const ResponsiveLayout = ({ children }) => {

  const isPc = useMediaQuery({
    query : "(min-width:1024px)"
  });
  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });
  return (
    <div>
    {isPc && <DesktopLayout/>}
    {isTablet && <MobileLayout/>}
    {/* {isMobile && <p>HI Mobile</p>} */}
    </div>
  );
};

export default ResponsiveLayout;