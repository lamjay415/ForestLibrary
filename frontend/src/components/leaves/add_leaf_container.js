import { connect } from 'react-redux';
import { addLeaf } from '../../actions/leaf_actions';
import AddLeaf from './add_leaf';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newLeaf: state.leaves.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addLeaf: data => dispatch(addLeaf(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLeaf);