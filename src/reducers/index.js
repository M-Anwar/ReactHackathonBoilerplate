import { combineReducers } from 'redux';
import HomeReducer from './reducer-home';


const allReducers = combineReducers({
    home: HomeReducer
});

export default allReducers;
