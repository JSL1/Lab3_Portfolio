import React, { Component, useState } from "react";
import './adminpanel.css';
import { Link } from 'react-router-dom';
import Confirmation from "./Confirmation";

const AddReference = () => {

    const [showConfirmation, setShowConfirmation] = useState(false);
    
    const [reference, setReference] = useState({
       name: '',
       testimonial: '',
       position: '',
       company: ''
    });

    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setReference(values => ({...values, [name]: value}));
    }

    const createReference = async () => {
        try {
            const response = await fetch(`${ProcessingInstruction.env.REACT_APP_API_URL}api/references`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application.json"
                },
                body: JSON.stringify(reference)
            });
            const result = await response.json();
            setShowConfirmation(true);
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div className="admin-panel">
        <form className="admin-box">
            <h2>Add a Reference</h2>
            <label>
                Name:
                <input type="text" className="admin-input" name="name" value={reference.name} onChange={handleChange} />
            </label>
            <label>
                Testimonial:
                <input type="text" className="admin-input" name="testimonial" value={reference.testimonial} onChagne={handleChange} />
            </label>
            <label>
                Position:
                <input type="text" className="admin-input" name="position" vaalue={reference.testimonial} onChange={handleChange} />
            </label>
            <label>
                Company:
                <input type="text" className="admin-input" name="company" value={reference.company} onChange={handleChange} />
            </label>
             <input type="submit" className="admin-button" value="Submit Reference" onClick={createReference}></input>
                             {showConfirmation && <Confirmation />}
             
        </form>
                <Link to="../Admin">Back to Admin</Link>

        </div>
    );
}

export default AddReference;