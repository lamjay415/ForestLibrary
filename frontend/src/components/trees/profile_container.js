import { connect } from 'react-redux';
import { fetchUserTree } from '../../actions/tree_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    tree: Object.values(state.entities.trees.new),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => ({
    fetchUserTree: id => dispatch(fetchUserTree(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);