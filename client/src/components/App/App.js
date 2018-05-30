import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from '../../pages/HomePage'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/entrance' component={HomePage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
