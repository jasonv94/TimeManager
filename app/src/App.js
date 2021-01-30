import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Overview, Profile, Login } from './pages';

import './App.css';


// function setToken(userToken) {
// }

// function getToken() {
// }


function App() {
  // const token = getToken();
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  } else {

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
        <Route
          exact={true}
          path='/login'
          component={Login}
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
}

export default App;
