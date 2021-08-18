import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props)

    

  }
    
    componentDidMount() {
      console.log(this.props.currentUser.id)
      this.props.fetchUserTree(this.props.currentUser.id);
    }

    
    render() {

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