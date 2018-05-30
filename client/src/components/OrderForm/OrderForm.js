import React from 'react'
import PropTypes from 'prop-types'

const OrderForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    <input
      type='text'
      name='customerName'
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.customerName}
    />
    {touched.customerName &&
      errors.customerName && <div>{errors.customerName}</div>}

    <button type='submit' disabled={isSubmitting}>
      Submit
    </button>
  </form>
)

OrderForm.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

export default OrderForm
