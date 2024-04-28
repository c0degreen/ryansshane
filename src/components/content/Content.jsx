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
            <div className='rss__image content1'>
              <div>description</div>
            </div>
          </div>
          <div className='rss__imageCol'>
            <div className='rss__image content2'>
              <div>description</div>
            </div>
            <div className='rss__image threeQua content3'>
              <div>description</div>
            </div>
          </div>
          <div className='rss__imageCol'>
            <div className='rss__image content4'>
              <div>description</div>
            </div>
            <div className='rss__image content5'>
              <div>description</div>
            </div>
          </div>
        </div>
      </div>
      <div className='rss__contentWrapper'>
        <h3>cusinier.</h3>
        <h4>chef de partie in fine dining.</h4>
        <div className='rss__imageWrapper'>
          <div className='rss__imageCol'>
            <div className='rss__image content6'>
              <div>description</div>
            </div>
            <div className='rss__image content7'>
              <div>description</div>
            </div>
          </div>
          <div className='rss__imageCol'>
            <div className='rss__image content8'>
              <div>description</div>
            </div>
          </div>
          <div className='rss__imageCol'>
            <div className='rss__image content9'>
              <div>description</div>
            </div>
            <div className='rss__image content10'>
              <div>description</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content