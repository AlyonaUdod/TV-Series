import {combineReducers} from 'redux';
import TVSerialsList from './TVSerialsListReducer';
import queryText from './queryTextReducer';
import queryError from './errorReducer';
import currentSerial from './currentSerialReducer';

const rootReducers = combineReducers({
    TVSerialsList,
    queryText,
    queryError,
    currentSerial,
});

export default rootReducers;