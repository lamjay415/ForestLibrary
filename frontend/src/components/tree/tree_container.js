import { connect } from 'react-redux';
import { getTrees, getUserTree, makeTree } from '../../actions/tree_actions';

import Tree from './tree';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  
});

export default connect(
  mapStateToProps,
  { getTrees, getUserTree, makeTree }
)(Tree);