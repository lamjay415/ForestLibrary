import { connect } from 'react-redux';
import { fetchTree } from '../../actions/tree_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,

  };
};

const mapDispatchToProps = dispatch => ({
    fetchTree: userId => dispatch(fetchTree(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
