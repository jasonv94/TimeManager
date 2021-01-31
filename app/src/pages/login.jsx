import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
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
            <div className="container">
                <form>
                    <label>
                        <p>Username</p>
                        <TextField
                            inputProps={{ "value": username }}
                            onChange={e => this.set_username(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <TextField
                            inputProps={password}
                            label="Password"
                            type="password"
                            onChange={e => this.set_password(e.target.value)}
                        />
                    </label>
                    <div>
                        <button type="submit" onClick={this.handle_submit}>Login</button>
                        <button type="submit" onClick={this.handle_register}>Register</button>
                    </div>
                </form>
            </div>
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