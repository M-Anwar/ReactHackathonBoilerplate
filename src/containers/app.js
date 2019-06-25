import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Home from "./home";

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />        
      </Switch>
    </Router>
  </div>
);

export default App;
