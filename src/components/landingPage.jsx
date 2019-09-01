import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const LandingPage = () => {
  const [displayShows, setDisplayShows] = useState([])

  //  APIKEY = '4d1706050da661b62765277b35357cd7'

  const fetchData = async () => {
    const resp = await Axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=4d1706050da661b62765277b35357cd7&language=en-US&page=1'
    )
    console.log(resp.data)
    setDisplayShows(resp.data.results)
    console.log(displayShows)
  }

  // const randomShow = displayShow => {
  //   setDisplayShows(Math.random(displayShow + 1))
  // }

  useEffect(() => {
    fetchData()
    // randomShow()
  }, [])

  // useEffect(async () => {
  //   const resp = await Axios.get(
  //     'https://api.themoviedb.org/3/tv/popular?api_key=4d1706050da661b62765277b35357cd7&language=en-US&page=1'
  //   )
  // })

  return (
    <main>
      <header>
        <h1> Top Rated TV shows</h1>
      </header>
      <section className="showMovies">
        <ul>
          {displayShows.map(show => {
            return (
              <li key={show.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                    show['poster_path']
                  }`}
                ></img>
                {show.name}
                {show.title}
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default LandingPage
