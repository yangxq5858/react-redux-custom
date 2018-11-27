import React from 'react';
import {store} from '../store'
import {INC,DEC} from '../actions'

/**
 * 声明一个React组件
 *
 */
export default class Counter extends React.Component{
    state={
        number: 0
    }

    //react的组件装载事件 ---> 启用监听
    componentWillMount(){
        //订阅返回一个卸载订阅的方法
        this.unSubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState().counter.number
            })
        });
    }

    //react的组件卸载事件 ---> 禁用监听
    componentWillUnMount(){
        this.unSubscribe();
    }




    render(){
        //这个箭头函数就是一个action Creator
        let increase = (amount) => ({type:INC,amount});
        //等价于
        //let increase = (amount) => { return {type:INC,amount}};



        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={()=>{store.dispatch(increase(2))}}>+</button>
                <button onClick={()=>{store.dispatch({type:DEC,amount:1})}}>-</button>
            </div>
        );
    }
}



















