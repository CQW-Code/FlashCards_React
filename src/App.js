import React, { Component } from 'react';
import Cards from './Cards';
import './App.css';

class App extends React.Component {

  state ={
    qanda:[
      {id:1, quest:'What is a Key in React?', ans:'It is a special attribute used in React. Each element needs a key'},
      {id:2, question: 'What are Lifecycle Functions?', ans:'Initialization, state changes, props changes, componentDidMount/willUnMount'},

    ],
 
   
    showAnswer:false,
  }

  toggleShowAnswer = () => {
    this.setState( state => {
      return { showAnswer: !state.showAnswer }
    });
  }


  render() {
    const {qanda} = this.state;
    return (
     <div className="App">
     <header className="App-header">
       <h1 className="App-title">DPL Real Flash Cards Fun</h1>
     </header>
     <div className='display'>
         <Cards name = 'Card 1' color = 'purple' key={qanda.quest} />
          <Cards name = 'Card 2' color = 'purple' />
          <Cards name = 'Card 3'  color = 'purple'/>
          <Cards name = 'Card 4' color = 'purple' />
        
          <ul>
          { qanda.map( qandas =>
               <li key={qandas.id}>{qandas.quest}</li>
             )
          }
        </ul>
        </div>  
    
        </div>
 
   
        );
      }
  }



export default App;
