import React from 'react'

import LogoLink from '../logolink/LogoLink';
import './sponsorSocial.css';


const SponsorSocial = () => {
  return (
    <div class='rss__sponsorSocial'>
      <div class='rss__sponsorSocial-sponsors'>
        <LogoLink name='placeholder' href='https://placeholder' />
        <LogoLink name='placeholder' href='https://placeholder' />
      </div>
      <div class='rss__sponsorSocial-line'></div>
      <div class='rss__sponsorSocial-socials'>
        <LogoLink name='strava' href='https://strava.com/athletes/44531359' />
        <LogoLink name='youtube' href='' />
        <LogoLink name='instagram' href='https://instagram.com/ryansshane' />
      </div>
    </div>
  )
}

export default SponsorSocial