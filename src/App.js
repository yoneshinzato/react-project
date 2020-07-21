import React from 'react' //1

const Equipe = (props) => {
    return (
        <div>
            <Sobre username={props.nome} job={props.cargo} age={props.idade} />
            <Social fb={props.facebook}  lin={props.linkedin} git={props.github} />
        </div>
    )
}

const Sobre = props => {
    return (
        <>
            <h2>Olá! Sou o(a) {props.username}. Tenho {props.age} e trabalho como {props.job}</h2>
        </>
    )
}

const Social = props => {
    return (
        <div>
            <a href={props.fb}>Facebook</a>
            <a href={props.lin}>LinkedIn</a>
            <a href={props.git}>GitHub</a>
            <hr />
        </div>
    )
}




//2
function App() {
    return (
       <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome="Lucas" cargo="Programador" idade="29" />
            <Equipe nome="Lucia Mara" cargo="CTO" idade="35" facebook="https://www.facebook.com" linkedin="https://www.linkedin.com" github="https://www.github.com" />
       </div>
    )
}

export default App //3