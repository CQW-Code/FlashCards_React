import React from 'react';


class Cards extends React.Component {



  render() {
    const {color}= this.props;
    const Cards = ({items, quest}) => (
      <div> 
        <h2>Test</h2>
        <ul>
     { items.map( item => <li key={item.id}>{item.quest}</li> )}
   </ul>
 </div>
)

  return (
      <div style = {{backgroundColor:color, color: 'white'}}>
        <p>{this.props.name}</p>
        <button
          onClick={this.toggleShowAnswer}>
          Answer
        </button>
        </div>
       
    );
  }
}



export default Cards;