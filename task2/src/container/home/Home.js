import React, { Component } from 'react'
import {Link,Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Good from './Good';
import All from './All';
import Share from './Share';
import Ask from './Ask';
import Job from './Job';
import './Home.css';
import Context from './Context';

export default class Home extends Component {
    render() {
        let url = this.props.match.url
        return (
            <div>
                <div className='secondroute'>
                    <NavLink activeStyle={{background:'green',color:'#fff',fontSize:15}} to={url+'/all'}>全部</NavLink>
                    <NavLink activeStyle={{background:'green',color:'#fff',fontSize:15}} to={url+'/good'}>精华</NavLink>
                    <NavLink activeStyle={{background:'green',color:'#fff',fontSize:15}} to={url+'/share'}>分享</NavLink>
                    <NavLink activeStyle={{background:'green',color:'#fff',fontSize:15}} to={url+'/ask'}>问答</NavLink>
                    <NavLink activeStyle={{background:'green',color:'#fff',fontSize:15}} to={url+'/job'}>招聘</NavLink>
                    <NavLink activeStyle={{background:'green',color:'#fff',fontSize:15}} to={url+'/test'}>客户端测试</NavLink>
                </div>
                <div>
                    <Switch>
                    <Route exact path={url} component={All} />
                    <Route path={url+'/all/:page'} component={All} />
                    <Route path={url+'/good/:page'} component={Good} />
                    <Route path={url+'/share/:page'} component={Share} />
                    <Route path={url+'/ask/:page'} component={Ask} />
                    <Route path={url+'/job/:page'} component={Job} />
                    <Route path='/context' component={Context}/>
                    <Redirect from={url+'/all'} to={url+'/all/1'}></Redirect>
                    <Redirect from={url+'/good'} to={url+'/good/1'}></Redirect>
                    <Redirect from={url+'/share'} to={url+'/share/1'}></Redirect>
                    <Redirect from={url+'/ask'} to={url+'/ask/1'}></Redirect>
                    <Redirect from={url+'/job'} to={url+'/job/1'}></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}