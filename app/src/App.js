import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Overview, Profile, Login } from './pages';

import './App.css';


function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}



function App() {
  const { token, setToken } = useToken();

  const routes = (
    <Switch>
      <Route
        exact={true}
        path='/'
      >
        <Login token={token} setToken={setToken} />
      </Route>
      <Route
        exact={true}
        path='/overview'
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
