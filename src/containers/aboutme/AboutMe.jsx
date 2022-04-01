import React from 'react'

import './aboutMe.css';

import about_one from '../../about-one.jpg';
import about_two from '../../about-two.jpg';
import about_three_one from '../../about-three-one.jpg';
import about_three_two from '../../about-three-two.jpg';

const AboutMeElement = (props) => {
  if (props.hoverSrc !== undefined) {
    return (
      <><div className='rss__aboutMe-photo'>
        <div className={`rss__aboutMe-photo_wrapper ${props.number}`}>
          <img className='unhover' src={props.src} alt='' />
          <img className='hover' src={props.hoverSrc} alt='' />
        </div>
      </div>
        <div className='rss__aboutMe-text'>
          {props.text}
        </div></>

    );
  }

  return (
    <><div className='rss__aboutMe-photo'>
      <div className={`rss__aboutMe-photo_wrapper ${props.number}`}>
        <img src={props.src} alt='' />
      </div>
    </div>
      <div className='rss__aboutMe-text'>
        {props.text}
      </div></>
  )
}

const AboutMe = () => {
  return (
    <div className='rss__aboutMe' id='about'>
      <AboutMeElement number='one' text={
        <h1>element1</h1>
      } src={about_one} />
      <AboutMeElement number='two' text={
        <h1>element2</h1>
      } src={about_two} />
      <AboutMeElement number='three' text={
        <><h1>element3</h1>
        <h2>lwgdwuegbclwxbweibckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkw;</h2></>
      } src={about_three_one} hoverSrc={about_three_two} />
    </div>
  )
}

export default AboutMe