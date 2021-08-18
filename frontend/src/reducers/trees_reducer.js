<<<<<<< HEAD
import { RECEIVE_TREES, RECEIVE_USER_TREE, RECEIVE_NEW_TREE } from '../actions/tree_actions';

  
  const TreesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_TREES:
        return Object.assign(newState, action.trees.data)
      // case RECEIVE_USER_TREE:
      //   newState.user = action.tree;
      //   return newState;
      case RECEIVE_NEW_TREE:
        newState[action.leaf.id] = action.leaf.data;
        return newState;
      default:
        return state;
    }
  };
  
=======
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
  
>>>>>>> 18023da50a5d19ade5862c7fc9a4ca98140e5573
  export default TreesReducer;