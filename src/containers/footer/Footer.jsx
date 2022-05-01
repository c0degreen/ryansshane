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
      </div>
      <div className='rss__footer-footer'>
        <div className='rss__footer-footer_links'>
          <p><a>Instagram</a></p>
          <p><a>Strava</a></p>
          <p><a>YouTube</a></p>
          <p><a>Email</a></p>
        </div>
        <div className='rss__footer-footer_copyright'><p>&copy; Copyright {new Date().getFullYear()} Ryan Shane</p></div>
      </div>
    </div>
  )
}

export default Footer