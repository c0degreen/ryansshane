import React from 'react'

import './article.css';

const Article = (props) => {
  return (
    <a href={props.href}><div className={`rss__article ${props.class}`}>
        <div className='rss__article-photo'>
            <img src={props.src} alt='news' />
        </div>
        <div className='rss__article-content'>
          <h3>{props.title}</h3>
          <p className='rss__article-content_organization'>{props.organization}</p>
          <p className='rss__article-content_date'>{props.date}</p>
          <p className='rss__article-content_content'>{props.content}</p>
          <p className='rss__article-content_readMore'>Read more</p>
        </div>
    </div></a>
  )
}

export default Article