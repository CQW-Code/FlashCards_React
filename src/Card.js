import React from 'react';


class Card extends React.Component {

  state = {showAns: false};
  
  
  
  toggleShowAns = () => {
    this.setState( state => {
      return { showAns: !state.showAns}
    });
  }
  

  render() {
    const {color}= this.props;
    const {showAns}= this.state;
    


    return (
       <div style = {{backgroundColor:color, color: 'white'}}>
         <p>{this.props.name}</p>
          <p>{this.props.quest}</p>
           {showAns && <p>{this.props.ans}</p>}

        <button className = 'btn'
        onClick= {this.toggleShowAns}>
          Answer
        </button>
        </div>
       
    );
  }
}



export default Card;