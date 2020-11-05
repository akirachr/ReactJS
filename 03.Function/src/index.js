import React from 'react';
import ReactDOM from 'react-dom'

// JSX produces an element.

// Variable
const user = {
  firstName: 'Taro',
  lastName: 'Nihon'
};

// Function
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

// Element
// Embedded Functions in JSX
const Element = (
  <h1>{formatName(user)}</h1>
);

ReactDOM.render(
  Element,
  document.getElementById('root')
)
