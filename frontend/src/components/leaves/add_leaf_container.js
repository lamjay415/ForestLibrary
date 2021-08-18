<<<<<<< HEAD
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

=======
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
            title: "",
            author: "",
            treeId: ownProps.match.params.treeId 
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addLeaf: data => dispatch(addLeaf(data))
    };
};

>>>>>>> 18023da50a5d19ade5862c7fc9a4ca98140e5573
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddLeaf));