import {createStore,applyMiddleware} from "./redux";
import reducer from './reducers/counter-reducer'
import {INC} from './actions'
/*

//记录日志的中间件
let logger = store => next => action =>{
    console.log('befoe',store.getState().number);
    next(action);
    console.log('after',store.getState().number);
}

// 异步任务的中间件
let thunk = store => next => action =>{
    if (typeof action === 'function'){
        action(next);
    }else{
        next(action);
    }
}

let isPromise = obj => obj.then; //表示只要有then方法，表示是promise
let promiseMiddleWare = store => next => action =>{
    if (isPromise(action)){
        action.then((data)=>next(data));
    }else{
        next(action);
    }
}
*/

let logger1 = store => next => action =>{
    console.log('logger1 befoe',store.getState().number);
    next(action);
    console.log('logger1 after',store.getState().number);
}

let logger2 = store => next => action =>{
    console.log('logger2 befoe',store.getState().number);
    next(action);
    console.log('logger2 after',store.getState().number);
}



//放入多个中间件，需要从左 向 右 多个执行
let store = applyMiddleware(logger1,logger2)(createStore)(reducer);
store.subscribe(()=>{
    console.log(store.getState().number);
})

/*
  这个调用是对应 thunk 的应用

   store.dispatch(function(dispatch){
    // setTimeout(function () {
    //     dispatch({type:INC,amount:3})
    // },3000)

    //上面的代码等同于
    setTimeout( () => dispatch({type:INC,amount:3}) ,3000)

});*/

/*store.dispatch(new Promise(function(reslove,reject){
    setTimeout(function () {
        reslove({type:INC,amount:3})
    },3000)
}))*/


store.dispatch({type:INC,amount:1});








































