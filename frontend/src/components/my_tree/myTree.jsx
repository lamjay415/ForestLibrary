/* eslint-disable no-useless-constructor */
import React from 'react';
import { editLeaf, deleteALeaf, fetchLeaves } from '../../actions/leaf_actions';
import { fetchUsers } from '../../actions/tree_actions';
import { connect } from 'react-redux';
import './mytree.css';
import { utcMilliseconds } from 'd3-time';

class MyTree extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.curLeaf = '';
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(leaf){
        return e => {
            e.preventDefault();
            this.setState({curLeaf: leaf});
        }
    }

    renderLeaf(){
        let curLeaf = this.state.curLeaf


        const updateReview = (e) =>{
            curLeaf.review = e.currentTarget.value
        }
    
        const handleSubmit = (e) =>{
            e.preventDefault();
            this.props.editLeaf(curLeaf);
            let review = document.getElementById('review-text-area');
            review.value = "";
            // alert("Review has been added!");
        }

        const review_div = (
                <div>
                    <form onSubmit={handleSubmit} className='leaf-review-form'>
                        <textarea
                        placeholder='share your thoughts here!'
                        onChange={updateReview}
                        id='review-text-area'
                        />
                        {curLeaf.review ? 
                            <input className='review-form-btn' type='submit' value='Update Comment'/>:<input className='review-form-btn' type='submit' value='Add a Comment'/>
                        }
                    </form>
                </div>
            )

        if(curLeaf) {
            return(
            <div className='tree-leaf-info'>
                <div>Title: {curLeaf.title}</div>
                <div>Date Added: {this.formatDate(curLeaf.date.slice(0,10))}</div>
                {curLeaf.review !== '' && curLeaf.review !== undefined ? <div>Comment: {curLeaf.review}</div> : <div></div>}
                {(this.props.currentUser && this.props.currentUser.id===curLeaf.userId) ? review_div : <div></div>}
            </div>
        )}else{
            return null;
        }
    }

    formatDate(date){
        let newDate = new Date(date);
        return new Intl.DateTimeFormat('en-US', {month:'long'}).format(newDate).toString() + ' ' + newDate.getFullYear();
    }

    handleClose(leaf){
        return e => {
            e.preventDefault();
            this.props.deleteALeaf(leaf);
            this.setState({curLeaf: null});
        }
    }

    render(){
        
        // let leaf_display = this.state.curLeaf !== '' ? <Leaf leaf={this.state.curLeaf} currentUser={this.props.currentUser}/> : null;
        console.log(this.props);
        let leaf_display = this.state.curLeaf !== null ? 
            this.renderLeaf() : null;

        let leaves_div = this.props.leaves.map((leaf,idx)=>{
            return(
                    <div key={idx}>
                        <img className='tree-leaf' 
                        src='https://image.flaticon.com/icons/png/512/2049/2049733.png' 
                        height='40'
                        width='40'
                        onClick={this.handleClick(leaf)}
                        />
                        {(this.props.currentUser && this.props.currentUser.id===leaf.userId) ? 
                            <img 
                                onClick={this.handleClose(leaf)}
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/512px-Flat_cross_icon.svg.png'
                                height='15'
                                className='leaf-close-button'
                            /> 
                            : null}
                    </div>
            )
        });
        const {username} = this.props;
        return(
            <div className='profile-page-tree'>
                <div className='tree-container'>
                    {leaves_div}
                    <img className="mytree-trunk"
                    src="https://image.flaticon.com/icons/png/64/408/408026.png"/>
                </div>
                {leaf_display}
                <div className="tree-trunk">
                </div>
            </div>
        )
    }
}

const mSTP = (state,ownProps) => {
    return {
        leaves: Object.values(state.entities.leaves).filter(leaf => {
            if(leaf.userId===ownProps.currentUser.id) {
                return leaf;
            }
        })
    }
};

const mDTP = dispatch => ({
    editLeaf: leaf => dispatch(editLeaf(leaf)),
    deleteALeaf: leaf => dispatch(deleteALeaf(leaf)),
    fetchLeaves: () => dispatch(fetchLeaves()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(null,mDTP)(MyTree);