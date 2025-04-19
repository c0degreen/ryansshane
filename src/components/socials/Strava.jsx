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

function convertTime(x) {
  var mins = Math.round(x/60)
  var hours = Math.floor(mins/60)
  var remainder = mins % 60

  return (hours === 0 ? '' : (hours.toString() + 'h')) + (remainder === 0 ? '' : (' ' + remainder.toString() + 'm'))
}

function convertDistance(x) {
  return ((Math.round(x*0.00621371)/10).toString() + "mi")
}

function convertElevation(x) {
  return (Math.round(x/3.28084).toString() + "ft")
}

const Strava = () => {
  const [athlete, setAthlete] = useState({})
  const [activities, setActivities] = useState({})

  //Strava Credentials
  let clientID = '156161';
  let clientSecret = '1e89e626861cde6fff18ef256b1c275993f8813b';

  // refresh token and call address
  const refreshToken = '9309c0adbda1bedcfccd72f9cd7be21db74d37d0';
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`
  
  const getAthlete = 'https://www.strava.com/api/v3/athlete?access_token='
  const getActivity = 'https://www.strava.com/api/v3/athlete/activities?access_token='

  //mapbox
  const mapAccessToken = 'pk.eyJ1IjoicnlhbnNzaGFuZSIsImEiOiJjbTluNzl4MmkwZWU5MmpwcWlvdzBtemNwIn0.-zhV0ycL1AXr3vJbmvkb3Q'

  // Use refresh token to get current access token
  useEffect(() => {
    fetch(callRefresh, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(result => getStrava(result.access_token))

    console.log('calling strava')
  }, [callRefresh])

  // use current access token to call all activities
  function getStrava(access){
      fetch(getAthlete + access)
      .then(res => res.json())
      .then(data => setAthlete(data))
      .catch(e => console.log(e))

      fetch(getActivity + access)
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(e => console.log(e))
  }

  if (athlete.id === undefined || activities[0] === undefined) {
    return 'loading...'
  }

  const activity = activities[14]

  const [profileUrl, username, name, biography, followers, follows] 
      = [athlete.profile, athlete.username, (athlete.firstname + ' ' + athlete.lastname), convertBio(athlete.bio), convertNum(athlete.follower_count), convertNum(athlete.friend_count)]
  const [title, distance, elevation, duration, polyline]
      = [activity.name, convertDistance(activity.distance), convertElevation(activity.total_elevation_gain), convertTime(activity.moving_time), encodeURIComponent(activity.map.summary_polyline)]
  
  const mapSrc = 'https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/path+FC5200(' + polyline + ')/auto/300x200?access_token=' + mapAccessToken
  const link = 'https://strava.com/athletes/' + username
  const style = {
    backgroundImage: 'url(\'' + profileUrl + '\')'
  }
  const mapStyle = {
    backgroundImage: 'url(\'' + mapSrc + '\')'
  }

  return (
    <div className='rss__strava'>
      <a className='rss__instagramHeader flexRow' href={link}>
        <div className='rss__profile' style={style}></div>
          <div className='rss__instagramInfo flexCol'>
              <div className='flexRow'>
                  <div className='flexCol'>
                      <div className='rss__name'>{name}</div>
                      <div className='rss__username'>&#64;{username}</div>
                  </div>
                  <div className='rss__followButton'>Follow</div>
              </div>
              <div className='flexRow'>
                  <div className='rss__numbers'><b>{followers}</b> followers</div>
                  <div className='rss__numbers'><b>{follows}</b> following</div>
              </div>
              <div className='rss__biography'>{biography}</div>
          </div>
        </a>
        <div className='rss__instagramPosts'>
          <div className='rss__name rss__stravaInfo'>{title}</div>
          <div className='rss__stravaInfo flexRow'>
            <div className='rss__numbers'>{distance}</div>
            <div className='rss__numbers'>{elevation}</div>
            <div className='rss__numbers'>{duration}</div>
          </div>
          <div className='rss__stravaMap' style={mapStyle}></div>
        </div>
      </div>
  )
}

export default Strava