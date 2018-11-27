import {ADD_TODO,DEL_TODO} from '../actions'

let reducer = (state={list:[]},action) =>{
    switch (action.type) {
        case ADD_TODO:
            state.list.push(action.text);
            return {list:[...state.list]};
        //这也是一种写法
        // return {list:[...state.list,action.text]};
        case DEL_TODO:
            let list = state.list;
            console.log(action.index);
            list.splice(action.index,1); //按索引值删除一个元素
            //这里采用...state.list 来解构数组元素，从而生成一个新的数组，返回；
            //如果不用这种方式，可以采用filter过滤出一个新的
            return {list:[...state.list]};
        default:
            return state;
    }
}

export default reducer;