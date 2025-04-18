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

const Strava = () => {
  const [isLoading, setIsLoading] = useState(true)
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

  // Use refresh token to get current access token
  useEffect(() => {
    fetch(callRefresh, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(result => getStrava(result.access_token))
  }, [callRefresh])

  // use current access token to call all activities
  function getStrava(access){
      fetch(getAthlete + access)
      .then(res => res.json())
      .then(data => setAthlete(data), setIsLoading(prev => !prev))
      .catch(e => console.log(e))

      fetch(getActivity + access)
      .then(res => res.json())
      .then(data => setActivities(data), setIsLoading(prev => !prev))
      .catch(e => console.log(e))
  }

  if (athlete.firstname == undefined || activities.recent_run_totals == undefined) {
    return 'loading...'
  }

  const [profileUrl, username, name, biography, followers, follows] 
      = [athlete.profile, athlete.username, (athlete.firstname + ' ' + athlete.lastname), athlete.bio, athlete.follower_count, athlete.friend_count]


  console.log(athlete)
  console.log(activities)

  const link = 'https://instagram.com/' + 0
  const style = {
    backgroundImage: 'url(\'' + profileUrl + '\')'
  }

  return (
    <div className='rss__strava'>
      <a className='rss__instagramHeader flexRow' href=''>
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
      </div>
  )
}

export default Strava