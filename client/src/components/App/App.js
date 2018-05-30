import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import HomePage from '../../pages/HomePage'
import EntrancePage from '../../pages/EntrancePage'
import AppFooter from '../../components/AppFooter'
import AppHeader from '../../components/AppHeader'

const { Content } = Layout

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Layout className='layout'>
          <AppHeader />

          <Content style={{ padding: '0 50px' }}>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/entrance' component={EntrancePage} />
            </Switch>
          </Content>

          <AppFooter />
        </Layout>
      </div>
    )
  }
}

export default App
