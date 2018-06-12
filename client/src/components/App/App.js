import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import styled from 'styled-components'

import AppHeader from '../../components/AppHeader'
import EntrancePage from '../../pages/EntrancePage'
import OrderPage from '../../pages/OrderPage'

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
})

const BaseApp = styled.div`
  background-color: #f4f4fd;
  min-height: 100vh;
`

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
      <BaseApp>
        <AppHeader />
        <Switch>
          <Route exact path='/' component={OrderPage} />
          <Route path='/entrance' component={EntrancePage} />
        </Switch>
      </BaseApp>
      </ApolloProvider>
    )
  }
}

export default App
