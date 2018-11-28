import $ from 'jquery'
import {createStore} from "./redux";

/***
 *  这里只用到了redux，没有使用react
 *
 */

$('#root').append(`
   <p id="counter">123</p>
   <button id="incBtn">+</button>
   <button id="decBtn">-</button>
`);

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
store.dispatch();
console.log(store.getState());

let render = () =>{
    $('#counter').html(store.getState().number);
};

//当仓库里的state变化后，订阅重新render，刷新视图
store.subscribe(render);


$('#incBtn').click(
    () => {store.dispatch({type:INC,amount:2})}

);

$('#decBtn').click(
    () => {store.dispatch({type:DEC,amount:1})}
);

render();

// ReactDOM.render(
//     (
//        <MyApp num = {store.getState().number} />
//     ),
//     document.getElementById('root'))



