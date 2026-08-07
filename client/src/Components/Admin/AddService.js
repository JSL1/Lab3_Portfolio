import React, { Component, useState } from "react";
import './adminpanel.css';
import { Link } from 'react-router-dom';
import Confirmation from "./Confirmation";

const AddService = () => {
    
    const [showConfirmation, setShowConfirmation] = useState(false);

    const [service, setService] = useState({
        title: '',
        description: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setService(values => ({...values, [name]: value}));
    }

    const createService = async () => {
        try {
            const response = await fetch(`${ProcessingInstruction.env.REACT_APP_API_URL}api/services`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(service)
            });
            const result = await response.json();
            setShowConfirmation(true);
        } catch(err) {
            console.log(err);        
        }
    }

    return (
        <div className="admin-panel">
            <h2>Add Service</h2>
            <form className="admin-box">
                <label className="admin-header">
                    Service Name:
                    <input type="text" className="admin-input" name="name" value={service.name} onChange={handleChange} />
                </label>
                <label className="admin-header">
                    Service Description:
                    <input type="text" className="admin-input" name="description" value={service.description} onChange={handleChange} />
                </label>
                <input type="submit" className="admin-button" value="Submit Service" onClick={createService}></input>
                {showConfirmation && <Confirmation />}
            </form>
        </div>
    );
};

export default AddService;