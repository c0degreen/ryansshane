import React from 'react'

import './footer.css';
import './partners.css';

function Partner(props) {
  return (
    <div className='partner'>
      <a href={props.href}><div className={`partner-logo ${props.name}`}></div></a>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='rss__footer'>
      <div className='rss__footer-partners black' id='partners'>
        <h1 data-title='Partners'>Partners</h1>
        <div className='rss__footer-partners_logos'>
          <Partner name='usspeedskating' href='https://usspeedskating.org' />
        </div>
        <p>Want to become a partner? Click <a href='mailto:partner@ryansshane.com'>here</a>.</p>
      </div>
      <div className='rss__footer-footer'>
        <div className='rss__footer-footer_links'>
          <a href='https://instagram.com/ryansshane'><p>Instagram</p></a>
          <a href='https://www.strava.com/athletes/44531359'><p>Strava</p></a>
          <a href='https://youtube.com/'><p>YouTube</p></a>
          <a href='mailto:ryan@ryansshane.com'><p>Email</p></a>
        </div>
        <div className='rss__footer-footer_copyright'><p>&copy; Copyright {new Date().getFullYear()} Ryan Shane</p></div>
      </div>
    </div>
  )
}

export default Footer