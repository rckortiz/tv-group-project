import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage'

class App extends Component {
  render() {
    return <LandingPage />
  }
}

export default App
