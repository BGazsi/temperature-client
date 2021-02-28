import { combineReducers } from 'redux';
import load from './loadReducer';

const rootReducer = combineReducers({
  load,
});

export default rootReducer;
