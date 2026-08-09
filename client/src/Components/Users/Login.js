import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {

    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCredentials(values => ({...values, [name]: value}));
    } 

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}api/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON. stringify({
                        email: credentials.email,
                        password: credentials.password
                    })
                }
            );
            const result = await response.json();
            
            if(!response.ok) {
                setError(result.message);
                return;
            }
            
            if (result.success) {
                dispatch(login({
                    token: result.token,
                    user: result.user
                }));
            }
            
            console.log(result);

        } catch (err) {
            console.log(err);
            setError("Unable to connect to server.");
        }
    };

    return(
        <div className="login-form">
            <form>
                <input type="email" placeholder="Email Address" className="login-form-input" name="email" value={credentials.email} onChange={handleChange} />
                <input type="password" placeholder="Password" className="login-form-input" name="password" value={credentials.password} onChange={handleChange} />
                <input type="submit" name="submit" value="Log in" className="submitbutton" onClick={handleLogin} />
                <span className="login-text">No account? <Link to="../Signup">Sign up here. </Link></span>
            </form>
        </div>
    );
}

export default Login;
