import React, { useState, useEffect } from "react"
import axios from "axios"

const ShowDetails = props => {
  const [show, setShow] = useState([])
  // const [tvId, setTvId] = useState([])

  const getSomeData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=60f58f18f96b65a50bd5cc31bafb3aac&language=en-US`
    )
    // setTvId(resp) might need to set this to the other api call
    setShow(resp.data)
    console.log(show)
  }

  useEffect(() => {
    getSomeData()
  })

  return (
    <div>
      <nav>
        <li>Home</li>
        <li>About</li>
      </nav>
      <h1>{props.name}</h1>
      <img alt='a thing' src={props.posterPath} />
      <p>{props.cast}</p>
    </div>
  )
}

export default ShowDetails
