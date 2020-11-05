import React from 'react';
import ReactDOM from 'react-dom'
import Test from './Test.js'

const App = () => {
  return (
      <React.StrictMode>
        <div>
          <Test externalMessage='Tokyo'/>
        </div>
      </React.StrictMode>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
