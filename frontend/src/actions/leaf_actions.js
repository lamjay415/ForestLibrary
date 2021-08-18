import {addALeaf, getLeaves} from '../util/leaf_api_util';

export const RECEIVE_LEAVES = "RECEIVE_LEAVES";
// export const RECEIVE_USER_LEAVES = "RECEIVE_USER_LEAVES";
export const RECEIVE_NEW_LEAF = "RECEIVE_NEW_LEAF";

export const receiveLeaves = leaves => ({
    type: RECEIVE_LEAVES,
    leaves
});

// export const receiveUserLeaves = leaves => ({
//     type: RECEIVE_USER_LEAVES,
//     leaves
// });

export const receiveNewLeaf = leaf => ({
    type: RECEIVE_NEW_LEAF,
    leaf
})

export const fetchLeaves = () => dispatch => (
    getLeaves()
        .then(leaves => dispatch(receiveLeaves(leaves)))
        .catch(err => console.log(err))
);

// export const fetchUserLeaves = id => dispatch => (
//     getUserLeaves(id)
//         .then(leaves => dispatch(receiveUserLeaves(leaves)))
//         .catch(err => console.log(err))
// );

export const addLeaf = data => dispatch => (
    addALeaf(data)
        .then(leaf => dispatch(receiveNewLeaf(leaf)))
        .catch(err => console.log(err))
);