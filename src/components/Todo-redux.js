import React from 'react';
import {store} from '../store'
import {ADD_TODO,DEL_TODO} from '../actions'

/**
 *
 * 这个类是采用redux来改写组件数据的状态
 *
 *
 */
export default class TodoRedux extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    }



    handleAdd = (event) =>{
        if (event.keyCode === 13 && event.target.value.length > 0){

            store.dispatch({type:ADD_TODO,text:event.target.value});
            event.target.value = '';
        }

    }

    handleDel = (index) => {
        store.dispatch({type:DEL_TODO,index});
    }


    //组件装载时，订阅
    componentWillMount(){
        this.unSubscribe = store.subscribe(()=>{
            this.setState({list:store.getState().todo.list});
        })
    }

    //卸载订阅
    componentWillUnMount(){
        this.unSubscribe();
    }


    render(){
        const {list} = this.state;

        return(
            <div>
                <input type='text' onKeyDown={this.handleAdd}/>
                <ul>
                    {
                        list.map((todo,index)=> (<li key={index}>{todo} <button onClick={()=>this.handleDel(index)}>{index}</button></li>))
                    }
                </ul>
            </div>
        )
    }


}
