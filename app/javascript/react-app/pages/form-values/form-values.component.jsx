import React, { Component } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './form-values.styles.scss';

class FormValues extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currency: '',
      newValue: ''
    }
  }

  // handleSubmit = async event => {
  //   event.preventDefault()
  //   const { email, password } = this.state;

  //   try {   
  //     const body = { email: email, password: password };
      
  //     fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(body)
  //     }).then(r => r.json())
  //       .then(message => localStorage.setItem('token', message.token));
      
  //     this.setState({ email: '', password: '' })
  //     this.props.history.push('/')
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="form-values-container">
        <button className='back'>Voltar</button>
        <div className="form-values">
          <form>
            <div>
              <label htmlFor='currency'>Moeda</label>
              <select name='currency' onChange={this.handleChange} defaultValue={this.state.currency} required>
                <option value="brl">BRL</option>
                <option value="eur">EUR</option>
                <option value="cad">CAD</option>
              </select>


              <div className="current-value">
                <strong>Valor atual:</strong><p>R$ 5,40</p>
              </div>

              <FormInput
                name='newValue'
                type='text'
                handleChange={this.handleChange}
                value={this.state.newValue}
                label='Novo valor'
                required
              />
            </div>
            <CustomButton type="submit" color='green'>Atualizar</CustomButton>
          </form>
        </div>
      </div>
    )
  }
};

export default FormValues;