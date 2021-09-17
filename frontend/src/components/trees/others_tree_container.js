import { connect } from 'react-redux';
import { fetchUsers, makeTree } from '../../actions/tree_actions';
import { fetchLeaves } from '../../actions/leaf_actions';
import OthersTree from './others_tree';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    treeId: ownProps.match.params.user_id,
    trees: Object.values(state.entities.trees),
    leaves: Object.values(state.entities.leaves).filter(leaf => {
      if(leaf.userId===ownProps.match.params.user_id) {
        return leaf;
      }
    })
    // currenUserId: ownProps.mapDispatchToProps.params.id,

  };
};

const mapDispatchToProps = dispatch => ({
    fetchLeaves: () => dispatch(fetchLeaves()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OthersTree));
