import React, { Component } from 'react';
import {NavLink,Link,Route} from 'react-router-dom';

export default class Good extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page!==this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                        this.setState({data:res.data});
                    })
        }
    }
    render() {
        return (
            <div className="all">
                {
                    this.state.data.map((item)=>(
                        item.tab=='ask'&&
                        <li className='allapi'>
                            <img src={item.author.avatar_url}></img>
                            <p>{item.reply_count}/{item.visit_count}</p>
                            <Link style={{marginLeft:20}} dangerouslySetInnerHTML={{__html:item.title}} to={'/context?id='+item.id}></Link>
                            <div className='day'>1天前</div>
                        </li>
                    ))
                }
                {
                    [1,2,3,4,5,6,7,8,9,10].map((page)=>(
                        <li key={page} className='allnum'>
                            <NavLink  to={'/home/ask/'+page}>{page}</NavLink>
                            {/* <Route path='/home/all/:item' component={All}></Route> */}
                        </li>
                    ))
                }
            </div>
        )
    }
}