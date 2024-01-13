// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dash" exact component={Dashboard}/>
        {/* Add more routes as needed */}
      </Switch>
    </Router>
    </QueryClientProvider>
    
  );
};

export default App;
