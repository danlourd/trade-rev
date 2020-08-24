import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Photos from '../components/Photos';
import './Main.css';

function Main() {
  return (
    <React.Fragment>
      <Navbar className="navbarTradeRev fixed-top" expand="lg" variant="dark">
        <Navbar.Brand>TradeRev Coding Challenge</Navbar.Brand>
      </Navbar>
      <Photos />
    </React.Fragment>
  );
}

export default Main;
