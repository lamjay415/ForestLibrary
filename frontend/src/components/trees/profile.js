import React from 'react';
import LeavesContainer from '../leaves/leaves_container';
import MyTree from '../my_tree/myTree';

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
              <button onClick={this.handleButton}>Create your tree</button>
              <LeavesContainer userId={this.props.userId} />
              <MyTree leaves={this.props.leaves}/>
            </div>
          );
    };
    
};

export default Profile;