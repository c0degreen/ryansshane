import React from 'react'

import LogoLink from '../../components/logolink/LogoLink';
import './partners.css';

const Partners = () => {
  return (
    <div className='rss__partners' id='partners'>
      <div className='rss__partners-rect'>
        <h2 data-title='Partners'>Partners</h2>
        <div className='rss__partners-rect_logos'>
          <LogoLink name='usspeedskating' href='https://usspeedskating.org' />
          <LogoLink name='hyland' href='https://hyland.com' />
          <LogoLink name='toyota' href='https://toyota.com' />
          <LogoLink name='under-armour' href='https://under-armour.com' />
        </div>
      </div>
      <div className='rss__partners-tri'></div>
    </div>
  )
}

export default Partners