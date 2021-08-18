import { getTrees, getTree, createTree } from '../util/tree_api_util';

export const RECEIVE_TREES = "RECEIVE_TREES";
export const RECEIVE_TREE = "RECEIVE_TREE";
export const RECEIVE_NEW_TREE = "RECEIVE_NEW_TREE";

export const receiveTrees = trees => ({
  type: RECEIVE_TREES,
  trees
});

export const receiveUserTree = tree => ({
  type: RECEIVE_TREE,
  tree
});

export const receiveNewTree = tree => ({
  type: RECEIVE_NEW_TREE,
  tree
});


export const fetchTrees = () => dispatch => (
  getTrees()
    .then(trees => dispatch(receiveTrees(trees)))
    .catch(err => console.log(err))
);

export const fetchTree = userId => dispatch => (
  getTree(userId)
    .then(tree => dispatch(receiveUserTree(tree)))
    .catch(err => console.log(err))
);

export const makeTree = data => dispatch => (
  createTree(data)
    .then(tree => dispatch(receiveNewTree(tree)))
    .catch(err => console.log(err))
);
