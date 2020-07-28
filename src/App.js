import React, { Component } from 'react'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
     email: '',
     senha: '',
     sexo: ''
    }
  } 

  trocaEmail = (e) => {
    let valorDigitado = e.target.value
    this.setState({email: valorDigitado})
  }

  trocaSexo = (e) => {
    this.setState({sexo: e.target.value})
  }
  
  
  render(){
    return (
      <>
      <h2>Login</h2>
       Email: <br />
       <input type="email" name="email" value={this.state.email}  
       onChange={this.trocaEmail}   /> <br /><br />
       Senha <br />
       <input type='password' name='senha' value={this.state.senha} 
        onChange={(e) => this.setState({senha: e.target.value})}
          /> <br /><br />
        Sexo: <br />
        <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
          <option value="masculino">MAsculino</option>
          <option value="feminino">FEminino</option>
        </select>
        
          <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
          </div>
      </>
    )
  }
}



export default App