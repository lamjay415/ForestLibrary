import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
// import { withRouter } from 'react-router-dom'

import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
  session: state.session,
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user))
})
export default connect(mapStateToProps,mDTP)(NavBar);