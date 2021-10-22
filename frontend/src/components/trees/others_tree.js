import React from 'react';
import {Link} from 'react-router-dom';
import MyTree from '../my_tree/myTree';
import './profile.css';


class OthersTree extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    this.props.fetchLeaves().then(this.props.fetchUsers());

    // let tree = {
    //   userId: this.props.currentUser.id,
    //   leaves: [],
    // };
    // this.props.makeTree(tree);
  }
    render() {
      const { trees, currentUser, currentTree } = this.props;
      // if(trees.length === 0) return null;
      return (
          <div>
            <div className='profile-page-container'>
              
              {(currentUser && currentUser.id === this.props.treeId) ? <div className='profile-page-left'>
                <p className="search-placeholder">
                  Search your book here! Example: The Little Prince
                </p>
              <Link to="/search">Add A Leaf</Link>
              </div> : null}
              {currentTree[0]  && currentTree[0]._id !== currentUser.id ? 
                <div className='other-page-left'> 
                  <div className='other-page-title'>
                    Welcome to {currentTree[0].username}'s tree
                  </div>
                  
                  {this.props.leaves.length > 0 ? 
                    <div className='other-page-sub'>
                    Here you can click on a leaf to see what {currentTree[0].username} has been reading! 
                    </div>
                    :
                    <div>
                    <div className='other-page-sub'>
                      {currentTree[0].username}'s tree is currently empty 🙁
                      
                    </div>
                    <Link to='/'>back to home</Link>
                    </div>
                    }
                </div>
                : null}
              <div className='profile-page-other'>
                <div className='profile-page-mid-right'>
                 <MyTree leaves={this.props.leaves} currentUser={this.props.currentUser}/>
                  <div className='profile-page-right'>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
    };
    
};



export default OthersTree;
