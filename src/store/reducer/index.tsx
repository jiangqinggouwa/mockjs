// import { createStore,combineReducers } from 'redux'
// import { reducer as formReducer }　from 'redux-form'
// const reducer = combineReducers({
//     form:formReducer
// })

// const store = createStore(reducer)
// export default store
export default function reducer(state={text:'init'},action){
    switch(action.type){
        case 'async':
            console.log(state);
            
            return{
                ...state,
                text:action.value
            }
        default :
        return state
    }
}