import React from 'react';
import SearchBook from '../search/search_book';

import { connect } from 'react-redux';
import { fetchLeaves } from '../../actions/leaf_actions';
import MyTree from '../my_tree/myTree';
import './profile.css';
import AddLeafContainer from '../leaves/add_leaf_container';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchLeaves();
  }
    
    handleButton() {
      let tree= {
        userId: this.props.currentUser.id,
        leaves: [],
      };
      this.props.makeTree(tree);
    }

    render() {
      const { trees, currentUser } = this.props;
      if(trees.length === 0) return null;
      return (

<<<<<<< HEAD
          <div>
            <div className='profile-page-container'>
              <div className='profile-page-left'>
                <button onClick={this.handleButton}>Create your tree</button>
                <SearchBook />
=======
            <div>
              {/* <h2>{this.props.currentUser.username}'s Tree</h2> */}
              <LeavesContainer userId={this.props.userId} />
              <SearchBook />

            <div className='profile-page-container'>
              <div className='profile-page-left'>
                {/* <h2>{currentUser.username}'s Tree</h2> */}
>>>>>>> cc5bcbd4b4b234a3a45fa1b8a28f8ce2d7ab471b
              </div>
              <div className='profile-page-other'>
                <div className='profile-page-mid-right'>
                  <MyTree leaves={this.props.leaves} currentUser={this.props.currentUser}/>
                  <div className='profile-page-right'>
                    <AddLeafContainer/>
                  </div>
                </div>
                <div className='profile-page-trunk'></div>
              </div>
            </div>
            </div>
          );
    };
    
};

// const mSTP = (state ) => {
//   return {
//       leaves: Object.values(state.entities.leaves),
//   };
// };

// const mDTP = dispatch => {
//   return {
//       fetchLeaves: () => dispatch(fetchLeaves())
//   };
// };

export default Profile;
