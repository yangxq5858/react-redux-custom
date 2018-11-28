import React from 'react';


/**
 *
 * 这个类是通过修改 内部的 state 来改变视图，没有使用Redux
 *
 *
 */
export default class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:['吃饭','睡觉']
        }
    }

    handleClick = (event) =>{
        if (event.keyCode === 13 && event.target.value.length > 0){
            let inputVal = event.target.value;
            let list = this.state.list;
            list.push(inputVal);
            this.setState({list});
            event.target.value = '';
        }

    }

    render(){
        return(
            <div>
                <input type='text' onKeyDown={this.handleClick}/>
                <ul>
                    {
                        this.state.list.map((todo,index)=> (<li>{todo}</li>))
                    }
                </ul>
            </div>
        )
    }


}
