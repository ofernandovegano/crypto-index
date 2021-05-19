import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './login.styles.scss';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = this.state;

    try {   
      const body = { email: email, password: password };
      
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(r => r.json())
        .then(message => localStorage.setItem('token', message.token));
      
      this.setState({ email: '', password: '' })
      this.props.history.push('/')
    } catch (error) {
      alert(error);
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="login">

        <form onSubmit={ this.handleSubmit }>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={ this.handleChange }
            label='Senha'
            pattern='\d{6}'
            title='A senha deve conter apenas 6 números.'
            required
          />
          
          <CustomButton type="submit" color='green'>Login</CustomButton>
        </form>
      </div>
    )
  }
}

export default Login;