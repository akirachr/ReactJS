import React, { Component } from 'react'
import Calculator from './Calculator.js';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {scores: [0, 0, 0]};
    this.calculator = new Calculator();
  }

  componentDidMount() {
    this.setState({scores: this.calculator.getScores()});
  }
  
  render() {
    return (
      <table border='1'>
      <tr>
      <td>{this.state.scores[0]}</td><td>{this.state.scores[1]}</td><td>{this.state.scores[2]}</td>
      </tr>
      </table>
    )
  }
}

export default Test;
