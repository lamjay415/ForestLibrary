import React from 'react';
import SearchBook from '../search/search';

import { connect } from 'react-redux';
import { fetchLeaves } from '../../actions/leaf_actions';
import MyTree from '../my_tree/myTree';
import './profile.css';
import AddLeafContainer from '../leaves/add_leaf_container';


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTree: false
    }

    this.handleButton = this.handleButton.bind(this)
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

      this.setState({
        showTree: true
      })

    }

    render() {
      const { trees, currentUser } = this.props;
      if(trees.length === 0) return null;
      return (

          <div>
                <h1 id="mytree-username">{currentUser.username}'s Tree</h1>
            <div className='profile-page-container'>
              <div className='profile-page-left'>
   
                {/* <SearchBook /> */}

              </div>
              <div className='profile-page-other'>
                <div className='profile-page-mid-right'>
                  {this.state.showTree ? <MyTree leaves={this.props.leaves} currentUser={this.props.currentUser}/> : <div onClick={this.handleButton} className='create-tree-btn'>Create your tree</div>}
                  <div className='profile-page-right'>
                    {/* <AddLeafContainer/> */}
                  </div>
                </div>
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
