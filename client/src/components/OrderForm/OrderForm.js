import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Row, Col, Button } from 'antd'

import MenuItemInput from './MenuItemInput'

const FormItem = Form.Item
const { TextArea } = Input

const OrderForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue,
  soup,
  adult,
  child
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormItem label='Customer Name'>
        <Input
          type='text'
          name='customerName'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.customerName}
        />
        {touched.customerName &&
          errors.customerName && <div>{errors.customerName}</div>}
      </FormItem>

      <Row type='flex' gutter={16}>
        <Col span={8}>
          {soup.map(menuItem => (
            <MenuItemInput
              key={menuItem.id}
              menuItem={menuItem}
              setFieldValue={setFieldValue}
              handleBlur={handleBlur}
              values={values}
              touched={touched}
              errors={errors}
            />
          ))}
        </Col>
        <Col span={8}>
          {adult.map(menuItem => (
            <MenuItemInput
              key={menuItem.id}
              menuItem={menuItem}
              setFieldValue={setFieldValue}
              handleBlur={handleBlur}
              values={values}
              touched={touched}
              errors={errors}
            />
          ))}
        </Col>
        <Col span={8}>
          {child.map(menuItem => (
            <MenuItemInput
              key={menuItem.id}
              menuItem={menuItem}
              setFieldValue={setFieldValue}
              handleBlur={handleBlur}
              values={values}
              touched={touched}
              errors={errors}
            />
          ))}
        </Col>
      </Row>

      <FormItem label='Pre-Sale Cards'>
        <InputNumber
          name='preSaleCards'
          onChange={value => setFieldValue('preSaleCards', value)}
          onBlur={handleBlur}
          value={values.preSaleCards}
          min={0}
        />
        {touched.preSaleCards &&
          errors.preSaleCards && <div>{errors.preSaleCards}</div>}
      </FormItem>

      <FormItem label='Customer Notes'>
        <TextArea
          name='customerNotes'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.customerNotes}
        />
        {touched.customerNotes &&
          errors.customerNotes && <div>{errors.customerNotes}</div>}
      </FormItem>

      <Button htmlType='submit' type='primary' disabled={isSubmitting}>
        Submit
      </Button>
    </Form>
  )
}

OrderForm.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  soup: PropTypes.array.isRequired,
  adult: PropTypes.array.isRequired,
  child: PropTypes.array.isRequired
}

export default OrderForm
