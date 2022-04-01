import React from 'react'

import './logoLink.css';

function LogoLink(props) {
  return (
    <div className='rss__logoLink'>
      <a href={props.href}><div className={`rss__logoLink-logo ${props.name}`}></div></a>
    </div>
  )
}

export default LogoLink