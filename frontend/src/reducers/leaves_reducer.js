import { RECEIVE_LEAVES, RECEIVE_LEAF } from '../actions/leaf_actions';

const LeavesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_LEAVES:
            // let leaves = action.leaves.data.map(leaf => [leaf._id] = leaf});
            let leaves = {};
            for(const leaf in action.leaves.data){
                leaves[action.leaves.data[leaf]._id] = action.leaves.data[leaf];
            }
            return Object.assign(newState, leaves);
        // case RECEIVE_USER_LEAVES:
        //     newState.user = action.leaves;
        //     return newState;
        case RECEIVE_LEAF:
            newState.entities.leaves[action.leaf.data._id] = action.leaf.data;
            return newState;
        default:
            return state;
    }
};

export default LeavesReducer;