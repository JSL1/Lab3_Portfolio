import React, { Component, useState } from "react";

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCredentials(values => ({...values, [name]: value}));
    } 

    return(
        <div className="login-form">
            <form>
                <label>Email Address:
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} />
                </label>
                <label>Password: 
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} />
                </label>
            </form>
        </div>
    );
}

export default Login;
