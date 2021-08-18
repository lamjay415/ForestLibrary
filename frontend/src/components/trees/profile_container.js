import { connect } from 'react-redux';
import { fetchTrees } from '../../actions/tree_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    trees: Object.values(state.entities.trees)

  };
};

const mapDispatchToProps = dispatch => ({
    fetchTrees: () => dispatch(fetchTrees())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
