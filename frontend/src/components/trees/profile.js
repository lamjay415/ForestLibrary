import React from 'react';
import LeavesContainer from '../leaves/leaves_container';

class Profile extends React.Component {
 
    componentDidMount() {
      console.log(this.props.currentUser.id)
      
    }

    
    render() {
      console.log(this.props)
      return (
            <div>
              <h2>{this.props.currentUser.username}'s Tree</h2>
              <LeavesContainer userId={this.props.userId} />
            </div>
          );
    }
    
}

export default Profile;