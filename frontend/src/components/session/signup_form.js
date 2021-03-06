import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup_form.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      showError: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
      showError : false,
    });
  
  }
 

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };
   
   

    this.props.signup(user, this.props.history);
    this.setState({showError: true});
   
    }
  
 
 

  renderErrors() {
    return(
      <ul className="error">
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <div>Register</div>
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="username"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <input type="submit" value="Submit" className='form-button'/>
            {this.state.showError ? this.renderErrors() : null}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);