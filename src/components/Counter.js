import React from 'react';
import {store} from '../store'
import {INC,DEC} from '../actions'

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
                <button>+</button>

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


/**
 *
 * @param mapStateToProps 把store中的state映射为组件的属性的一个 func
 * @returns {function(*): *}
 */
let connect = (mapStateToProps) => (_component) => {

    class Proxy extends React.Component{
        constructor(){
            super();

            // this.state = {...mapStateToProps(store.getState())} 等同于下面的写法
            this.state = mapStateToProps(store.getState());

        }

        //渲染传入的老组件
        render(){
            //这句很重要， ...this.state 解构为每个属性，再传递到组件中的 props
            return <_component {...this.state}/>
        }


    }

    return Proxy;


}

//这里的state，是store中的state，看上面的调用处
let mapStateToProps = (state) => {
    return { value:state.counter.number}
}



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


let Counter = connect(mapStateToProps)(Counter2);

export default Counter;














