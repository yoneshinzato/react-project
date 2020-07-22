import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Yone",
      contador: 0,
    };
    //só usa se for com function, com a arrow function funciona sem
    // this.aumentar = this.aumentar.bind(this);
    // this.diminuir = this.diminuir.bind(this);
  }

  aumentar = () => {
    let batata = this.state;
    batata.contador += 1;
    batata.nome = "Ferdinando";
    this.setState(batata);
  };

  diminuir = () => {
    let tomate = this.state;
    if (tomate.contador <= 0) {
      alert("Ops, está abaixo de zero!");
      return; //para parar
    }
    tomate.contador -= 1;
    tomate.nome = "Afrânio";
    this.setState(tomate);
  };

  render() {
    return (
      <>
        <h2>{this.state.nome}</h2>
        <h3>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>
      </>
    );
  }
}

export default App;
