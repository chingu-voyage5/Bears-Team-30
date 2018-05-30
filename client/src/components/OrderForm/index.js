import OrderForm from './OrderForm'
import { withFormik } from 'formik'
import { defaultProps, compose } from 'recompose'

export default compose(
  defaultProps({
    menus: [
      { id: '1', name: 'soup', price: 10 },
      { id: '2', name: 'adult-1', price: 11 },
      { id: '3', name: 'adult-2', price: 12 },
      { id: '4', name: 'adult-3', price: 13 },
      { id: '5', name: 'children-1', price: 14 }
    ]
  }),
  withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ menus }) => {
      const values = {
        customerName: '',
        customerNotes: '',
        preSaleCards: 0
      }
      menus.map(menuItem => {
        values[menuItem.name] = 0
      })

      return values
    },
    handleSubmit: (
      { customerName, customerNotes, preSaleCards },
      { resetForm }
    ) => {
      // TODO: Handle Apollo GraphQL mutation here to submit data to backend
      console.log('The customer name is', customerName)
      console.log('The customer note says', customerNotes)
      console.log('The customer has this many cards:', preSaleCards)
      resetForm()
    }
  })
)(OrderForm)
