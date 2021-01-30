import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Overview, Profile } from './pages';

import './App.css';


function App() {
  const routes = (
    <Switch>
      <Route
        exact={true}
        path='/'
        component={Overview}
      />
      <Route
        exact={true}
        path='/profile'
        component={Profile}
      />
    </Switch>
  );

  return (
    <React.Fragment>
      <Router>
        <React.Fragment>
          {routes}
        </React.Fragment>
      </Router>
    </React.Fragment>
  );
}

export default App;
