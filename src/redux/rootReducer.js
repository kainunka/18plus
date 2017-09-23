import { combineReducers } from 'redux';
import start from './reducers/start.reducer';

const rootReducer = combineReducers({
    start,
});

export default rootReducer;