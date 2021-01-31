import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';

import { Overview } from '../../pages'

const Routes = props => {
    return (
        <section className="container">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/dashboard" component={Overview} />
                <Route component={NotFound} />
            </Switch>
        </section>
    );
};

export default Routes;