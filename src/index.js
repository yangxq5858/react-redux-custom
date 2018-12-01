import React,{Component} from 'react';
import {render} from 'react-dom';

class Clock extends Component{


    handleChange = () =>{
        debugger;

        let a = parseInt(this.a.value) || 0;
        let b = parseInt(this.b.value) || 0;
        this.c.value = a + b;

        console.log(this.refs.test.value); //直接获取ref的值

        console.log(this);
    }



    render(){

        //ref={ref=>this.a=ref} 表示在Clock类中声明了一个a属性，并赋值为当前的input
        return (
            <div onChange={this.handleChange}>
                <input type='test' ref={ref=>this.a=ref} /> +
                <input type='test' ref={ref=>this.b=ref}/> =
                <input type='test' ref={ref=>this.c=ref}/>

                <input type='test' ref="test"/>

            </div>
        )
    }



}

render(<Clock name='yxq' />,document.getElementById('root'));













































