import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import styled from 'styled-components'

import AppHeader from '../../components/AppHeader'

import OrderPage from '../../pages/OrderPage'
import KitchenPage from '../../pages/KitchenPage'

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
          <Route exact path='/' component={OrderPage} />
          <Route path='/entrance' component={OrderPage} />
          <Route path='/kitchen' component={KitchenPage} />
        </Switch>
      </BaseApp>
    )
  }
}

export default App
