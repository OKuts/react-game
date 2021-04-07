import { combineReducers, createStore } from 'redux';
import titleReducer from './titleReducer';
import fieldReducer from './fieldReducer';

let reducers = combineReducers({
    titleData: titleReducer,
    fieldData: fieldReducer
})
const store = createStore(reducers);

export default store;