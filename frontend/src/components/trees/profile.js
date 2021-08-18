import React from 'react';

class Profile extends React.Component {
 
    componentDidMount() {
      console.log(this.props.currentUser.id)
      
      // this.props.fetchUserTree(this.props.currentUser.id);
    }

    
    render() {
      console.log(this.props)
      return (
            <div>
              <h2>{this.props.currentUser.username}'s Tree</h2>
              <br />
              {/* {this.props.tree.map(data => (
                <li>{data}</li>
              ))} */}
            </div>
          );
    }
    
}

export default Profile;