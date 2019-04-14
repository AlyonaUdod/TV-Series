import * as actionTypes from '../actions/types';

export default function currentSerial(state={}, action){
    switch (action.type) {
        case actionTypes.ADD_CURRENT_SERIAL:
            return action.payload;
        case actionTypes.CLEAR_CURRENT_SERIAL:
            return action.payload;
        default: 
            return state;
    };
};