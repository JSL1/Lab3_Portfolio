import React, {Component, useState } from "react";

const SignUp = () => {

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

    }

    return(
        <div className="signup-form">
            <form>
                <label>First Name:
                    <input type="text" name="firstname" value={credentials.firstname} onChange={handleChange} />
                </label>
                <label>Last Name:
                    <input type="text" name="lastname" value={credentials.lastname} onChange={handleChange} />
                </label>
                <label>Email Address:
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} />
                </label>
                <label>Desired password
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} />
                </label>
                <label>Desired password (again)</label>
                    <input type="password" name="password2" onChane={checkPasswords} />

                <input type="reset" value="Reset Form" className="login-button" />
                <input type="submit" value="Sign Up" className="login-button" />
            </form>

        </div>
    );
}

export default SignUp;