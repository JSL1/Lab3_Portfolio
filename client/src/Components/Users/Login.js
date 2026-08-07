import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

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
                <input type="email" placeholder="Email Address" className="login-form-input" name="email" value={credentials.email} onChange={handleChange} />
                <input type="password" placeholder="Password" className="login-form-input" name="password" value={credentials.password} onChange={handleChange} />
                <input type="submit" name="submit" value="Log in" className="submitbutton"/>
                <span className="login-text">No account? <Link to="../Signup">Sign up here. </Link></span>
            </form>
        </div>
    );
}

export default Login;
