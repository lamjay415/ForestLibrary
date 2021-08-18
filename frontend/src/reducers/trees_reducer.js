import { RECEIVE_TREES, RECEIVE_USER_TREE, RECEIVE_NEW_TREE } from '../actions/tree_actions';

  
  const TreesReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_TREES:
        newState.all = action.tree.data;
        return newState;
      case RECEIVE_USER_TREE:
        newState.user = action.tree.data;
        return newState;
      case RECEIVE_NEW_TREE:
        newState.new = action.tree.data
        return newState;
      default:
        return state;
    }
  };
  
  export default TreesReducer;