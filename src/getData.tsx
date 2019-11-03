import React, {Component} from'react'
import './mock.js'
import axios from 'axios'
class Mock extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = { 
            gData: null,
            pData: null
         };
    this.getDate2 = this.getDate2.bind(this)
    }

   

    getDate2 () {
        axios.post('/postdata1', {
            params: {
                name: 'jack'
            }
        })
        .then((res)=>{
            console.log(res.data)
            this.setState({
                pData: res.data.message
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    render() {
        return (
            <div>
                <h3>数据展示</h3>
                <p>get：{ this.state.gData == null ? '无' :  this.state.gData }</p>
                <p>post: { this.state.pData == null ? '无' :  this.state.pData } </p>

                
                <br /><br />
                <button onClick={ this.getDate2 } >点击获取(Post)Mock数据</button>
            </div>
        );
    }
}

export default Mock;