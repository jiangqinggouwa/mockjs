import React from 'react'
import { reduxForm,Field } from 'redux-form'
import submit from './submit'
class RemoteSubmitForm extends React.Component<any>{
    constructor(props){
        super(props)
    }
    render(){
        const renderField = ({input,label,type,meta:{touched,error}}) => (
            <div>
                <label>{label}</label>
                <input {...input} placeholder={label} type={type} />
                {touched && error && (<span>{error}</span>)}
            </div>
        )
        const { handleSubmit,pristine,submitting,error } = this.props
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                      name="username"
                      type="text"
                      label="Username"
                      component={renderField}
                    />
                    <Field
                      name="password"
                      type="text"
                      label="Password"
                      component={renderField}
                    />
                </div>
            </form>
        )
    }
}
export default reduxForm({
    form:'remoteSubmit',
    onSubmit:submit 
})(RemoteSubmitForm)