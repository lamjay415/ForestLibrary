import { connect } from 'react-redux';
import { fetchTrees, fetchUsers } from '../../actions/tree_actions';

import Forest from './forest';

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated,
    session: state.session,
    leaves: state.entities.leaves,
    trees: Object.values(state.entities.trees),
    dataIsShown: false
});

const mDTP = dispatch => {
    return{
        fetchTrees: () => dispatch(fetchTrees()),
        fetchUsers: () => dispatch(fetchUsers())
    }
};

export default connect(mSTP,mDTP)(Forest);