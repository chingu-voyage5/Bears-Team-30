import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import EntrancePage from '../../pages/EntrancePage'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={EntrancePage} />
          <Route path='/entrance' component={EntrancePage} />
        </Switch>
      </div>
    )
  }
}

export default App
