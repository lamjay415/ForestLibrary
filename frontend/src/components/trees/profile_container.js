import { connect } from 'react-redux';
import { fetchUserTree } from '../../actions/tree_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    trees: Object.values(state.trees.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTree: id => dispatch(fetchUserTree(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);