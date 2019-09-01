import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ShowDetails from './components/ShowDetails'

class App extends Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route
              exact
              path="https://api.themoviedb.org/3/tv/100/credits?api_key=4d1706050da661b62765277b35357cd7&language=en-US"
              component={ShowDetails}
            ></Route>
          </Switch>
        </Router>
        <LandingPage />
      </main>
    )
  }
}

export default App
