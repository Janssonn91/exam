import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <h2>hej...</h2>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

module.hot.accept();