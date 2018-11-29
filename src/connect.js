import React from 'react';
import {PropTypes} from 'prop-types';

/**
 * store 使用 this.context.store
 * @param mapStateToProps 把store中的state映射为组件的属性
 * @param mapDispatchToProps 把store中的dispatch映射为组件的一个属性，这个属性的值为一个 func
 * @returns {function(*): *}
 */
let connect = (mapStateToProps,mapDispatchToProps) => (_component) => {

    class Proxy extends React.Component{
        constructor(){
            super();

            // this.state = {...mapStateToProps(store.getState())} 等同于下面的写法
            this.state = {};
        }

        componentWillMount(){
            //store.subscribe(render());
            this.unSubscribe = this.context.store.subscribe(() => {
                this.setState({...mapStateToProps(this.context.store.getState())});
            })
        }

        componentWillUnMount(){
            this.unSubscribe();
        }


        //渲染传入的老组件
        render(){

            //这句很重要， ...this.state 解构为每个属性，再传递到组件中的 props
            return <_component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}/>
        }
    }

    //约束 组件的 contextTypes
    Proxy.contextTypes={
        store:PropTypes.object
    }

    return Proxy;
}

export default  connect;