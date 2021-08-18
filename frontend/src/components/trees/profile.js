import React from 'react';

class Profile extends React.Component {

    
    componentDidMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserTree(this.props.currentUser.id);
    }

    // componentWillReceiveProps(newState) {
    //     this.setState({ trees: newState.trees });
    // }   
    
    render() {

      return (
            <div>
              <h2>{this.props.currentUser.username}'s Tree</h2>
            </div>
          );
    }
    
}

export default Profile;