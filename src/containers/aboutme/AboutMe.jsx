import React from 'react'

import './aboutMe.css';

import about_one from '../../about-one.jpg';
import about_two from '../../about-two.jpg';
import about_three_one from '../../about-three-one.jpg';

const AboutMeElement = (props) => {
    return (
      <><div className='rss__aboutMe-photo'>
        <div className={`rss__aboutMe-photo_wrapper ${props.number}`}>
          <img className='unhover' src={props.src} alt='' />
          <img className='hover' src={props.hoverSrc} alt='' />
        </div>
      </div>
        <div className={`rss__aboutMe-text ${props.number}`}>
          {props.text}
        </div></>

    )
}

const AboutMe = () => {
  return (
    <div className='rss__aboutMe' id='about'>
      <AboutMeElement number='one' text={
        <>
          <h1>Upcoming Talent</h1>
          <h2>Breakout season in 2021-22.</h2>
          <h2>2x US Junior Championships Bronze.</h2>
          <h2>8x A Finals in 3 races in 2021-22.</h2>
          <h2>41.151 500m.</h2>
        </>
      } src={about_one} />
      <AboutMeElement number='two' text={
        <>
          <h1>Olympic Trials at 17y</h1>
          <h2>One of 12 to earn an automatic Olympic Trials spot.</h2>
          <h2>2x Olympic Trials Finalist.</h2>
        </>
      } src={about_two} />
      <AboutMeElement number='three' text={
        <>
          <h1>Youngest Male National Team Member</h1>
          <h2>Invited for the 2022-23 season.</h2>
          <h2>Youngest of top 8 American men.</h2>
        </>
      } src={about_three_one} />
    </div>
  )
}

export default AboutMe