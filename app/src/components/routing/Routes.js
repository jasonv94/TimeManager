import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import EventList from '../events/EventList';
import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';


import { Overview, AddEvent } from '../../pages'

const Routes = props => {
    return (
        <section className="container">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/dashboard" component={Overview} />
                <PrivateRoute exact path="/addEvent" component={AddEvent} />
                <PrivateRoute exact path="/event_list" component={EventList} />
                <Route component={NotFound} />
            </Switch>
        </section>
    );
};

export default Routes;