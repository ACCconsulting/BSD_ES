import {combineReducers} from 'redux';
import crudReducer from './crudReducers';

export default combineReducers({
    crud:crudReducer
});

