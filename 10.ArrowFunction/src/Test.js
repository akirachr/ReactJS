import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Test extends Component {
  constructor(props) {
    super(props);
  }

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    const user = {
      firstName: 'Taro',
      lastName: 'Nihon'
    };

    const UserNameDisplay = (props) => {
      return (
        <h1>
          Hello, {this.formatName(user)}! {props.message}
          </h1>
      );
    };

    return (
      <UserNameDisplay message={this.props.externalMessage} />
    )
  }
}
Test.propTypes = {
  externalMessage: PropTypes.string
}

export default Test;
