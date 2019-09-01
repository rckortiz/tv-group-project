import React, { Component } from "react"
import ShowDetails from "./components/ShowDetails"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LandingPage from "./components/LandingPage"

class App extends Component {
  render() {
    return (
      <Router>
        <switch>
          <LandingPage />
        </switch>
      </Router>
    }
  }
}

export default App
