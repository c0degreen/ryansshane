import React from 'react'

import './aboutMe.css';

import about_child from '../../about-child.jpg';
import about_one from '../../about-one.jpg';
import about_two from '../../about-two.jpg';
import about_three_one from '../../about-three-one.jpg';

const AboutMeElement = (props) => {
    return (
      <><div className='rss__aboutMe-photo'>
        <div className={`rss__aboutMe-photo_wrapper ${props.number}`}>
          <img src={props.src} alt='' />
        </div>
      </div>
        <div className={`rss__aboutMe-text ${props.number}`}>
          {props.text}
        </div></>

    )
}

const AboutMe = () => {
  return (
    <div className='rss__aboutMe padding' id='about'>
      <AboutMeElement number='zero' text={
        <>
          <h2>Starting Out</h2>
          <h3>Grew up in Shaker Heights, Ohio.</h3>
          <h3>Skated at the local speedskating club.</h3>
          <h3>Moved to Utah at 15 to train with the FAST Development Team.</h3>
        </>
      } src={about_child} />
      <AboutMeElement number='one' text={
        <>
          <h2>Upcoming Talent</h2>
          <h3>Breakout season in 2021-22.</h3>
          <h3>2x US Junior Championships Bronze.</h3>
          <h3>8x A Finals in 3 races in 2021-22.</h3>
          <h3>41.151 500m.</h3>
        </>
      } src={about_one} />
      <AboutMeElement number='two' text={
        <>
          <h2>Olympic Trials at 17y</h2>
          <h3>One of 12 to earn an automatic Olympic Trials spot.</h3>
          <h3>2x Olympic Trials Finalist.</h3>
        </>
      } src={about_two} />
    </div>
  )
}

export default AboutMe