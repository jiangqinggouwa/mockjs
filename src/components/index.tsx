import React from 'react'
import { Router,Route,Link } from 'react-router-dom'
export default class Main extends React.Component<any>{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/register'>注册</Link></li>
                <li><Link to='/login'>登录</Link></li>
            </ul>
        )
    }
}