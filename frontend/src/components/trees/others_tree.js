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
      const { trees, currentUser } = this.props;
      
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
