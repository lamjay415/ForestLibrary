import { connect } from 'react-redux';
import { fetchTrees} from '../../actions/tree_actions';

import Trees from './trees';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
  fetchTrees: () => dispatch(fetchTrees())
});

export default connect(mapStateToProps,mDTP)(Trees);