import { React, useState, useEffect } from 'react'

import './socials.css';

const Strava = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [athlete, setAthlete] = useState({})
  const [stats, setStats] = useState({})

  //Strava Credentials
  let clientID = '156161';
  let clientSecret = '1e89e626861cde6fff18ef256b1c275993f8813b';

  // refresh token and call address
  const refreshToken = 'd3bfbd6e82dc77dc7bb05eb5ab6f6d34426354e7';
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`
  
  const getAthlete = 'https://www.strava.com/api/v3/athlete?access_token='
  const getAthleteStats = 'https://www.strava.com/api/v3/athletes/44531359/stats?access_token='
  const getActivity = 'https://www.strava.com/api/v3/activities/{id}?include_all_efforts="false"&access_token='

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

      fetch(getAthleteStats + access)
      .then(res => res.json())
      .then(data => setStats(data), setIsLoading(prev => !prev))
      .catch(e => console.log(e))
  }

  if (athlete.firstname == undefined || stats.recent_run_totals == undefined) {
    return 'loading...'
  }

  const [profileUrl, name, biography, id] 
      = [athlete.profile, (athlete.firstname + ' ' + athlete.lastname), athlete.bio, athlete.id]


  console.log(athlete)
  console.log(stats)

  const link = 'https://instagram.com/' + 0

  return (
    <div className='rss__instagram'>
      <a className='rss__instagramHeader flexRow' href=''>
        <img className='rss__profile' src={profileUrl} alt='strava profile' />
          <div className='rss__instagramInfo flexCol'>
              <div className='flexRow'>
                  <div className='flexCol'>
                      <div className='rss__name'>{name}</div>
                      <div className='rss__username'>&#64;{}</div>
                  </div>
                  <div className='rss__followButton'>Follow</div>
              </div>
              <div className='flexRow'>
                  <div className='rss__numbers'><b>{}</b> followers</div>
                  <div className='rss__numbers'><b>{}</b> following</div>
              </div>
              <div className='rss__biography'>{biography}</div>
          </div>
        </a>
      </div>
  )
}

export default Strava