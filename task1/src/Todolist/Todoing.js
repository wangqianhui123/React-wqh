import React, { Component } from 'react'

const num=0;

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <div> 
                        <h1>正在进行</h1>
                        <ul>
                            {
                               this.props.todo.map((item,idx)=><li key={idx}><input type="checkbox"  onClick={()=>{this.props.delTodo(idx);this.props.addlist(item)}}></input>{item}----<button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li> )
                            }
                       </ul>
                       <div>{this.props.todo.length}</div>
                </div>
                <div> 
                        <h1>已经完成</h1>
                        <ul>
                         {
                              this.props.list.map((item,idx)=><li key={idx}><input  type="checkbox"  onClick={()=>{this.props.dellist(idx);this.props.addTodo(item)}}></input>{item}----<button onClick={()=>{this.props.dellist(idx)}}>删除</button></li>)
                          }
                        </ul>
                        <div>{this.props.list.length}</div>
                </div>
            </div>
        )
    }
}