import { combineReducers, createStore } from 'redux';
import titleReducer from './titleReducer';

let reducers = combineReducers({
    field: titleReducer
})
const store = createStore(reducers);

export default store;