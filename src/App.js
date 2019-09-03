import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import ShowDetails from "./components/ShowDetails"

class App extends Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage}></Route>
            <Route
              exact
              path='/showdetails/:id'
              component={ShowDetails}
            ></Route>
          </Switch>
        </Router>
      </main>
    )
  }
}

export default App
