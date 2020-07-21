import React, { Component } from 'react' //1

//4
class Equipe extends Component {
    render(){
        return (
            <>
                <h2>Olá! Sou a(o) {this.props.nome}.</h2>
                <h3>Cargo: {this.props.cargo} de uma empresa</h3>
                <h3>Idade: {this.props.idade}</h3>
            </>
        )
    }
}


//2
function App() {
    return (
       <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome="Eliana" cargo="CTO" idade="34" />
       </div>
    )
}

export default App //3