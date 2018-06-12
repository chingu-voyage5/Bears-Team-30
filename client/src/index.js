/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "BaseStyles" }] */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from './components/App'
import BaseStyles from './BaseStyles'

import registerServiceWorker from './registerServiceWorker'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
