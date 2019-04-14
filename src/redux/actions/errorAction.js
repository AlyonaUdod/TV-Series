import * as actionTypes from './types';

export function getQueryError(){
    return {
        type: actionTypes.ADD_ERROR,
        payload: 'No TV Serial was found, try again',
    };
};

export function clearQueryError(){
    return {
        type: actionTypes.CLEAR_ERROR,
        payload: '',
    };
};