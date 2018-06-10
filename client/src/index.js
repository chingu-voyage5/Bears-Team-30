/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "BaseStyles" }] */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'

import App from './components/App'
import BaseStyles from './BaseStyles'
import { faListUl, faTable } from '@fortawesome/fontawesome-free-solid'

import registerServiceWorker from './registerServiceWorker'

fontawesome.library.add(faListUl, faTable)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
