import {combineReducers} from 'redux';
import TVSerialsList from './TVSerialsListReducer';
import queryText from './queryTextReducer';
import queryError from './errorReducer';

const rootReducers = combineReducers({
    TVSerialsList,
    queryText,
    queryError,
});

export default rootReducers;