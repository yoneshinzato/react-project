import React, { Component } from 'react'

class Membro extends Component {

    constructor(props){
        super(props)
        this.state = {
            nome: props.nome
        }
    }

    entrar = (nome) => {
       this.setState({nome: nome})
    }


    render() {
        return(
            <div>
               <h2>Bem-vindo(a) {this.state.nome}!</h2>
        <button onClick={()=> this.entrar('Yoners')}>Entrar no sistema</button>
               <button onClick={()=> this.setState({nome: ''})}>Sair</button>
            </div>
        )
    }
}

export default Membro