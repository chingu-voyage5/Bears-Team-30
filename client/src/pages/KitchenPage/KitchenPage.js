import React from 'react'
import { Card, Row, Col } from 'antd'
import styled from 'styled-components'

import OrderForm from '../../components/OrderForm'

const KitchenPageWrapper = styled.div`
  margin: 40px 0;
`

const KitchenPage = () => {
  return (
    <KitchenPageWrapper>
      <Row type='flex' justify='center'>
        <Col span={12}>
          <Card title='KITCHEN Form'>KITCHEN PAGE</Card>
        </Col>
      </Row>
    </KitchenPageWrapper>
  )
}

export default KitchenPage
