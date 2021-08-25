import React from 'react';
import { editLeaf, fetchLeaf, fetchLeaves } from '../../actions/leaf_actions';
import {connect} from 'react-redux';

class Leaf extends React.Component{

    constructor(props){
        super(props);
        this.state = this.props.leaf;
        this.state.review = '';
        this.updateReview = this.updateReview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchLeaf(this.props.leaf._id)
    }

    componentDidUpdate(prevProps){
        if(prevProps.leaf.review !== this.props.leaf.review){
            this.props.fetchLeaf(this.props.leaf._id);
        }
    }

    updateReview(e){
        this.setState({review: e.currentTarget.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.editLeaf(this.state);
    }

    render(){
        const {leaf} = this.props;
        const review_div = (
            <div>
                <form onSubmit={this.handleSubmit} className='leaf-review-form'>
                    <textarea
                    placeholder='write review here!'
                    onChange={this.updateReview}
                    />
                    <input type='submit' value='add Review'
                    />
                </form>
            </div>
        )
        debugger;
        return(
            <div className='tree-leaf-info'>
                <div>Title: {leaf.title}</div>
                <div>Date added: {leaf.date.slice(0,10)}</div>
                {leaf.review !== '' && leaf.review !== undefined ? <div>Review: {leaf.review}</div> : <div></div>}
                {this.props.currentUser.id===leaf.userId ? review_div : <div></div>}
            </div>
        )
    }
}

const mSTP = state => ({
    leaf: state.leaf
})

const mDTP = dispatch => ({
    editLeaf: leaf => dispatch(editLeaf(leaf)),
    fetchLeaf: id => dispatch(fetchLeaf(id))
});

export default connect(null,mDTP)(Leaf);