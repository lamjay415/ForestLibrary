import { connect } from 'react-redux';
import { fetchTrees } from '../../actions/tree_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    trees: Object.values(state.entities.trees),
    leaves: Object.values(state.entities.leaves).filter(leaf => {
      if(leaf.userId===state.session.user.id) {
        return leaf;
      }
    })
  };
};

const mapDispatchToProps = dispatch => ({
    fetchTrees: () => dispatch(fetchTrees())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
