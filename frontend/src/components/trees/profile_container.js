import { connect } from 'react-redux';
import { fetchTrees, makeTree } from '../../actions/tree_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    // currenUserId: ownProps.mapDispatchToProps.params.id,

  };
};

const mapDispatchToProps = dispatch => ({
    makeTree: tree => dispatch(makeTree(tree)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
