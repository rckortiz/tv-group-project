import React, { useState, useEffect } from "react"
import axios from "axios"

const ShowDetails = props => {
  const [show, setShow] = useState([])
  // const [tvId, setTvId] = useState([])

  const fetchShowDetails = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${props.match.params.id}/credits?api_key=4d1706050da661b62765277b35357cd7&language=en-US`
    )
    // setTvId(resp)  /// might need to set this to the other api call

    setShow(resp.data.cast)
    // setTvId(show)
    // console.log({ show })
    console.log(resp.data.cast)
  }

  useEffect(() => {
    fetchShowDetails()
    // console.log(show)
  }, [])

  return (
    <div>
      <nav>
        <li>Home</li>
        <li>About</li>

        {show.character.map((character, i) => {
          return <li key={i}>{character}</li>
        })}
      </nav>
      {/* <h1>{props.name}</h1> */}
      {/* <img alt="a thing" src={props.posterPath} /> */}
      {/* <p>{props.cast}</p> */}
    </div>
  )
}

export default ShowDetails
