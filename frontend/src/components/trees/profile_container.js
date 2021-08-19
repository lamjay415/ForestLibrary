import { connect } from 'react-redux';
import { fetchTrees, makeTree } from '../../actions/tree_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    trees: Object.values(state.entities.trees),
    leaves: Object.values(state.entities.leaves).filter(leaf => {
      if(leaf.userId===state.session.user.id) {
        return leaf;
      }
    })
    // currenUserId: ownProps.mapDispatchToProps.params.id,

  };
};

const mapDispatchToProps = dispatch => ({
    makeTree: tree => dispatch(makeTree(tree)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
