import React from 'react'
import { connect } from 'react-redux'
import { Field,reduxForm,formValueSelector } from 'redux-form'
class SelectingFormValuesForm extends React.Component<any>{
    constructor(props){
        super(props)
    }
    render(){
        const { favoriteColorValue,fullName,handleSubmit,hasEmailValue,pristine,reset,submitting } = this.props
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Firsr Name</label>
                    <div>
                        <Field
                          name="firstName"
                          component="input"
                          type="text"
                          placeholder="First Nmae"
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field
                          name="lastname"
                          component="input"
                          type="text"
                          placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="hasEmail">has Email?</label>
                        <Field
                          name="hasEmail"
                          id="hasEmail"
                          component="input"
                          type="checkbox"
                        />
                    </div>
                    {hasEmailValue && (
                        <div>
                            <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
                            />
                        </div>
                    )}
                    <div>
                        <label>Favorite Color</label>
                        <div>
                            <Field name="favoriteColor" component="select">
                                <option/>
                                <option value="#ff0000">Red</option>
                                <option value="#00ff00">Greeb</option>
                                <option value="#0000ff">Blue</option>
                            </Field>
                        </div>
                    </div>
                    {favoriteColorValue && (
                        <div
                          style={{
                              height:80,
                              width:200,
                              margin:'10px auto',
                              backgroundColor:favoriteColorValue
                          }}/>
                    )}
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting }>Submit {fullName}</button>
                    <button type="button" disabled={ pristine || submitting } onClick={reset}>Clear</button>
                </div>
            </form>
        )
    }
}
let ReduxForm = reduxForm({
    form:'selectingFormValues'
})(SelectingFormValuesForm)
const selector = formValueSelector('selectingFormValues')
ReduxForm = connect(state =>{
    const hasEmailValue = selector(state,'hasEmail')
    const favoriteColorValue = selector(state,'favoriteColor')
    const { firstName,lastName } = selector(state,'firstName','lastName')
    return{
        hasEmailValue,
        favoriteColorValue,
        fullName:`${firstName || ''} ${lastName || ''}`
    }
})(ReduxForm)
export default ReduxForm