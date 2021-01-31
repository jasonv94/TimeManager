import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Typography, CssBaseline } from "@material-ui/core";

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography component="h1" variant="h5" align="center">
                    TimeMaster9000
            </Typography>
                <Typography component="h2" variant="h7" align="center">
                    <i className="fas fa-user" /> Take Control of you time
            </Typography>
                <Link to='/register' className='btn btn-primary'>
                    Sign Up
                </Link>
                <Link to='/login' className='btn btn-light'>
                    Login
                </Link>
            </Container>
        </Fragment>

    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);