import { combineReducers } from 'redux';
import GetImgReducer from './GetImgReducer';

const allReducers = combineReducers({
    GetImgReducer: GetImgReducer,
})

export default allReducers;
