import React from 'react'

import './footer.css';

const Footer = () => {
  
  return (
    <div class="rss__footer">
      <div class="rss__footer_links">
        <a href="https://instagram.com/ryansshane"><p>Instagram</p></a>
        <a href="https://strava.com/athletes/44531359"><p>Strava</p></a>
        <a href="https://linkedin.com/in/ryansshane"><p>LinkedIn</p></a>
        <a href="mailto:ryan@ryansshane.com"><p>Email</p></a></div>
        <p className='rss__copyright'>&copy; Copyright {new Date().getFullYear()} Ryan Shane</p>
    </div>
  )
}

export default Footer