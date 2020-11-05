import React from 'react';
import ReactDOM from 'react-dom'


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function tick() {
  const user = {
    firstName: 'Taro',
    lastName: 'Nihon'
  };

  const Element = (
    <div>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    <h1>{formatName(user)}</h1>
    </div>
  );

  ReactDOM.render(
    Element,
    document.getElementById('root')
  )
}

setInterval(tick, 1000);
