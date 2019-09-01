import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowDetails = () => {
  const [show, setShow] = useState([])
  const [tvId, setTvId] = useState([])

  const getSomeData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=4d1706050da661b62765277b35357cd7&language=en-US`
    )
    // setTvId(resp) might need to set this to the other api call
    setShow(resp.data.results)
    setTvId(show)
    console.log(show.data.results)
  }

  useEffect(() => {
    getSomeData()
  })

  return (
    <div>
      {tvId.map(tv => {
        return (
          <ul>
            <li>{tv.id}</li>
          </ul>
        )
      })}
      <p>{show.id}</p>
    </div>
  )
}

export default ShowDetails
