import { connect } from 'react-redux';
import { fetchLeaves } from '../../actions/leaf_actions';
import Leaves from './leaves';

const mapStateToProps = (state) => {
    return {
        leaves: Object.values(state.leaves)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLeaves: () => dispatch(fetchLeaves())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaves);
