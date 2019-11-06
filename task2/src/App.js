import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/home/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Record from './container/Record'
import Context from './container/home/Context';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/record' component={Record}/>
                            <Route path='/context' component={Context}/>
                        </div>
                        <div className="sider">
                            <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                            <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                            <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                        </div>
                    </div>
                    <div className='bottom'></div>
                </div>
            </Router>
        )
    }
}