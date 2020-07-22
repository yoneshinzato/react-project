import React, { Component } from "react"; //1

//4
class Equipe extends Component {
  render() {
    return (
      <>
        <Sobre
          nome={this.props.nome}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
      </>
    );
  }
}

//5
class Sobre extends Component {
  render() {
    return (
      <>
        <h2>Olá! Sou a(o) {this.props.nome}.</h2>
        <h3>Cargo: {this.props.cargo} de uma empresa</h3>
        <h3>Idade: {this.props.idade} anos</h3>
      </>
    );
  }
}

//6
// const Social = (props) => {
//   return (
//     <div>
//       <a href={props.twitter}>Twitter</a>
//       <a href={props.linkedin}>LinkedIn</a>
//     </div>
//   );
// };

//2
function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Eliana" cargo="CTO" idade="34" />
      {/* <Social
        twitter="https://www.twitter.com/eliana"
        linkedin="https://www.linkedin.com/eliana"
      /> */}
      <Equipe nome="Molibdênio" cargo="PO" idade="37" />
      {/* <Social
        twitter="https://www.twitter.com/yo-shi"
        linkedin="https://www.linkedin.com/yo-shi"
      /> */}
    </div>
  );
}

export default App; //3
