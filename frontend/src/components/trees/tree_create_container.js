<<<<<<< HEAD

// import { connect } from 'react-redux';
// import { makeTree } from '../../actions/tree_actions';
// import TreeCreate from './tree_create';
// import { withRouter } from 'react-router-dom';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     currentUser: state.session.user,
//     // newTree: state.trees.new
//     tree: {
//       userId: ownProps.match.params.userId,
//       leaves: [],
//     }
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     makeTree: data => dispatch(makeTree(data))
//   };
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TreeCreate));
=======

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
>>>>>>> 18023da50a5d19ade5862c7fc9a4ca98140e5573
