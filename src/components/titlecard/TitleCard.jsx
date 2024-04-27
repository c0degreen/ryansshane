import React from 'react'

import './titleCard.css';

const TitleCard = () => {
  return (
    <div className='rss__titleCard'>
      <div className='rss__titleCard-text'>
        <h1 className='serif' data-title='Ryan Shane'>Ryan Shane</h1>
        <h2 className='black'>Short Track Speedskater</h2>
        <h2 className='black'>Professional Chef</h2>
      </div> 
    </div>
  )
}

export default TitleCard