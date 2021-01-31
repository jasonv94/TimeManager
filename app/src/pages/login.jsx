import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Container, Button, Typography, CssBaseline, Paper } from "@material-ui/core";
import axios from "axios";
import { withRouter } from 'react-router-dom';



class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.set_username = this.set_username.bind(this);
        this.set_password = this.set_password.bind(this);
        this.handle_submit = this.handle_submit.bind(this);
        this.handle_register = this.handle_register.bind(this);
    }

    render() {
        const { username, password } = this.state;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography component="h1" variant="h5" align="center">
                    Sign up
                </Typography>
                <Paper style={{ padding: 16, }}>
                    <form>
                        <TextField
                            label="Username"
                            variant="outlined"
                            inputProps={{ "value": username }}
                            fullWidth={true}
                            onChange={e => this.set_username(e.target.value)} />


                        <TextField
                            variant="outlined"
                            inputProps={{ "value": password }}
                            label="Password"
                            type="password"
                            fullWidth={true}
                            onChange={e => this.set_password(e.target.value)}
                        />
                        <div>
                            <Button
                                color="primary"
                                type="submit"
                                onClick={this.handle_submit}
                            >
                                Login
                            </Button>
                            <Button
                                color="primary"
                                type="submit"
                                onClick={this.handle_register}
                            >
                                Register
                            </Button>
                        </div>
                    </form>
                </Paper>
            </Container>
        )
    }

    set_username(username) {
        this.setState({ username });
    }

    set_password(password) {
        this.setState({ password });
    }

    handle_submit(e) {
        e.preventDefault();

        const { username, password } = this.state;
        console.log("logging in: " + username);

        const config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        axios
            .post('http://localhost:5000/api/login', { username, password }, config)
            .then(res => {
                console.log("successful:" + res.data + " " + this.props);
                this.props.setToken(res.data);
                this.props.history.push("/overview");
            })
            .catch(err => {
                console.log(err)
            })
    }

    handle_register(e) {
        e.preventDefault();
        const { username, password } = this.state;
        console.log("register: " + username);

        const config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        axios
            .post('http://localhost:5000/api/register', { username, password }, config)
            .then(res => {
                this.props.setToken(res.data);
                console.log("successful");
            })
            .catch(err => {
                console.log("err: " + err)
            })
    }
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default withRouter(Login);