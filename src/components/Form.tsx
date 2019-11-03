import React from 'react'
import { Field,FieldArray,reduxForm } from 'redux-form'
const renderField = ({input,label,type,meta:{asyncValidating,touched,error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error &&<span style={{color:'red'}}>{error}</span>}
        </div>
    </div>
)
const renderHobbies = ({fields,meta:{error}}) => (
    <ul>
        <li>
            <button type="button" onClick={()=>fields.push()}>Add Hobby</button>
        </li>
        {fields.map((hobby,index)=>(
            <li key={index}>
                <button type="button" onClick={()=>fields.remove(index)} title="delete"/>
                <Field name={hobby} type="text" component={renderField} label={`hobby#${index+1}`}/>
            </li>
        ))}
        {error&&<li>{error}</li>}
    </ul>
)
const renderMembers = ({fields,meta:{error,submitFailed}})=>(
    <ul>
        <li>
            <button type="button" onClick={()=>fields.push()}>Add Members</button>
            {submitFailed && error && <span>{error}</span>}
        </li>
        {fields.map((member,index)=>(
            <li key={index}>
                <button
                type="button"
                title="Remove Member"
                onClick={() => fields.remove(index)}
                />
                <h4>{`member#${index+1}`}</h4>
                <Field
                name={`${member}.firstName`}
                type="text"
                component={renderField}
                label="First Name"
                />
                <Field
                name={`${member}.lastName`}
                type="text"
                component={renderField}
                label="Last Name"
                />
                <FieldArray name={`${member}.hobbies`} component={renderHobbies} />
            </li>
        ))}
    </ul>
)
class FieldArrayForm extends React.Component<any>{
    constructor(props){
        super(props)
    }
    render(){
        const { error,handleSubmit,pristine,reset,submitting } = this.props 
        return(
            <form onSubmit={handleSubmit}>
                <Field
                 name="clabName"
                 type="text"
                 component={renderField}
                 label="Club Name"
                />
                <FieldArray name="members" component={renderMembers}/>
                {/* {error && <strong style={{color:'green'}}>{error}</strong>} 这一句发生在提交验证上面*/}
                <div>
                    <button type="submit" disabled={submitting}>Log In</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        )
    }
}
export default reduxForm({
    form:'FieldArrayForm',
})(FieldArrayForm)