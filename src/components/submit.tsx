import { SubmissionError } from 'redux-form'
const sleep = ms => new Promise(resolve=>setTimeout(resolve,ms))
export default function submit(values){
    return sleep(1000).then(()=>{
        if(['john','lily'].includes(values.username)){
            throw new SubmissionError({
                username:'username is exist',
                _error:'login failed'
            })
        }else if(values.password !== 'redux-form'){
            throw new SubmissionError({
                password:'wrong password',
                _error:'login failed'
            })
        }else{
            window.alert(`you will submittd ${JSON.stringify(values,null,2)}`)
        }
    })
}