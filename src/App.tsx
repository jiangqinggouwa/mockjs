import React from 'react'
import ConcatForm from './components/Form'
import RemoteSubmitForm from './components/RemoteSubmitForm'
import RemoteSubmitButton from './components/RemoteSubmitButton'
export default class ConcatPage extends React.Component{
    constructor(props){
        super(props)
        this.submit=this.submit.bind(this)
    }
    submit(values) {
        fetch('/api/user').then(res => res.json())
     .catch(error => console.error('Error:', error))
     .then(response => console.log('Success:', response));
    }
    render(){
        return(
            <div>
                <ConcatForm onSubmit={this.submit}/>
                <RemoteSubmitForm/>
                <RemoteSubmitButton/>
            </div>
        )
    }
}