import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

import api from '../../services/api';

import styles from './styles.module.css'

const Login = () => {

    const [cookies, setCookie] = useCookies();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleLoginChange(e) {
        setName(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        try {
            api
                .post('/login', { name, password })
                .then(res => {
                    if (res.status === 200) {
                        setCookie('authToken', res.data.authToken, { httpOnly: true });
                        console.log('logged!');
                    } else {
                        console.log('Oopps... something wrong, status code ' + res.status);
                        return function cleanup() { }
                    }
                })
                .catch((err) => {
                    console.log('Oopps... something wrong');
                    console.log(err);
                    return function cleanup() { }
                });
        } catch (error) {
            console.log('Oopps... something wrong');
            console.log(error);
        }
    }

    return (
        <div className={styles.login_container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Username"
                    value={name}
                    onChange={handleLoginChange}
                    required />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required />
                <div className={styles.buttons}>
                    <a>
                        <button>
                            Login
                        </button>
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Login;