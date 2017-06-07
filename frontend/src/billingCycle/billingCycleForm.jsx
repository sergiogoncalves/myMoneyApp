import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component = 'input' placeholder="Name" /> 
                    <Field name='month' component = 'input'  placeholder="Month" />
                    <Field name='year' component = 'input'  placeholder="Year" />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'> Submit</button>
                </div>

            </form>
        )
    }
}
//export default BillingCycleForm
export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)