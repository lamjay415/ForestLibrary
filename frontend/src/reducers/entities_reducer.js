<<<<<<< HEAD
import { combineReducers } from 'redux';

import TreesReducer from "./trees_reducer";
import LeavesReducer from './leaves_reducer';
export default combineReducers({
  trees: TreesReducer,
  leaves: LeavesReducer,
=======
import { combineReducers } from 'redux';

import TreesReducer from "./trees_reducer";

export default combineReducers({
  trees: TreesReducer
>>>>>>> 18023da50a5d19ade5862c7fc9a4ca98140e5573
});