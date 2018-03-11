import React, { Component } from 'react';
import Card from './Card';
import './App.css';

class App extends Component {

  
  state ={
    qanda:[
      {name: 'Card 1', quest: 'What is a Key in React?', ans: 'It is a special attribute used in React. Each element needs a key'},
      {name: 'Card 2', quest: 'What are Lifecycle Functions?', ans: 'Initialization, state changes, props changes, componentDidMount/willUnMount'},
      {name: 'Card 3', quest: 'Did this work', ans: 'We hope it did'},
      {name: 'Card 4', quest: 'What?', ans: 'nothing'}
    ] 
   
  }

  /* figure out how and where to put a show/hide button AND
  show/hide JUST the ans portion of the hash */

  
  



  render() {

    const {qanda} = this.state;

    return (
    <div>
    <header className="App-header">
       <h1 className="App-title">DPL Real Flash Cards Fun</h1>
    </header>
    
    <div className='display'>

     { qanda.map(q =>
         <Card  
            name= {q.name}
            quest= {q.quest}
            ans= {q.ans}
            color = 'purple'
            showAns = {this.props.showAns}
             />
        )}

        
       </div>
      </div>  
    
 
   
        );
      }
    }
  



export default App;
