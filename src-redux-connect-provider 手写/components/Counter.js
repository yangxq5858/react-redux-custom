import React from 'react';
import {INC,DEC} from '../actions'
import connect from '../connect'
/**
 * 声明一个React组件
 *
 */
class Counter2 extends React.Component{
    render(){
        return (
            <div>
                {/*老的组件，内部没有state了，只有外面传入的属性*/}
                {/*老的组件，就可以得到外面传入的属性了*/}

                <p>{this.props.value}</p>
                {/*注意，onClick 也是 等于 一个 func，故不能加 ()*/}
                <button onClick={this.props.onInc}>+</button>
                <button onClick={this.props.onDec}>-</button>

                {/*<button onClick={()=>{store.dispatch({type:INC,amount:3})}}>+</button>*/}
                {/*<button onClick={()=>{store.dispatch({type:DEC,amount:1})}}>-</button>*/}
            </div>
        );
    }
}

/**
 *   模拟一个 let CounterApp = connect()(Counter) 的调用方式，返回一个新的组件
 *
 *   说明：connect() 后面还有一个 (Counter) 说明 Connect() 返回的是一个函数(并且带有一个参数，这个参数就是代表原来的组件），
 *
 *   connect =  () => 箭头函数 ，表示第一个匿名函数（无参数）返回的是一个箭头函数，而不是一个对象
 */




//将 state 映射为 属性
//这里的state，是store中的state，看上面的调用处
let mapStateToProps = (state) => {
    return { value:state.number}
}

//将 Dispatch 映射为 属性
let mapDispatchToProps = (dispatch) => (
    {
        //属性后面是一个箭头函数
        onInc: () => dispatch({type:INC}),
        onDec: () => dispatch({type:DEC,amount:1})
    }
)

/**
 *  帮助理解如何将store中的属性转换为组件中state的值
let _state = {number:15};

let mapStateToProps = (state) => ({
    value:state.number
})

let myState = mapStateToProps(_state);
let myState1 = {...mapStateToProps(_state)};
console.log(myState);   //输出 {value: 15}
console.log(myState1);  //输出 {value: 15}

 **/


let Counter = connect(mapStateToProps,mapDispatchToProps)(Counter2);

export default Counter;