import {addALeaf, getLeaves, updateLeaf, getLeaf, deleteLeaf} from '../util/leaf_api_util';

export const RECEIVE_LEAVES = "RECEIVE_LEAVES";
// export const RECEIVE_USER_LEAVES = "RECEIVE_USER_LEAVES";
export const RECEIVE_LEAF = "RECEIVE_LEAF";
export const REMOVE_LEAF = "REMOVE_LEAF";

export const receiveLeaves = leaves => ({
    type: RECEIVE_LEAVES,
    leaves
});

// export const receiveUserLeaves = leaves => ({
//     type: RECEIVE_USER_LEAVES,
//     leaves
// });

export const receiveLeaf = leaf => ({
    type: RECEIVE_LEAF,
    leaf
});

export const removeLeaf = leaf => ({
    type: REMOVE_LEAF,
    leaf
})

export const fetchLeaves = () => dispatch => (
    getLeaves()
        .then(leaves => dispatch(receiveLeaves(leaves)))
        .catch(err => console.log(err))
);

export const fetchLeaf = id => dispatch => (
    getLeaf(id)
        .then(leaf => dispatch(receiveLeaf(leaf)))
        .catch(err => console.log(err))
)
// export const fetchUserLeaves = id => dispatch => (
//     getUserLeaves(id)
//         .then(leaves => dispatch(receiveUserLeaves(leaves)))
//         .catch(err => console.log(err))
// );

export const addLeaf = data => dispatch => (
    addALeaf(data)
        .then(leaf => dispatch(receiveLeaf(leaf)))
        .catch(err => console.log(err))
);

export const editLeaf = data => dispatch => (
    updateLeaf(data)
        .then(leaf => dispatch(receiveLeaf(leaf)))
        .catch(err => console.log(err))
)

export const deleteALeaf = data => dispatch => (
    deleteLeaf(data)
        .then(leaf => dispatch(removeLeaf(leaf)))
        .catch(err => console.log(err))
)