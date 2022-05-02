import React from 'react'

import './titleCard.css';

const TitleCard = () => {
  return (
    <div className='rss__titleCard'>
      <div className='rss__titleCard-text'>
        <h1 className='serif bold' data-title='Ryan Shane'>Ryan Shane</h1>
        <h2 className='serif'>Short Track Speedskater</h2>
      </div>
      <div className='rss__titleCard-buttons'>
        <a href='#about'>About Me</a>
        <a href='#news'>Latest News</a>
      </div>
    </div>
  )
}

export default TitleCard