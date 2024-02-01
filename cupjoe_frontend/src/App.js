// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/UserDashboard';


const App = () => {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={Dashboard} />
        <Route path="/userdash" exact component={Dashboard}/>
        
        
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
