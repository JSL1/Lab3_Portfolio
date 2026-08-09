import React, {Component, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AddUser from "../Admin/AddUser";
import Confirmation from "../Admin/Confirmation";


const SignUp = () => {
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


    const createUser = async () => {
        e.preventDefault();
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}api/auth/signup`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        firstname: credentials.firstname,
                        lastname: credentials.lastname,
                        email: credentials.email,
                        password: credentials.password
                    })
                }
            );

            const result = await response.json();

            console.log("SIGNUP RESPONSE:", result);

            if (!response.ok) {
                setMessageText(result.message);
                return;
            }

            if (result.success) {
                setMessageText("Account created successfully.");
            }

        } catch (err) {
            console.log(err);
            setMessageText("Unable to connect to server.");
        }
    };

    return(
        <div className="signup-form">
            <form>
                <input type="text" placeholder="First Name" className="login-form-input" name="firstname" value={credentials.firstname} onChange={handleChange} />
                <input type="text" placeholder="Last Name" className="login-form-input" name="lastname" value={credentials.lastname} onChange={handleChange} />
                <input type="email" placeholder="Email Address" className="login-form-input" name="email" value={credentials.email} onChange={handleChange} />
                <input placeholder="Password" type="password" className="login-form-input" name="password" value={credentials.password} onChange={handleChange} />s
                <span className="login-text">Already have an account? <Link to="../Login">Log in now. </Link></span>
                <input type="reset" value="Reset Form" className="login-button" className="resetbutton" />
                <input type="submit" value="Sign Up" className="submitbutton" handleClick={createUser} />
                {showConfirmation && <Confirmation />}
                <span className="messageText">{messageText}</span>
            </form>
        </div>
    );
}

export default SignUp;