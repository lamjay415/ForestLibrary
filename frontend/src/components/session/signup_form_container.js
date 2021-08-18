import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { makeTree } from '../../actions/tree_actions'

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    makeTree: data => dispatch(makeTree(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);