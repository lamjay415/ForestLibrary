<<<<<<< HEAD
import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducers';
import entities from './entities_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  entities,
});

=======
import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducers';
import entities from './entities_reducer';
import leaves from './leaves_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  entities,
  leaves
});

>>>>>>> 18023da50a5d19ade5862c7fc9a4ca98140e5573
export default RootReducer;