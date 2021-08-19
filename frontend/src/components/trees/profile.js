import React from 'react';
import LeavesContainer from '../leaves/leaves_container';

import SearchBook from '../search/search_book';

import MyTree from '../my_tree/myTree';
import './profile.css';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }
 
    
    handleButton() {
      let tree= {
        userId: this.props.currentUser.id,
        leaves: [],
      };
      console.log(this.props.currentUser.id);
      this.props.makeTree(tree);
    }

    render() {
      const { trees, currentUser } = this.props;
      if(trees.length === 0) return null;
      // trees.map(tree => {

      //   if(tree.userId === currentUser.id)
      //     {
      //       return (
      //         <div>
      //           {tree.id}
      //         </div>
      //       )
      //     }      
      //   })
    
      return (

            <div>
              <h2>{this.props.currentUser.username}'s Tree</h2>
              <button onClick={this.handleButton}>Create your tree</button>
              <LeavesContainer userId={this.props.userId} />
              <SearchBook />

            <div className='profile-page-container'>
              <div className='profile-page-left'>
                <h2>{this.props.currentUser.username}'s Tree</h2>
                <button onClick={this.handleButton}>Create your tree</button>
              </div>
              <div className='profile-page-right'>
                <LeavesContainer userId={this.props.userId} />
                <MyTree leaves={this.props.leaves}/>
              </div>

            </div>
          );
    };
    
};

export default Profile;