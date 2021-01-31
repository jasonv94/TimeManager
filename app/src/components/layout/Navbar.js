import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import { Container, AppBar, CssBaseline, Toolbar } from "@material-ui/core";


const Navbar = ({ auth: { isAuthenticated }, logout }) => {
    const authLinks = (
        <ul>
            <li>
                <Link to="/dashboard">
                    <i className="fas fa-user" />{' '}
                    <span className="hide-sm">Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/addEvent">
                    <i className="fas fa-user" />{' '}
                    <span className="hide-sm">Add Event</span>
                </Link>
            </li>
            <li>
                <a onClick={logout} href="#!">
                    <i className="fas fa-sign-out-alt" />{' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    );

    return (

        <div>
            <h1>
                <Link to="/">
                    <i className="fas fa-code" /> TimeMaster
                </Link>
            </h1>
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        </div>


    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);