import React from 'react'

import './footer.css';

const Footer = () => {
  return (
    <div className='rss__footer'>
      <div className='rss__footer-footer'>
        <div className='rss__footer-footer_links'>
          <a href='https://instagram.com/ryansshane'><p>Instagram</p></a>
          <a href='https://www.strava.com/athletes/44531359'><p>Strava</p></a>
          <a href='mailto:ryan@ryansshane.com'><p>Email</p></a>
        </div>
        <div className='rss__footer-footer_copyright'><p>&copy; Copyright {new Date().getFullYear()} Ryan Shane LLC</p></div>
      </div>
    </div>
  )
}

export default Footer