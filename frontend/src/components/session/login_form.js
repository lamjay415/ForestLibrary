import React from 'react';
import { withRouter } from 'react-router-dom';
import './login_form.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      showError:false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
      showError:false
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    

    let user = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(this.state.errors);
    this.props.login(user);
    this.setState({
      showError:true
    });
    
  }

  // Render the session errors if there are any
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
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='login-form'>
            <div>Login</div>
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
            <input type="submit" value="Submit" className='form-button'/>
            {this.state.showError ? this.renderErrors() : null}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);