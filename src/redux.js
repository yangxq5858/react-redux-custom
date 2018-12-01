
//创建仓库
/**
 * store中有2个对象:
 *    1. state（全局只有一个state，但它可以保存为一个对象树，什么数据都可以保存）
 *       一个state对应一个view（外部传入的），故state的结构是要变化的。
 *
 *    2. reducer处理器（外部传入）
 *
 * @param reducer 处理器（具体业务的，必须传入）
 *        reducer：需要获取
 *
 *
 */
const createStore = (reducer)=>{
    //内部保存一个状态
    let state;

    //获取当前状态
    let getState = () => state;

    //订阅者
    let listeners = [];
    //订阅（传入一个监听函数对象 func）
    let subscribe = (listener) =>{
        //订阅后，将监听函数压入到内部的 监听数组中
        listeners.push(listener);

        //订阅后，要返回一个 取消订阅的函数回去
        return (listener) => {

            //这里是过滤不等于当前订阅的函数，即从订阅函数数组中移除当前订阅者。
            listeners = listeners.filter(l=> l!==listeners);
        }
    }

    //向仓库发送action --给-> reducer 进行处理，返回一个新的state
    //通过reducer(state,action)方法，就可以知道reducer必须接收2个参数(老的state和action对象）
    let dispatch = (action) => {

        //reducer接收action，并处理后，返回一个新的state
        state = reducer(state,action); //这里将新的state赋值给内部的state

        //当状态更新后，监听数组中（即订阅者，执行各自的订阅方法）
        listeners.forEach((listener)=>listener());
    }

    //返回值，可以返回一个箭头函数，其实也是一个对象
    return {
        getState,
        dispatch,
        subscribe
    }
}


/**
 *
 * logger 的定义， 第一个参数为老的store，第二个参数为store.dispatch
 * let logger = store => next => action =>{
 * }
 *
 *applyMiddleware的应用
 * let store = applyMiddleware(logger)(store.createStore)(reducer);
 * @param middleWare
 * @returns {function(*): function(*=): {dispatch: *}}
 */
//应用中间件 对store 增强，返回一个对 dispath 增强的 store
/*let applyMiddleware = (logger) => {
    return (createStore) => (reducer) => {
        let store = createStore(reducer);
        let dispatchFunc = logger(store); //返回是nextFunc，nextFunc = (next 或叫 dispatch) => action => {}
        let dispatch = dispatchFunc(store.dispatch);

        return {
            ...store,dispatch //表示把新的dispatch，覆盖老的store的dispatch方法
        }
    }
}*/

/**
 *
 * @param logs 传入多个中间件
 * @returns {function(*): function(*=): {dispatch: *}}
 */


let applyMiddleware = (...logs) => {
    return (createStore) => (reducer) => {
        let store = createStore(reducer);
        logs.map(l=>l(store));

        let dispatch = compose(...logs,store.dispatch);

        return {
            ...store,dispatch //表示把新的dispatch，覆盖老的store的dispatch方法
        }
    }
}

export {createStore,applyMiddleware}