import { connect } from 'react-redux';
import { addLeaf } from '../../actions/leaf_actions';
import AddLeaf from './add_leaf';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        trees: Object.values(state.entities.trees),
        // newLeaf: state.leaves.new
        newLeaf: {
            userId: ownProps.match.params.id,
            title: "",
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addLeaf: data => dispatch(addLeaf(data))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddLeaf));