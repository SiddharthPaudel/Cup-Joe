// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Dashboardpage from "./Pages/dashboard";
import Home from "./components/Home";
import Front from "./components/Front";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/dash" exact component={Dashboard} /> */}
        <Route path="/fro" exact component={Front} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
