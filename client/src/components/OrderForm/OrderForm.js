import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'

import MenuItemInput from './MenuItemInput'

const { TextArea } = Input

const OrderForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  menus
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input
          type='text'
          name='customerName'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.customerName}
        />
        {touched.customerName &&
          errors.customerName && <div>{errors.customerName}</div>}
      </div>

      {menus.map(menuItem => (
        <MenuItemInput
          key={menuItem.id}
          menuItem={menuItem}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          touched={touched}
          errors={errors}
        />
      ))}

      <div>
        <Input
          type='number'
          name='preSaleCards'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.preSaleCards}
        />
        {touched.preSaleCards &&
          errors.preSaleCards && <div>{errors.preSaleCards}</div>}
      </div>

      <div>
        <TextArea
          name='customerNotes'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.customerNotes}
        />
        {touched.customerNotes &&
          errors.customerNotes && <div>{errors.customerNotes}</div>}
      </div>

      <button type='submit' disabled={isSubmitting}>
        Submit
      </button>
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
  menus: PropTypes.array.isRequired
}

export default OrderForm
