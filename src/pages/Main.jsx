import React, { useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Photos from '../components/Photos';
import './Main.css';

const SMALL_SCREEN = 465; 

function Main() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < SMALL_SCREEN);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < SMALL_SCREEN);
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  });

  return (
    <div className="main">
      <Navbar className="navbarTradeRev fixed-top" expand="lg" variant="dark">
        <Navbar.Brand>TradeRev Coding Challenge</Navbar.Brand>
      </Navbar>
      <Photos isSmallScreen={isSmallScreen}/>
    </div>
  );
}

export default Main;
