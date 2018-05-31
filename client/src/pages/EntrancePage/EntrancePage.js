import React from 'react'
import { Card, Row, Col } from 'antd'
import styled from 'styled-components'

import OrderForm from '../../components/OrderForm'

const EntrancePageWrapper = styled.div`
  margin: 40px 0;
`

const EntrancePage = () => {
  return (
    <EntrancePageWrapper>
      <Row type='flex' justify='center'>
        <Col span={12}>
          <Card title='Order Form'>
            <OrderForm />
          </Card>
        </Col>
      </Row>
    </EntrancePageWrapper>
  )
}

export default EntrancePage
