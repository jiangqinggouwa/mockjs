import React , {Component} from 'react'
import { connect } from 'react-redux'
import { click } from '../store/actions/action'
class asyncText extends Component<any,any>{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props);
        console.log(this.state);
        
    }
    render(){
        const { text,dispatch } = this.props
        return(
            <div>
            <div>点击看看，会发生什么</div>
            <button onClick={() => dispatch(click('change after 1s'))}>点击&nbsp;</button>
            <span>{text}</span>
          </div>
        )
    }
}
const mapStateToProps =(state,ownProps)=> ({
    text:state.text
})
export default connect(mapStateToProps)(asyncText)