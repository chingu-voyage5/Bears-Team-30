import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber, Form } from 'antd'

const FormItem = Form.Item

const MenuItemInput = ({
  menuItem,
  handleBlur,
  values,
  touched,
  errors,
  setFieldValue
}) => {
  const { name } = menuItem
  return (
    <FormItem label={name}>
      <InputNumber
        name={name}
        onBlur={handleBlur}
        value={values[name]}
        onChange={value => setFieldValue(name, value)}
      />
      {touched[name] && errors[name] && <div>{errors[name]}</div>}
    </FormItem>
  )
}

MenuItemInput.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  menuItem: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired
}

export default MenuItemInput
