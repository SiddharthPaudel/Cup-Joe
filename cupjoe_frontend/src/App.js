// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Front from "./components/Front";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/fro" exact component={Front} /> */}
        <Route path="/Dash" exact component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
