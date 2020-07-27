import React, { Component } from 'react'




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      status: false
    }
  } 

  sair = () => {
    this.setState({status: false})
  }

  entrar = () => {
    this.setState({status: true})
  }
  
  
  render(){
    return (
      <>
        {this.state.status ? 
          <div><h2>Bem vindo ao sistema!</h2>
            <button onClick={this.sair}>sair do sistema</button>
          </div>
          :
          <div><h2>Oi, visitante. Faça login</h2>
          <button onClick={this.entrar}>entrar no sistema</button></div>
        }
       
      </>
    )
  }
}



export default App