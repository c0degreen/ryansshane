import React from 'react'

import './footer.css';

const Footer = () => {
  return (
    <div className='rss__footer'>
      <div className='rss__footer-columnContainer'>
        <div className='rss__footer-columnContainer_column'>
          <p className='rss__footer-columnContainer_column_header'>Links</p>
          <p><a href='https://account.venmo.com/u/ryansshane'>Donate</a></p>
          <p><a href='./'>LinkInBio</a></p>
          <p><a href='./'>&nbsp;</a></p>
        </div>
        <div className='rss__footer-columnContainer_column'>
          <p className='rss__footer-columnContainer_column_header'>Social Media</p>
          <p><a href='./'>Instagram</a></p>
          <p><a href='./'>YouTube</a></p>
          <p><a href='./'>Strava</a></p>
        </div>
        <div className='rss__footer-columnContainer_column'>
          <p className='rss__footer-columnContainer_column_header'>Contact</p>
          <p><a href='./'>contact@ryansshane.com</a></p>
          <p><a href='./'>&nbsp;</a></p>
          <p><a href='./'>&nbsp;</a></p>
        </div>
      </div>
      <div className='rss__footer-copyright'><p>&copy; Copyright {new Date().getFullYear()} Ryan Shane</p></div>
    </div>
  )
}

export default Footer