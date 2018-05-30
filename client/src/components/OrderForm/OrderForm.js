import React from 'react'
import PropTypes from 'prop-types'

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
  console.log('values', values)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          name='customerName'
          placeholder='Name'
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
        <input
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
        <textarea
          name='customerNotes'
          placeholder='Notes'
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
    </form>
  )
}

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
      <input
        type='number'
        name={name}
        placeholder={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
      />
      {touched[name] && errors[name] && <div>{errors[name]}</div>}
    </div>
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

MenuItemInput.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  menuItem: PropTypes.object.isRequired
}

export default OrderForm
