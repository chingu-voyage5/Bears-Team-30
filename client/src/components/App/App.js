import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import styled from 'styled-components'

import EntrancePage from '../../pages/EntrancePage'
import AppFooter from '../../components/AppFooter'
import AppHeader from '../../components/AppHeader'

const { Content } = Layout

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`

const StyledContent = styled(Content)`
  padding: 0 50px;
`

class App extends Component {
  render () {
    return (
      <div className='App'>
        <StyledLayout className='layout'>
          <AppHeader />

          <StyledContent>
            <div className='content-box'>
              <Switch>
                <Route exact path='/' component={EntrancePage} />
                <Route path='/entrance' component={EntrancePage} />
              </Switch>
            </div>
          </StyledContent>

          <AppFooter />
        </StyledLayout>
      </div>
    )
  }
}

export default App
