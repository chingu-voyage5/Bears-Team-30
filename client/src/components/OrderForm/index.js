import OrderForm from './OrderForm'
import { withFormik } from 'formik'
import { defaultProps, compose } from 'recompose'

const setMenuInitialValues = (menus, values) =>
  menus.map(menuItem => {
    values[menuItem.name] = 0
    return null
  })

export default compose(
  defaultProps({
    soup: [{ id: '1', name: 'soup', price: 10 }],
    adult: [
      { id: '2', name: 'adult-1', price: 11 },
      { id: '3', name: 'adult-2', price: 12 },
      { id: '4', name: 'adult-3', price: 13 }
    ],
    child: [
      { id: '5', name: 'children-1', price: 14 },
      { id: '6', name: 'children-2', price: 14 }
    ]
  }),
  withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ soup, adult, child }) => {
      const values = {
        customerName: '',
        customerNotes: '',
        preSaleCards: 0
      }
      setMenuInitialValues(soup, values)
      setMenuInitialValues(adult, values)
      setMenuInitialValues(child, values)
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
