import React, {Component, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AddUser from "../Admin/AddUser";
import Confirmation from "../Admin/Confirmation";


const SignUp = () => {
    const password2 = useRef(null);
    const [messageText, setMessageText] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [credentials, setCredentials] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCredentials(values => ({...values, [name]: value}));
    }

    const checkPasswords = () => {
        const value = password2.current.value;
        
        if (credentials.password != '' && credentials.password === credentials.value) {
            return true;
        } else { 
            return false;
        } 
    }

    const createUser = async () => {
        if (checkPasswords) {
            console.log("SENDING:", credentials);
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}api/users`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials)
                });
                console.log("STATUS:", response.status);
                const result = await response.json();
                console.log("RESPONSE:", result);
                setShowConfirmation(true);
            } catch(err) {
                console.log(err);
            }
        } else {
            setMessageText('Passwords must match and not be blank.');
        }
    };

    return(
        <div className="signup-form">
            <form>
                <input type="text" placeholder="First Name" className="login-form-input" name="firstname" value={credentials.firstname} onChange={handleChange} />
                <input type="text" placeholder="Last Name" className="login-form-input" name="lastname" value={credentials.lastname} onChange={handleChange} />
                <input type="email" placeholder="Email Address" className="login-form-input" name="email" value={credentials.email} onChange={handleChange} />
                <input placeholder="Password" type="password" className="login-form-input" name="password" value={credentials.password} onChange={handleChange} />
                <input type="password" placeholder="Password (again)" className="login-form-input" name="password2" />
                <span className="login-text">Already have an account? <Link to="../Login">Log in now. </Link></span>
                <input type="reset" value="Reset Form" ref={password2} className="login-button" className="resetbutton" />
                <input type="submit" value="Sign Up" className="submitbutton" />
                {showConfirmation && <Confirmation />}
                <span className="messageText">{messageText}</span>
            </form>
        </div>
    );
}

export default SignUp;