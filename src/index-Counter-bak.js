import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import {createStore} from "redux";
import reducer from './reducers/counter-reducer'
import Provider from './Provider'
let store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <Counter/>
    </Provider>
    ,document.getElementById('root'));


















