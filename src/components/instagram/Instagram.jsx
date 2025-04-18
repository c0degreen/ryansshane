import { React, useState, useEffect } from 'react'

import './instagram.css';

function convert(x) {
    const magnitude = Math.floor(Math.floor(Math.log(x) / Math.LN10 + 0.000000001)/3)*3
    const divided   = Math.round(x/Math.pow(10,magnitude-1))/10
    var appendix  = (magnitude === 3) ? "K" : ((magnitude === 6) ? "M" : "")

    return (divided.toString()+appendix)
}

const Instagram = () => {

  const [json, setJSON] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    // Fetch feed, update state
    async function fetchFeed() {
      try {
        // Fetch and parse feed
        const rawFeed = await fetch('https://feeds.behold.so/TOThChOrxKi5h55ogALU', {
          signal: controller.signal,
        })

        // Pass http errors to the catch block
        if (!rawFeed.ok) {
          const errorMessage = await rawFeed.text()
          throw new Error(errorMessage)
        }

        // Parse JSON
        const feedJSON = await rawFeed.json()

        // Update state with fetched json
        setJSON(feedJSON)
      } catch (err) {
        // Swallow AbortErrors, since they are intentional and expected
        if (err.name !== 'AbortError') {
          console.error(err)
        }
      }
    }

    // Run
    fetchFeed()

    // Abort fetch if feedId changes or component is unmounted
    return () => {
      controller.abort()
    }
  })

  console.log(json)

  const [profileURL, username, biography, followers, follows, posts] 
      = [json.profilePictureUrl, json.username, json.biography, convert(json.followersCount), convert(json.followsCount), json.posts]

  if (posts == undefined) {
    return;
  }

  return (
    <div className='rss__instagram'>
        <div className='rss__instagramHeader'>
            <img className='rss__profile' src={profileURL} alt='instagram profile' />
            <div className='rss__username'>&#64;{username}</div>
            <div className='rss__followers'>{followers}</div>
            <div className='rss__follows'>{follows}</div>
            <div className='rss__biography'>{biography}</div>
            <a className='rss__followButton' href={'https://instagram.com/' + username}>Follow</a>
        </div>
        <div className='rss__instagramPosts'>
            {posts.map((post, index) => {
                const [caption, url] = [post.caption, post.sizes.medium.mediaUrl]
                
                const style = {
                    backgroundImage: 'url(\'' + url + '\')'
                }

                return (
                    <div key={index} className='rss__instagramPost' style={style}>
                        <div></div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Instagram