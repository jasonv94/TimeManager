import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from "@material-ui/core/TextField";

// import axios from "axios";

// import { Banner } from "../components";

async function loginUser(credentials) {
    // return fetch('http://localhost:8080/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    // })
    //     .then(data => data.json())
    return { "token": credentials }
}

function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <TextField onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <TextField
                        label="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;