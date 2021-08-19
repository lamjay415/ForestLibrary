import { connect } from 'react-redux';
import { fetchTrees } from '../../actions/tree_actions';

import Forest from './forest';

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user.id,
    leaves: state.entities.leaves,
    trees: Object.values(state.entities.trees),
    dataIsShown: false
});

const mDTP = dispatch => ({
  fetchTrees: () => dispatch(fetchTrees())
});

export default connect(mSTP,mDTP)(Forest);