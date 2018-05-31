import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

const MenuItemInput = ({
  menuItem,
  handleChange,
  handleBlur,
  values,
  touched,
  errors
}) => {
  const { name } = menuItem
  return (
    <div>
      <Input
        type='number'
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
      />
      {touched[name] && errors[name] && <div>{errors[name]}</div>}
    </div>
  )
}

MenuItemInput.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  menuItem: PropTypes.object.isRequired
}

export default MenuItemInput
