import React from "react";
import Page from "./page";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/page/:id" component={Page} />
        <Route path="/" strict component={Page} />
      </Switch>
    </Router>
  );
};

export default App;
