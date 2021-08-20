import React from 'react';
import { editLeaf } from '../../actions/leaf_actions';
import {connect} from 'react-redux';

class Leaf extends React.Component{

    constructor(props){
        super(props);
        this.state = this.props.leaf;
        this.state.review = '';
        this.updateReview = this.updateReview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

const mDTP = dispatch => ({
    editLeaf: leaf => dispatch(editLeaf(leaf))
});

export default connect(null,mDTP)(Leaf);