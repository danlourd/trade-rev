import React, { useEffect } from 'react';

import UnsplashApi from '../api/unsplashApi';
import './Main.css';

function Main() {
  useEffect(() => {
    UnsplashApi.getPhotos();
  })

  return (
    <div className="main">
      <h1 className="mainTitle">TradeRev Coding Challenge</h1>
    </div>
  );
}

export default Main;
