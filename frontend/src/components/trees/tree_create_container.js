
import { connect } from 'react-redux';
import { makeTree } from '../../actions/tree_actions';
import TreeCreate from './tree_create';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
    // newTree: state.trees.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeTree: data => dispatch(makeTree(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeCreate);