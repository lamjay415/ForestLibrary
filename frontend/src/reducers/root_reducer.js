import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducers';
import entities from './entities_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  entities,
});

export default RootReducer;