import React from 'react';
import LeavesContainer from '../leaves/leaves_container';
import MyTree from '../my_tree/myTree';

class Profile extends React.Component {
 
    componentDidMount() {
      this.props.fetchTrees(); 
    }

    
    render() {
      const { trees, currentUser } = this.props;
      if(trees.length === 0) return null;
      trees.map(tree => {

        if(tree.userId === currentUser.id)
          {
            return (
              <div>
                {tree.id}
              </div>
            )
          }      
        })
        debugger;
      return (
            <div>
              <h2>{this.props.currentUser.username}'s Tree</h2>
              <LeavesContainer userId={this.props.userId} />
              <MyTree leaves={this.props.leaves}/>
            </div>
          );
    };
    
};

export default Profile;