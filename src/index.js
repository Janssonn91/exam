import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App = () => {
  return (
    <div>
      <h2>hej...</h2>
      <p className="test">Test av css</p>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// module.hot.accept();