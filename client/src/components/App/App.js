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
  .content-box {
    max-width: 100%;
    width: 1024px;
    min-height: 700px;
    margin: 30px auto;
    padding: 15px;
    background: #ffffff;
  }
`

class App extends Component {
  render () {
    return (
      <div className='App'>
        <StyledLayout className='layout'>
          <AppHeader />

          <StyledContent style={{ padding: '0 50px' }}>
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
