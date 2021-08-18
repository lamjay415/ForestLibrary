import { RECEIVE_TREES, RECEIVE_TREE, RECEIVE_NEW_TREE } from '../actions/tree_actions';

  
  const TreesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_TREES:
        return Object.assign(newState, action.trees.data);
      // case RECEIVE_TREE:
      //   newState[action.trees.id] = action.trees.data;
      //   return newState;
      case RECEIVE_NEW_TREE:
        newState[action.tree.data.id] = action.tree.data;
        return newState;
      default:
        return state;
    }
  };
  
  export default TreesReducer;