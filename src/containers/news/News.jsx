import React from 'react'

import Article from '../../components/article/Article';
import './news.css';

import alt_photo from '../../alt_photo.png';

const News = () => {
  return (
    <div className='rss__news padding' id='news'>
      <h1><b className='serif' data-title='Ryan Shane'>Ryan Shane</b> in the news</h1>
      <div className='rss__news-container'>
        <div className='groupA'>
        <Article  href='https://www.youtube.com/watch?v=9_HNyKEkiGY'
                  src='https://i.ytimg.com/vi/9_HNyKEkiGY/hq720.jpg' 
                  organization='WKYC Olympic Zone'
                  date='February 9, 2022'
                  title='Ryan Shane is a Power of Inspiration' 
                  content='On and off the ice, Shaker Heights senior Ryan Shane is a champion! Since the age of ten, Ryan has dedicated his life to making the U.S. Olympic Speedskating Team! The Northeast Ohio native moved out to Salt Lake City to train at the Utah Olympic Oval. Training thirty hours a week while taking classes virtually, the road is grueling with sacrifices made to pursue his dream. Thank you Ryan for being a Power of Inspiration!' />
        </div>
        <div className='groupB'>
          <Article  href='https://www.cleveland.com/community/2021/11/shaker-speedskater-ryan-shane-on-short-track-to-winter-olympic-bid-with-trials-awaiting.html'
                    src='https://www.cleveland.com/resizer/0IAewdcu5zLMvc4GWkB6A9SeoUY=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/EU7KJE56GJCYNPB72CMMGMQRPA.jpeg' 
                    organization='Cleveland.com'
                    date='November 22, 2021'
                    title='Shaker Heights speed skater Ryan Shane on short track to Winter Olympic bid' 
                    content='With the 2022 Winter Olympics on the horizon, local short track speed skater Ryan Shane now finds himself one step away from a trip to Beijing.' />
          <Article  href='https://www.clevelandjewishnews.com/news/sports/shaker-heights-senior-qualifies-for-us-olympic-trials/article_4aa382a8-2d17-11ec-80b6-13d68471c338.html'
                    src='https://bloximages.chicago2.vip.townnews.com/clevelandjewishnews.com/content/tncms/assets/v3/editorial/9/4a/94a089b4-2d17-11ec-8686-fb2b26bd3ed1/61686e8041ed0.image.jpg' 
                    organization='Cleveland Jewish News'
                    date='October 14, 2021'
                    title='Shaker Heights senior qualifies for US Olympic Trials' 
                    content='The road to the Olympics is daunting. Athletes of any sports need to constantly push their bodies to the limit, sacrifice sleep and social lives, and stay mentally healthy while pursuing their dream.' 
                    class='desktop' />
          <Article  href='https://www.wkyc.com/video/sports/olympics/shaker-heights-speed-skater-ryan-shane-to-compete-at-us-olympic-trials/95-6af4a55b-80e9-41f4-b24d-6881f6d1ed91'
                    src={alt_photo} 
                    organization='WKYC Channel 3'
                    date='December 20, 2021'
                    title='Shaker Heights speed skater Ryan Shane to compete at US Olympic Trials' 
                    content='Ryan Shane, a senior at Shaker Heights High School, is training for the Olympics in short-track speed skating. Jim Donovan has more on Ryan&#39;s quest for Beijing.'
                    class='desktop' />
        </div>
      </div>
    </div>
  )
}

export default News