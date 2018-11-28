import React from 'react';
import {store} from '../store'
import {INC,DEC} from '../actions'

/**
 * 声明一个React组件
 *
 */
export default class Counter extends React.Component{
    state={
        value: store.getState().counter.number
    }

    //react的组件装载事件 ---> 启用监听
    componentWillMount(){
        //订阅返回一个卸载订阅的方法
        this.unSubscribe = store.subscribe(()=>{
            this.setState({
                value:store.getState().counter.number
            })
        });
    }

    //react的组件卸载事件 ---> 禁用监听
    componentWillUnMount(){
        this.unSubscribe();
    }

    render(){
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={()=>{store.dispatch({type:INC,amount:3})}}>+</button>
                <button onClick={()=>{store.dispatch({type:DEC,amount:1})}}>-</button>
            </div>
        );
    }
}



















