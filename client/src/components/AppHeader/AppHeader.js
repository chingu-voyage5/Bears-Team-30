import React from 'react'
import { Menu, Layout } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const { Header } = Layout

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
`

const AppHeader = () => {
  return (
    <StyledHeader>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key='1'>
          <Link to='/entrance'>Entrance</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/kitchen'>Kitchen</Link>
        </Menu.Item>
      </Menu>
    </StyledHeader>
  )
}

export default AppHeader
