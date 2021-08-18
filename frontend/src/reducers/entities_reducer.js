import { combineReducers } from 'redux';

import TreesReducer from "./trees_reducer";

export default combineReducers({
  trees: TreesReducer
});