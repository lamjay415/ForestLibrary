import React from 'react';
import { withRouter } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this); 
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  handleClick(route){
    return (e) => this.props.history.push(route);
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='links-container'>
                <div onClick={this.handleClick(`/users/${this.props.userId}`).bind(this)}>My Tree</div>
                <div onClick={this.handleClick('/').bind(this)}>Home</div>
                <div onClick={this.logoutUser}>Logout</div>
            </div>
        );
      } else {
        return (
            <div className='links-container'>
                <div onClick={this.handleClick('/register').bind(this)}>Signup</div>
                <div onClick={this.handleClick('/login').bind(this)}>Login</div>
            </div>
        );
      }
  }

  render() {
      return (
        <div className='nav-bar-container'>
            <div className='nav-bar-logo' onClick={this.handleClick('/').bind(this)}>Forest Library</div>
            { this.getLinks() }
        </div>
      );
  }
}

export default withRouter(NavBar);