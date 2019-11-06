import React, { Component } from 'react';
import url from 'url';


export default class Context extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
        //this.getUrl = this.getUrl.bind(this);
    }
    componentDidMount(){
        var query=url.parse(this.props.location.search,true).query;
        console.log(query.id);
        fetch('https://cnodejs.org/api/v1/topic/'+query.id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })

    }

    render() {  
        return (
            <div className='title'>
                <h1>{this.state.data.title}</h1>
                {
                     <div style={{marginLeft:20}} dangerouslySetInnerHTML={{__html:this.state.data.content}} ></div>  
                }     
            </div>
        )
    }
}

