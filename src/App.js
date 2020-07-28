import React, { Component } from 'react'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    
    } 
  }

  cadastrar = (evento) => {
    const { nome, email, senha} = this.state
    if(nome !== '' && email !== '' && senha !== ''){
      alert(`Nome: ${nome}, Email: ${email}, Senha: ${senha}`)
    } else {
      this.setState({error: "Favor preencher corretamente o formulário!"})
    }

    evento.preventDefault()
  }
  
  
  render(){
    return (
      <>
        <h1>Novo user</h1>
    {this.state.error && <p>{this.state.error}</p>}
        <form  onSubmit={this.cadastrar}>
          <label name="nome">Nome</label>
          <input type="text" value={this.state.nome}
            onChange={(e) => this.setState({nome: e.target.value})} /><br/>
          <label name="email">E-mail</label>
          <input type="email" value={this.state.email}
            onChange={e => this.setState({email: e.target.value})} /><br />
            <label name="senha">Senha</label>
          <input type="password" value={this.state.senha}
            onChange={e => this.setState({senha: e.target.value})} />
            <button type="submit">Enviar</button>
        </form>
      </>
    )
  }
}



export default App