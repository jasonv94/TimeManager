import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          setToken={setToken}
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
