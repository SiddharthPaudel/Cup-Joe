// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Front from "./components/Front";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/fro" exact component={Front} />
      </Switch>
    </Router>
  );
};

export default App;
