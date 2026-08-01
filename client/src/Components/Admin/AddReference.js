import React, { Component, useState } from "react";
import './adminpanel.css';
import { Link } from 'react-router-dom';

const AddReference = () => {

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
             <input type="submit" className="admin-button" value="Submit Reference"></input>
        </form>
                <Link to="../Admin">Back to Admin</Link>

        </div>
    );
}

export default AddReference;