import React, { useState, useEffect } from "react"
import axios from "axios"

const ShowDetails = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img alt='a thing' src={props.posterPath} />
      <p>{props.cast}</p>
    </div>
  )
}

export default ShowDetails
