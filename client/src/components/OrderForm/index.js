import OrderForm from './OrderForm'
import { withFormik } from 'formik'

export default withFormik({
  mapPropsToValues: () => ({ customerName: '', customerNotes: '' }),
  handleSubmit: ({ customerName, customerNotes }, { resetForm }) => {
    // TODO: Handle Apollo GraphQL mutation here to submit data to backend
    console.log('The customer name is', customerName)
    console.log('The customer note says', customerNotes)
    resetForm()
  }
})(OrderForm)
