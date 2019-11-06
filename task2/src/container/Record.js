import React, { Component } from 'react';
import {useHistory} from 'react-router-dom';

export default function Record() {
        let history = useHistory();
        return (
            <div class='record'>
                <div className='records'>用户名:  <input type='text'/></div>
                <br/>
                <div className='records'> 密码 :  <input type='passward'/></div>
                <button onClick={()=>{
                    history.push('/home')
                }}>登录</button>
            </div>
        )
    }
