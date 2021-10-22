import { connect } from 'react-redux';
import { fetchUsers, makeTree,getUser } from '../../actions/tree_actions';
import { fetchLeaves } from '../../actions/leaf_actions';
import OthersTree from './others_tree';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    treeId: ownProps.match.params.user_id,
    // trees: Object.values(state.entities.trees),
    leaves: Object.values(state.entities.leaves).filter(leaf => {
      if(leaf.userId===ownProps.match.params.user_id) {
        return leaf;
      }
    }),
    // treeUser: Object.values(state.entites.users)
    // currenUserId: ownProps.mapDispatchToProps.params.id,
    currentTree: getUser(state,ownProps.match.params.user_id)
  };
};

const mapDispatchToProps = (dispatch) => ({
    fetchLeaves: () => dispatch(fetchLeaves()),
    fetchUsers: () => dispatch(fetchUsers()),
    // fetchUser: () => dispatch(fetchUser(ownProps.match.params.user_id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OthersTree));
