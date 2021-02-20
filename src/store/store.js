import { combineReducers, createStore } from 'redux';
import titleReducer from './titleReducer';
import fieldReducer from './fieldReducer';

let reducers = combineReducers({
    field: titleReducer,
    game: fieldReducer
})
const store = createStore(reducers);

export default store;