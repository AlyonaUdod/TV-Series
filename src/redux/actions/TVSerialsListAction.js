import * as actionTypes from '../actions/types';
import { getSerialsList, getSerialInfo } from '../api/apiTVMaze';

export const queryTVSerials = (param) => dispatch => {
    return getSerialsList(param)
    .then(res => dispatch(seachVideo(res.data)))
    .catch(err=> console.error(err));
};

export function seachVideo(data) {
    if(data.length !== 0) {
        return {
            type: actionTypes.SEACH_VIDEO, 
            payload: data,
         };
    } else{
        return {
            type: actionTypes.ADD_ERROR, 
            payload: 'No TV Serial was found, try again',
         };
    }
};

export function clearSeach(){
    return {
        type: actionTypes.CLEAR_SEACH_VIDEO,
        payload: {},
    };
};