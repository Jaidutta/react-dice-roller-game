import React, {Component} from 'react';
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
  static defaultProps = {
    options : ['one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props){
    super(props);
    this.state = {
      die1 : 'three', 
      die2 : 'four',
      isRolling: false
    }
    this.roll = this.roll.bind(this)
  }
  roll(){
    const randIdx1 = Math.floor(Math.random() * this.props.options.length)
    const randIdx2 = Math.floor(Math.random() * this.props.options.length)
    const roll1 = this.props.options[randIdx1]
    const roll2 = this.props.options[randIdx2]
    this.setState({die1: roll1, die2: roll2, isRolling: true})
    setTimeout(() => {
      this.setState({isRolling: false})
    }, 1500)
  }

  render(){
    let text;
    text = this.state.isRolling ? 'Rolling.....': 'Roll'
    return(
      <div className="RollDice">
        <h1>Dice Rolling Game</h1>
        <div className="RollDice-dice-container">
          <Die face={this.state.die1} rolling={this.state.isRolling}/>
          <Die face={this.state.die2} rolling={this.state.isRolling}/>
        </div>        
        <button className="RollDice-button" onClick={this.roll} disabled={this.state.isRolling}>{text}</button>
      </div>
    )
  }
}

export default RollDice