import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';

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
      // API
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error);
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
            required
          />
          
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;