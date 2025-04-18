import React from 'react'
import Instagram from '../instagram/Instagram';

import './footer.css';

const Footer = () => {
  
  return (
    <div className='rss__footer'>
      <div className='rss__contentWrapper'>
        <div>
          <h3>see more about me.</h3>
        </div>
        <div className='rss__imageWrapper'>
          <div className='rss__imageCol'>
            <Instagram />
          </div>
          <div className='rss__imageCol'>
            <a className='rss__image footer2'>
              <div>
                strava
              </div>
            </a>
            <a className='rss__image twoThird footer3'>
              <div>
                linbkedin
              </div>
            </a>
          </div>
          <div className='rss__imageCol'>
            <a className='rss__image threeQua footer4'>
              <div>
                email
              </div>
            </a>
            <a className='rss__image footer5'>
              <div>
                resume
              </div>
            </a>
          </div>
        </div>
        <h5>&copy; Copyright {new Date().getFullYear()} Ryan Shane LLC</h5>
      </div>
    </div>
  )
}

export default Footer