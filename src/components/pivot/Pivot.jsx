import React, { useState, useEffect } from "react";

import './pivot.css';

function Pivot () {
  const [background, setBackground] = useState('rss__coverUp image');

  const listenScrollEvent = event => {
    if (window.scrollY <  10) {
      return setBackground('rss__coverUp image');
    } else if (window.scrollY > 10) {
      return setBackground('rss__coverUp color');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div>
      <div className={background}>
        <div className='rss__pivot'></div>
      </div>
      <div className='rss__titleCard'>
        <h2>R</h2><h1>yan</h1>
      </div>
    </div>
  );
}

export default Pivot