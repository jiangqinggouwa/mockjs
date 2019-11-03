import React from 'react'
import { Field,reduxForm } from 'redux-form'
class Login extends React.Component<any>{
    constructor(props){
        super(props)
    }    
    render(){
        const renderField = ({input,type,label,meta:{touched,error}}) =>(
            <div>
                <label>{label}</label>
                <input {...input} type={type} placeholder={label}/>
                { touched && error && (<span>{error}</span>)}
            </div>
        )
        const { handleSubmit,error,pristine,submitting,reset } = this.props
        return(
            <form onSubmit={handleSubmit}>
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
                {error && (<span>{error}</span>)}
                <div>
                    <button type="submit" disabled={pristine}>submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>clear</button>
                </div>
            </form>
        )
    }

}
export default reduxForm({
    form:'login'
})(Login)