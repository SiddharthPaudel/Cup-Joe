// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Front from "./components/Front";
import UserDashboard from "./components/UserDashboard";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dash" exact component={Dashboard}/>
          <Route path="/front" exact component={Front}/>
          <Route path="/Udash" exact component={UserDashboard}/>
        {/* Add more routes as needed */}
      </Switch>
    </Router>
    </QueryClientProvider>
    
  );
};

export default App;
