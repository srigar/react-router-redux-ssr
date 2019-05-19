import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducers from './userReducer';

export default combineReducers({
    users: userReducers,
    authStatus: authReducer
});