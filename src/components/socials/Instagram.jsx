import { React, useState, useEffect } from 'react'

import './socials.css';

function convertNum(x) {
    const magnitude = Math.floor(Math.floor(Math.log(x) / Math.LN10 + 0.000000001)/3)*3
    const divided   = Math.round(x/Math.pow(10,magnitude-1))/10
    var appendix  = (magnitude === 3) ? "K" : ((magnitude === 6) ? "M" : "")

    return (divided.toString()+appendix)
}

function convertBio(x) {
    var array = x.split('\n')

    return (
        array.map((line, index) => {
            return(
                <p>{line}</p>
            )
        })
    )
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

    console.log('loading ig')
    // Abort fetch if feedId changes or component is unmounted
    return () => {
      controller.abort()
    }
  }, [])

  if (json.username == undefined) {
    return 'loading...'
  }

  const [profileUrl, username, biography, followers, follows, posts] 
      = [json.profilePictureUrl, json.username, convertBio(json.biography), convertNum(json.followersCount), convertNum(json.followsCount), json.posts]

  const link = 'https://instagram.com/' + username
  const style = {
    backgroundImage: 'url(\'' + profileUrl + '\')'
  }

  return (
    <div className='rss__instagram'>
        <a className='rss__instagramHeader flexRow' href={link}>
            <div className='rss__profile' style={style}></div>
            <div className='rss__instagramInfo flexCol'>
                <div className='flexRow'>
                    <div className='flexCol'>
                        <div className='rss__name'>Ryan Shane</div>
                        <div className='rss__username'>&#64;{username}</div>
                    </div>
                    <div className='rss__followButton' href={link}>Follow</div>
                </div>
                <div className='flexRow'>
                    <div className='rss__numbers'><b>{followers}</b> followers</div>
                    <div className='rss__numbers'><b>{follows}</b> following</div>
                </div>
                <div className='rss__biography'>{biography}</div>
            </div>
        </a>
        <div className='rss__instagramPosts'>
            {posts.map((post, index) => {
                const [caption, src, url] = [post.caption, post.sizes.medium.mediaUrl, post.permalink]
                
                const style = {
                    backgroundImage: 'url(\'' + src + '\')'
                }

                return (
                    <a key={index} className='rss__instagramPost' style={style} href={url}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </div>
                    </a>
                )
            })}
        </div>
    </div>
  )
}

export default Instagram