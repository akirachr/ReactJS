import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {scores: [0, 0, 0]};
    this.state.scores[0]++;
    this.state.scores[1]++;
    this.state.scores[1]++;
    this.state.scores[2]++;
    this.state.scores[2]++;
    this.state.scores[2]++;
  }

  render() {
    return (
      <table border='1'>
      <thead>
      <tr>
      <th colSpan='3'>
      {this.props.message}
      </th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>{this.state.scores[0]}</td><td>{this.state.scores[1]}</td><td>{this.state.scores[2]}</td>
      </tr>
      </tbody>
      </table>
    )
  }
}
Test.propTypes = {
  message: PropTypes.string
}

export default Test;
