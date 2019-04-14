import * as actionTypes from './types';

export function addCurrentSerial(obj){
    return {
        type: actionTypes.ADD_CURRENT_SERIAL,
        payload: obj,
    };
};

export function clearCurrentSerial(){
    return {
        type: actionTypes.CLEAR_CURRENT_SERIAL,
        payload: {},
    };
};