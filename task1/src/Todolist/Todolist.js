import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';
var strtodo='';
var strlist='';
var arrtodo=[];
var arrlist=[];
for(var i=0;i<localStorage.length;i++){
    if(localStorage.key(i)==='todo'){
        arrtodo=arrtodo.concat(localStorage.getItem(localStorage.key(i)));
    }
    else{
        arrlist=arrlist.concat(localStorage.getItem(localStorage.key(i)));
    }
}

console.log(arrtodo[0]);
console.log(arrlist);
console.log(typeof(arrtodo[0]));

arrtodo[0]!=undefined? arrtodo=arrtodo[0].split(","):arrtodo=[];
arrlist[0]!=undefined? arrlist=arrlist[0].split(","):arrlist=[];


export default class Todolist extends Component {
    constructor(){
        super();
        this.state = { 
            todo: arrtodo,
            list: arrlist
        }
    }
    addItem = (msg)=>{
        this.setState({
            todo: [...this.state.todo,msg]
            
        },()=>{
            arrtodo=arrtodo.concat(msg);
            localStorage.setItem('todo',arrtodo);
        })
    }
    addsItem=(msg)=>{
        this.setState({
            list:[...this.state.list,msg]
        },()=>{
            arrlist=arrlist.concat(msg);
            localStorage.setItem('list',arrlist);
        })
    }
    delItem = (a)=>{
        this.state.todo.splice(a,1);
        this.setState({
            todo: this.state.todo
        },()=>{
            localStorage.setItem('todo',this.state.todo);
            if(this.state.todo.length==0){
                localStorage.removeItem('todo');
            }
        })
    }
    delsItem=(a)=>{
        this.state.list.splice(a,1);
        this.setState({
            list:this.state.list
        },()=>{
            localStorage.setItem('list',this.state.list);
            if(this.state.list.length==0){
               localStorage.removeItem('list');
            }
        })
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo} dellist={this.delsItem} list={this.state.list} addlist={this.addsItem}
                addTodo={this.addItem} />
            </div>
        )
    }
}