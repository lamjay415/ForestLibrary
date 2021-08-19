import React from 'react';
import LeavesContainer from '../leaves/leaves_container';

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
    
      return (
            <div>
              <h2>{this.props.currentUser.username}'s Tree</h2>
              <button onClick={this.handleButton}>Create your tree</button>
              <LeavesContainer userId={this.props.userId} />
            </div>
          );
    };
    
};

export default Profile;