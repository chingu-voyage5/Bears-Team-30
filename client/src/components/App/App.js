import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import AppHeader from '../../components/AppHeader'
import EntrancePage from '../../pages/EntrancePage'

const BaseApp = styled.div`
  background-color: #f4f4fd;
  min-height: 100vh;
`

class App extends Component {
  render () {
    return (
      <BaseApp>
        <AppHeader />
        <Switch>
          <Route exact path='/' component={EntrancePage} />
          <Route path='/entrance' component={EntrancePage} />
        </Switch>
      </BaseApp>
    )
  }
}

export default App
