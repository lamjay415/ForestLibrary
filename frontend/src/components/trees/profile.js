import React from 'react';
import {Link} from 'react-router-dom';
import MyTree from '../my_tree/myTree';
import './profile.css';


class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.handleButton = this.handleButton.bind(this);
    }
  
    componentDidMount(){
      this.props.fetchLeaves();
      this.props.fetchTrees();
    }

    // componentDidUpdate(prevProps){
    //   if(prevProps.leaves !== this.props.leaves){
    //     this.props.fetchLeaves();
    //   }
    // }
    
    handleButton() {
      let tree= {
        userId: this.props.currentUser.id,
        leaves: [],
      };
      this.props.makeTree(tree);
    }

    render() {
      const { trees, currentUser } = this.props;
     
      return (

          <div>
            <div className='profile-page-container'>
              <div className='profile-page-left'>
                <p className="search-placeholder">
                  Search your book here! Example: The Little Prince
                </p>
              <Link to="/search">Add A Leaf</Link>
              </div>
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


export default Profile;
