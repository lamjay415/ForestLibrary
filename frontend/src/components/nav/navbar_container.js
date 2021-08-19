import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
// import { withRouter } from 'react-router-dom'

import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
  userId: state.session.user._id,
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);