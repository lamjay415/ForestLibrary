import React from 'react';
import { withRouter } from 'react-router-dom'
import Modal from '../modal/modal'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false
    };

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getLinks = this.getLinks.bind(this); 

  //   const audio = new Audio("http://streaming.tdiradio.com:8000/house.mp3")


  // playAudio = () => {
  //   new Audio(audio).play();
  // }

  }
  // componentDidMount() {
  // }

  // componentWillUnmount() {
  //   audio.removeEventListener('ended', () => this.setState({ play: false }));  
  // }

  // togglePlay = () => {
  //   this.setState({ play: !this.state.play }, () => {
  //     this.state.play ? this.audio.play() : this.audio.pause();
  //   });
  // }
  showModal(){
    this.setState({
      modal: true
    })
  }

  hideModal(){
    this.setState({
      modal: false
    })
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
                <div onClick={this.handleClick(`/users/${this.props.session.user.id}`).bind(this)}>My Tree</div>
                <div onClick={this.handleClick('/').bind(this)}>Home</div>
                <div>
                  <img src="https://image.flaticon.com/icons/png/16/898/898792.png"/>
                </div>
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
              <Modal show={this.state.modal} handleClose={this.hideModal} />
              <div 
                className="nav-icons" 
                id="instructions-icon"
                >
                      <img src="https://image.flaticon.com/icons/png/64/4293/4293092.png" id="img-instructions" onClick={this.showModal}/>
                </div>
            { this.getLinks() }
        </div>
      );
  }
}

export default withRouter(NavBar);