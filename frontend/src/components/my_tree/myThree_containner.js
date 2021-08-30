import { connect } from 'react-redux';
import { fetchLeaves } from '../../actions/leaf_actions';
import { withRouter } from 'react-router-dom';
import MyTree from './myTree';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        leaves: Object.values(state.entities.leaves).filter(leaf => {
            if (leaf.userId === ownProps.match.params.id) {
                return leaf;
            }
        }),
        user: state.entities.users[ownProps.match.params.userId],
    };
};

const mapDispatchToProps = dispatch => ({
    fetchLeaves: () => dispatch(fetchLeaves()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyTree));