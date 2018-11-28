import {createStore} from "./redux";
import counter from './reducers/counter-reducer';
import todo from './reducers/todo-reducer';

//将2个reducer合并为1个

//这里的reducers 表示是2个函数数组
let combineReducers = (reducers) =>  //注意，这里没有 {} ，紧接着又是一个箭头函数
    //这里的state组合为{counter:{number:0},todo:{list:list[]}}
    (state = {}, action) => {
        let newState = {};
        for (let key in reducers) {
            //newState[key] 表示给newState赋值一个新的属性，属性名为key
            //reducers[key] 表示数组key = key 的函数
            //state[key] 表示老的state，通过key 对应不同的属性
            newState[key] = reducers[key](state[key], action);
        }
        return newState;
    }


//将2个reducer合并为1个函数数组对象（对象key为函数名，值为函数
let reducer = combineReducers(
    {
        counter,
        todo
    }
);

//创建一个全局的Store，传入参数为：合并后的reducer
let store = createStore(reducer);
console.log(store.getState());
export {store};