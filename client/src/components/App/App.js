import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import EntrancePage from '../../pages/EntrancePage'
import OrderPage from '../../pages/OrderPage'

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
})

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={OrderPage} />
            <Route path='/entrance' component={EntrancePage} />
          </Switch>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
