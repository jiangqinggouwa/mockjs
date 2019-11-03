const validate = values =>{
    const errors:any = {}
    if(!values.username){
        errors.username="Required"
    }else if(!values.password){
        errors.password="Required"
    }
    return errors
}
export default validate