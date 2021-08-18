import { connect } from 'react-redux';
import { fetchUserTree } from '../../actions/tree_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    tree: Object.values(state.entities.trees.new),
    currentUser: state.session.user,
    // title: state.entities.trees.new.title,
    // author: state.entities.trees.new.author,
    // year: state.entities.trees.new.year,
    // img: state.entities.trees.new.img,
    // link: state.entities.trees.new.link,
    // review:state.entities.trees.new.review
  };
};

const mapDispatchToProps = dispatch => ({
    fetchUserTree: id => dispatch(fetchUserTree(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);