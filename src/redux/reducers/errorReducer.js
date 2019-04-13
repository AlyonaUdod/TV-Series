import * as actionTypes from '../actions/types';

export default function queryError(state='', action){
    switch (action.type) {
        case actionTypes.ADD_ERROR:
            return action.payload;
        case actionTypes.CLEAR_ERROR:
            return action.payload;
        default: 
            return state;
    };
};