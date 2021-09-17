/* eslint-disable no-useless-constructor */
import React from 'react';
import { editLeaf } from '../../actions/leaf_actions';
import { connect } from 'react-redux';
import './mytree.css';

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

    renderLeaf(curLeaf){

        const updateReview = (e) =>{
            curLeaf.review = e.currentTarget.value
        }
    
        const handleSubmit = (e) =>{
            e.preventDefault();
            this.props.editLeaf(curLeaf);
            let review = document.getElementById('review-text-area');
            review.value = "";
            alert("Review has been added!");
        }

        // const {leaf} = this.props;
        const review_div = (
            <div>
                <form onSubmit={handleSubmit} className='leaf-review-form'>
                    <textarea
                    placeholder='write review here!'
                    onChange={updateReview}
                    id='review-text-area'
                    />
                    <input type='submit' value='add Review'
                    />
                </form>
            </div>
        )

        if(curLeaf === undefined){
            return null;
        }

        return(
            <div className='tree-leaf-info'>
                <div>Title: {curLeaf.title}</div>
                <div>Date added: {curLeaf.date.slice(0,10)}</div>
                {curLeaf.review !== '' && curLeaf.review !== undefined ? <div>Review: {curLeaf.review}</div> : <div></div>}
                {(this.props.currentUser && this.props.currentUser.id===curLeaf.userId) ? review_div : <div></div>}
            </div>
        )
    }

    render(){
        
        // let leaf_display = this.state.curLeaf !== '' ? <Leaf leaf={this.state.curLeaf} currentUser={this.props.currentUser}/> : null;

        let leaf_display = this.state.curLeaf !== '' ? 
            this.renderLeaf(this.state.curLeaf) : null;

        let leaves_div = this.props.leaves.map((leaf,idx)=>{
            return(
                    <img className='tree-leaf' 
                    src='https://image.flaticon.com/icons/png/512/2049/2049733.png' 
                    height='40'
                    width='40'
                    onClick={this.handleClick(leaf)}
                    key={idx}
                    />
            )
        });
        
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

const mDTP = dispatch => ({
    editLeaf: leaf => dispatch(editLeaf(leaf)) 
})

export default connect(null,mDTP)(MyTree);