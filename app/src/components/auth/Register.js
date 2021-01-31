import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

import { TextField, CssBaseline, Container, Typography, Paper } from "@material-ui/core";

const Register = ({ register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        password2: ''
    });

    const { username, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match', 'danger');
        } else {
            register({ username, password });
        }
    };

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography component="h1" variant="h5" align="center">
                    Sign Up
                </Typography>
                <Typography component="h2" variant="h7" align="center">
                    <i className="fas fa-user" /> Create Your Account
                </Typography>
                <Paper style={{ padding: 16, }}>
                    <form className="form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <TextField
                                type="username"
                                label="Username"
                                name="username"
                                value={username}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                minLength="6"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                type="password"
                                placeholder="Confirm Password"
                                name="password2"
                                value={password2}
                                onChange={onChange}
                                minLength="6"
                            />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Register" />
                    </form>
                </Paper>
                <p className="my-1">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </Container>
        </Fragment >
    );
};

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);