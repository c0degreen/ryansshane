import React from 'react'

import Article from '../../components/article/Article';
import './news.css';

import alt_photo from '../../alt_photo.png';

const News = () => {
  return (
    <div className='rss__news padding' id='news'>
      <h2 className='h1'><b className='serif' data-title='Ryan Shane'>Ryan Shane</b> in the news</h2>
      <div className='rss__news-container'>
        <div className='groupA'>
        <Article href='https://www.teamusa.org/US-Speedskating/News/Featured-News/2023/January/30/Marcus-Howard-Captures-Pair-Of-Medals-At-Short-Track-Junior-Worlds'
                   src='https://www.teamusa.org/-/media/US_Speedskating/News-Story-Photos/2022/Short-Track/ST-jr-WCH.jpg?h=756&la=en&w=828&hash=1BA2BF5F747AF5BCAEA6680472C0300E2F316FFC'
                   organization='TeamUSA.org'
                   date='January 30, 2023'
                   title='USA captures pair of medals at Short Track Junior Worlds'
                   content='Marcus Howard teamed up with Seung-Min Kwon, Justin Liu and Ryan Shane for a third-place finish in the 3000m Relay. They finished with a time of 4:01.863, trailing winner South Korea and Japan.'
          />
         
        </div>
        <div className='groupB'>
         <Article href='https://www.cleveland.com/community/2022/06/shaker-heights-speedskater-ryan-shane-becomes-newest-member-of-us-national-team.html'
                    src='https://www.cleveland.com/resizer/TRI1uw5jM_maIBosswT30zXIS4o=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/3L4SG2BQVZEDZOLZTR32EVAQJU.jpeg'
                    organization='Cleveland.com'
                    date='June 8, 2022'
                    title='Shaker Heights speedskater Ryan Shane becomes newest member of U.S. National Team'
                    content='Speedskater and recent Shaker Heights High School graduate Ryan Shane has been named to the 2022-23 U.S. Short Track National Team. Shane joins the team following a breakout season that saw him compete in the U.S. Olympic Trials last December outside of Salt Lake City'
          />
          <Article  href='https://www.youtube.com/watch?v=9_HNyKEkiGY'
                    src='https://i.ytimg.com/vi/9_HNyKEkiGY/hq720.jpg' 
                    organization='WKYC Olympic Zone'
                    date='February 9, 2022'
                    title='Ryan Shane is a Power of Inspiration' 
                    content='On and off the ice, Shaker Heights senior Ryan Shane is a champion! Since the age of ten, Ryan has dedicated his life to making the U.S. Olympic Speedskating Team! The Northeast Ohio native moved out to Salt Lake City to train at the Utah Olympic Oval. Training thirty hours a week while taking classes virtually, the road is grueling with sacrifices made to pursue his dream. Thank you Ryan for being a Power of Inspiration!' />
          <Article  href='https://www.cleveland.com/community/2021/11/shaker-speedskater-ryan-shane-on-short-track-to-winter-olympic-bid-with-trials-awaiting.html'
                    src='https://www.cleveland.com/resizer/0IAewdcu5zLMvc4GWkB6A9SeoUY=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/EU7KJE56GJCYNPB72CMMGMQRPA.jpeg' 
                    organization='Cleveland.com'
                    date='November 22, 2021'
                    title='Shaker Heights speed skater Ryan Shane on short track to Winter Olympic bid' 
                    content='With the 2022 Winter Olympics on the horizon, local short track speed skater Ryan Shane now finds himself one step away from a trip to Beijing.' />
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