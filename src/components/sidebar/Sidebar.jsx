import React from 'react'

import './sidebar.css';

const SidebarElement = (props) => {
  return (
    <div className='rss__sidebarElement scale-up-center'>
      <h3 data-title={props.heading}>{props.heading}</h3>
      <div className='rss__sidebarElement-line'></div>
      <div className='rss__sidebarElement-description'>
        <h4>{props.event}</h4>
        <p>{props.detail}</p>
      </div>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className='rss__sidebar padding'>
      <SidebarElement heading='6th, 2x Finalist' event='US Olympic Team Trials' detail='1500m'/>
      <SidebarElement heading='2x Bronze Medalist' event='US Junior National Championships' detail='1500m + 500m'/>
      <SidebarElement heading='4th, World Cup Team Alt.' event='US Fall World Cup Trials' detail='1000m'/>
    </div>
  )
}

export default Sidebar