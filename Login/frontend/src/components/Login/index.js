import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

import api from '../../services/api';

import styles from './styles.module.css'

const Login = () => {

    const [cookies, setCookie] = useCookies();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [logged, setLogged] = useState();
    const [authenticated, setAuthenticated] = useState();

    function handleLoginChange(e) {
        setName(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleAuthRoute() {
        try {
            api
                .get('/otherRoute', { withCredentials: true })
                .then(res => {
                    if (res.status === 200) {
                        setAuthenticated('Authenticated!');
                        console.log('Authenticated!');
                    } else {
                        setAuthenticated('Oopps... something wrong');
                        console.log('Oopps... something wrong, status code ' + res.status);
                        return function cleanup() { }
                    }
                })
                .catch((err) => {
                    setAuthenticated('Oopps... something wrong');
                    console.log('Oopps... something wrong');
                    console.log(err);
                    return function cleanup() { }
                });
        } catch (error) {
            setAuthenticated('Oopps... something wrong');
            console.log('Oopps... something wrong');
            console.log(error);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        try {
            api
                .post('/login', { name, password })
                .then(res => {
                    if (res.status === 200) {
                        setCookie('authToken', res.data.authToken);
                        setLogged('Logged!');
                        console.log('Logged!');
                    } else {
                        setLogged('Oopps... something wrong');
                        console.log('Oopps... something wrong, status code ' + res.status);
                        return function cleanup() { }
                    }
                })
                .catch((err) => {
                    setLogged('Oopps... something wrong');
                    console.log('Oopps... something wrong');
                    console.log(err);
                    return function cleanup() { }
                });
        } catch (error) {
            setLogged('Oopps... something wrong');
            console.log('Oopps... something wrong');
            console.log(error);
        }
    }

    return (
        <>
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
                        <button>Login</button>
                    </div>
                    {logged && <p className={styles.message}>{logged}</p>}
                </form>
            </div>
            {logged ?
                <div className={styles.buttons}>
                    <button
                        style={{ fontSize: "16px", width: "300px" }}
                        onClick={handleAuthRoute}
                    >Route with auth</button>
                </div>
                : null
            }
            {authenticated && <p className={styles.message}>{authenticated}</p>}
        </>
    );
}

export default Login;