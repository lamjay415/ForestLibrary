import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducers';
import leaves from './leaves_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  leaves
});

export default RootReducer;