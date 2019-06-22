import React from 'react';
import Router from './router';
import Store from './store'

const App = () => (
  <Store>
    <Router />
  </Store>
);

export default App;
