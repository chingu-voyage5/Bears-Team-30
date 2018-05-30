import React from 'react'
import { Menu, Layout } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout

const AppHeader = () => {
  return (
    <Header>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key='1'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/entrance'>Entrance</Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/'>Kitchen</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default AppHeader
