import React from 'react';

class Profile extends React.Component {
 
    componentDidMount() {
      console.log(this.props.currentUser.id)
      console.log(this.props.tree.data)
      this.props.fetchUserTree(this.props.currentUser.id);

    }

    
    render() {
      console.log(this.props)
      return (
            <div>
              <h2>{this.props.currentUser.username}'s Tree</h2>
              <br />
              {this.props.tree}
            </div>
          );
    }
    
}

export default Profile;