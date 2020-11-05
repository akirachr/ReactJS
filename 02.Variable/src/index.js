import React from 'react';
import ReactDOM from 'react-dom'

// JSX produces an element.

// Variable
const user = {
  firstName: 'Taro',
  lastName: 'Nihon'
};

// Element
// Embedded Expressions in JSX
const Element = (
  <h1>{user.firstName} {user.lastName}</h1>
);

ReactDOM.render(
  Element,
  document.getElementById('root')
)
