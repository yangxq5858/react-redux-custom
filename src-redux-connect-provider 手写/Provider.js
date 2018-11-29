import React from 'react';
import {PropTypes} from 'prop-types';

class Provider extends React.Component{

    getChildContext(){
        return {store:this.props.store};
    }


    //渲染所有的子组件就可以了
    render(){
       return this.props.children;
    }
}

//注意，父组件是用  childContextTypes
Provider.childContextTypes  = {
    store:PropTypes.object
}

export default Provider;