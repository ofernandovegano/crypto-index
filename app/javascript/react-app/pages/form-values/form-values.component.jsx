import React, { Component } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './form-values.styles.scss';

class FormValues extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currency: '',
      value: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { currency, value } = this.state;

    try {   
      const body = { currency, value, token: localStorage.getItem('token') };
      // Se eu tivesse mais tempo, eu não deixaria a url como está abaixo com 'localhost'
      fetch('http://localhost:3000/api/crypto/btc', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(r => r.json())
        .then(data => alert(data.message))
      
      this.setState({ currency: '', value: '' })
      this.props.history.push('/')
    } catch (error) {
      alert(error);
    }
    this.props.history.push('/')
  }

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
                name='value'
                type='text'
                handleChange={this.handleChange}
                value={this.state.value}
                label='Novo valor'
                pattern='\d*'
                title='O valor deve ser um número inteiro.'
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