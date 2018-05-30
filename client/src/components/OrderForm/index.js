import OrderForm from './OrderForm'
import { withFormik } from 'formik'

export default withFormik({
  mapPropsToValues: () => ({ customerName: '' }),
  handleSubmit: ({ customerName }, { resetForm }) => {
    // TODO: Handle Apollo GraphQL mutation here to submit data to backend
    console.log('The customer name is', customerName)
    resetForm()
  }
})(OrderForm)
