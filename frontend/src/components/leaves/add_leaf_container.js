import { connect } from 'react-redux';
import { addLeaf } from '../../actions/leaf_actions';
import AddLeaf from './add_leaf';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        session: state.session,
        trees: Object.values(state.entities.trees),
        // newLeaf: state.leaves.new
        // newLeaf: {
        //     userId: ownProps.match.params.id,
        //     title: "",
        // }
    };
    // return {
    //     currentUser: state.session.currentUser,
    //     newLeaf: state.entities.leaves.new
    // };
};

const mapDispatchToProps = dispatch => {
    return {
        addLeaf: data => dispatch(addLeaf(data))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddLeaf));