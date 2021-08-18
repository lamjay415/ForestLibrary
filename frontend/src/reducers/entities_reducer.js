import { combineReducers } from 'redux';

import TreesReducer from "./trees_reducer";
import LeavesReducer from './leaves_reducer';
export default combineReducers({
  trees: TreesReducer,
  leaves: LeavesReducer,
});