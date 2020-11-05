import React from 'react';
import ReactDOM from 'react-dom'

// JSX produces an element.

// Variable
const user1 = {
  firstName: 'Taro',
  lastName: 'Nihon'
};
const user2 = {
  firstName: 'Jiro',
  lastName: 'Nihon'
};

// Function
function FormatName(props) {
  return props.user.firstName + ' ' + props.user.lastName;
}

// Element
// Function Component
const Element = (
  <div>
  <h1><FormatName user={user1}/></h1>
  <h1><FormatName user={user2}/></h1>
  </div>
);

ReactDOM.render(
  Element,
  document.getElementById('root')
)
