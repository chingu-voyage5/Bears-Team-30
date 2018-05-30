import OrderForm from './OrderForm'
import { withFormik } from 'formik'

export default withFormik({
  mapPropsToValues: () => ({
    customerName: '',
    customerNotes: '',
    preSaleCards: 0
  }),
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
})(OrderForm)
