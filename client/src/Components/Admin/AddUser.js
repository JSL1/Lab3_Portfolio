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
        password: '',
        created: Date.now(),
        updated: Date.now()
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({...values, [name]: value}));
    }

    
    const createUser = async () => {
        console.log("SENDING:", user);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/users`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            console.log("STATUS:", response.status);
            const result = await response.json();
            console.log("RESPONSE:", result);
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
                email:
                <input className="admin-input" type="text" name="email" value={user.email} onChange={handleChange} />
            </label>
            <label className="admin-header">
                Password:
                <input className="admin-input" type="password" name="password" value={user.password} onChange={handleChange} />
            </label>
            <input type="hidden" name="created" value={user.created} />
            <input type="hidden" name="updated" value={user.updated} />
            <input type="button" className="admin-button" value="Submit User" onClick={createUser} />
            {showConfirmation && <Confirmation />}
        </form>
                <Link to="../Admin">Back to Admin</Link>
        </div>
    );
}

export default AddUser;