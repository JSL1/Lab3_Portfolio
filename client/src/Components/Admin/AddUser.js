import React, { Component, useState} from "react";
import './adminpanel.css';
import { Link } from 'react-router-dom';
import Confirmation from "./Confirmation";

const AddUser = () => {
    
    const [showConfirmation, setShowConfirmation] = useState(false);

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({...values, [name]: value}));
    }

    const createUser = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/users`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application.json"
                },
                body: JSON.stringify(user)
            });
            const result = await response.json();
            setShowConfirmation(true);
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div className="admin-panel">
        <h2>Add a User</h2>
        <form className="admin-box">
            <label className="admin-header">
                First Name:
                <input className="admin-input" type="text" name="firstname" value={user.firstname} onChange={handleChange} />
            </label>
            <label className="admin-header">
                Last Name:
                <input className="admin-input" type="text" name="lastname" value={user.lastname} onChange={handleChange} />
            </label>
            <label className="admin-header">
                Last Name:
                <input className="admin-input" type="text" name="lastname" value={user.lastname} onChange={handleChange} />
            </label>
            <label className="admin-header">
                email:
                <input className="admin-input" type="text" name="email" value={user.email} onChange={handleChange} />
            </label>
            <label className="admin-header">
                Password:
                <input className="admin-input" type="password" name="lastname" value={user.password} onChange={handleChange} />
            </label>
            <input type="submit" className="admin-button" value="Submit User" onClick={createUser}></input>
                            {showConfirmation && <Confirmation />}
            
        </form>
                <Link to="../Admin">Back to Admin</Link>
        </div>
    );
}

export default AddUser;