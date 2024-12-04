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
              <div>
                US National Team member since 2022.<br/>
                World Cup Team member 2022-23.<br/>
                US Junior National Team member 2023-24.
              </div>
            </div>
          </div>
          <div className='rss__imageCol'>
            <div className='rss__image content2'>
              <div>
                US Junior Vice Champion 2023. <br/>
                3x US Junior Medalist.
              </div>
            </div>
            <div className='rss__image twoThird content3'>
              <div>
                2x Olympic Trials Finalist.
              </div>
            </div>
          </div>
          <div className='rss__imageCol'>
            <div className='rss__image threeQua content4'>
              <div>
                World Junior Bronze Medalist 2023.
              </div>
            </div>
            <div className='rss__image content5'>
              <div>
                World Junior Championships Bronze Medal.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='rss__contentWrapper'>
        <h3>cusinier.</h3>
        <h4>chef in fine dining.</h4>
        <div className='rss__imageWrapper'>
          <div className='rss__imageCol'>
            <div className='rss__image threeQua content6'>
              <div>
                Multi-Michelin star resume, including stints at Smyth, Boka, J&#xF4;nt, and Ever.
              </div>
            </div>
            <div className='rss__image content7'>
              <div>
                Currently working on my popup, <a href="https://instagram.com/sisurestaurant">SISU</a>, a new Nordic take on local Utah ingredients.
              </div>
            </div>
          </div>
          <div className='rss__imageCol'>
            <div className='rss__image content8'>
              <div>
                Most recently Junior Sous Chef at Oquirrh in Salt Lake City.
              </div>
            </div>
          </div>
          <div className='rss__imageCol'>
            <div className='rss__image content9'>
              <div>
                Grilling gai lan, served with sunflower seed miso and mustards.
              </div>
            </div>
            <div className='rss__image content10'>
              <div>
                Duck with stone fruit and almonds.<br/>
                <p>Breast roasted on the crown with glazed cherries, preserved green almonds, and almond miso.<br/>
                Leg stewed with plums and lettuce<br/>
                Liver custard filled donut glazed with preserved apricot toffee.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content