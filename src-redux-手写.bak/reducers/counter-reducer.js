import {INC,DEC} from '../actions'

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

export default reducer;