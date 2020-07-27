import React, { Component } from 'react'
import Feed from './components/Feed'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
     feed: [
       {id: 1, username: 'Shirley', curtidas: 10, comentarios: 2},
       {id: 2, username: 'Vera', curtidas: 120, comentarios: 24},
       {id: 3, username: 'Amadeus', curtidas: 30, comentarios: 12},
       {id: 4, username: 'Ricardo', curtidas: 1, comentarios: 0}
     ]
    }
  } 

  
  
  render(){
    return (
      <>
        {this.state.feed.map((item)=>{
          return(
            <>
              <Feed id={item.id} username={item.username} 
              curtidas={item.curtidas} comentarios={item.comentarios}
              />
            
            </>
          )
        })}
       
      </>
    )
  }
}



export default App