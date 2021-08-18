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
  
  export default TreesReducer;