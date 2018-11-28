import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from "./redux";

/**
 *
 * redux 和 React 如何结合
 *
 *
 */

const INC = 'INC';
const DEC = 'DEC';

//计数器的一个reducer
//这里定义的state为一个简单对象{number：0}
//这里的action为一个纯对象{type：xxx，yyy：mm}，type属性必须要有。

//假如：action对象为{type:'INC'，amount:2)
const reducer = (state = {number: 0}, action) => {
    if (action === undefined) return state; //当初始化时，没有传入action时，取默认值

    switch (action.type) {
        case INC:
            return {number: state.number + action.amount};
        case DEC:
            return {number: state.number - action.amount};
        default:
            return state;
    }
};


let store = createStore(reducer);


/**
 * 声明一个React组件
 *
 */

/** 处理方式一
class Counter extends React.Component{
    render(){
        return (
            <div>
                <p>{store.getState().number}</p>
                <button onClick={()=>{store.dispatch({type:INC,amount:3})}}>+</button>
                <button onClick={()=>{store.dispatch({type:DEC,amount:1})}}>-</button>
            </div>
        );
    }
}

let render = () =>{
    ReactDOM.render(<Counter />,document.querySelector('#root'));
};

render();  //渲染到dom中

// 注意：这里render，不能写为render(),因为订阅的是一个回调的方法名
store.subscribe(render); //订阅 store的渲染方法，触发页面刷新


**/
class Counter extends React.Component{
    state={
        number: 0
    }

    //react的组件装载事件 ---> 启用监听
    componentWillMount(){
        //订阅返回一个卸载订阅的方法
        this.unSubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState().number
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

ReactDOM.render(<Counter/>,document.getElementById('root'));


















