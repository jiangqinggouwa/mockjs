import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
const RemoteSubmitButton = ({dispatch}) =>(
    <button type="button" onClick={()=>dispatch(submit('remoteSubmit'))}>submit</button>
)
export default connect()(RemoteSubmitButton)