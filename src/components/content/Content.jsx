import React from 'react'

import './content.css';

const Content = () => {
  return (
    <div className='rss__content'>
      <div className='rss__contentWrapper'>
        <div>
          <h3>speedskater.</h3>
          <h4>us national team.</h4>
        </div>
        <div className='rss__imageWrapper'>
          <div className='rss__imageCol'>
            <div className='rss__image'></div>
            <div className='rss__image'></div>
          </div>
          <div className='rss__imageCol'>
            <div className='rss__image'></div>
            <div className='rss__image image3'></div>
          </div>
          <div className='rss__imageCol'>
            <div className='rss__image'></div>
          </div>
        </div>
      </div>
      <div className='rss__contentWrapper'>
        <h3>cusinier.</h3>
        <h4>chef de partie in fine dining.</h4>
        <p>current restaurant coming soon...</p>
        <p>formerly junior sous chef at Oquirrh.</p>
        <p>formerly chef de partie at Cucina Wine Bar.</p>
        <p>trained in Michelin-starred kitchens, including Smyth, Boka, Jont and Ever.</p>
      </div>
    </div>
  )
}

export default Content