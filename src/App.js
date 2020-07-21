import React from 'react' //1

const Bemvindo = (props) => {
    return (
    <>
        <h2>Bem-vindo(a), {props.nome}!</h2>
        <h3>Tenho {props.idade} anos</h3>
    </>
    )
}

//2
function App() {
    return (
       <div>
            <h1>Olá mundo</h1>
            <Bemvindo nome="Matheus" idade="24" />
            <Bemvindo nome="Amanda" idade="21" />
            <h1>Curso de React</h1>
       </div>
    )
}

export default App //3