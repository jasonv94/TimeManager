import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextField, Container, Typography, Paper, CssBaseline } from "@material-ui/core";
import { login } from '../../actions/auth';


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(username, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography component="h1" variant="h5" align="center">
                    Sign In
                </Typography>
                <Typography component="h2" variant="h7" align="center">
                    <i className="fas fa-user" /> Sign Into Your Account
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
                        <input type="submit" className="btn btn-primary" value="Login" />
                    </form>
                </Paper>
                <p className="my-1">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </p>
            </Container>
        </Fragment>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);