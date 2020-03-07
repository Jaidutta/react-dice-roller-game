import React, {Component} from 'react';
import './Die.css'
class Die extends Component {
  render(){
    return(
      <div className="Die"><span><i className={`fas fa-dice-${this.props.face} ${this.props.rolling ? 'jiggle' : ''}`}></i></span></div>
    )
  }
}
export default Die