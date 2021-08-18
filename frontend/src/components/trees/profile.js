import React from 'react';
import LeavesContainer from '../leaves/leaves_container';

class Profile extends React.Component {
 
    componentDidMount() {
      this.props.fetchTrees(); 
    }

    
    render() {
      const { trees, currentUser } = this.props;
      if(trees.length === 0) return null;
      trees.map(tree => {
        console.log(tree.id);

        if(tree.userId === currentUser.id)
          {
            console.log(tree.id);
            return (
              <div>
                {tree.id}
              </div>
            )
          }      
        })
      return (
            <div>
              <h2>{this.props.currentUser.username}'s Tree</h2>
              <LeavesContainer userId={this.props.userId} />
            </div>
          );
    };
    
};

export default Profile;