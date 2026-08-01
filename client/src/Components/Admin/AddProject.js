import React, { Component, useState } from "react";
import './adminpanel.css';
import { Link } from 'react-router-dom';

const AddProject = () => {

    const [project, setProject] = useState({
        tite: '',
        date: '',
        description: '',
        live: '',
        repo: ''
    });

    const handleChange = (e) => {
        const name= e.target.name;
        const value = e.target.value;
        setProject(values => ({...values, [name]: value}));
    }

    return (
        <div className="admin-panel">
            <h2>Add a Project</h2>
            <form className="admin-box">
                <label className="admin-header">
                    Project Title:
                    <input type="text" className="admin-input" name="title" value={project.title} onChange={handleChange} />
                </label>
                <label className="admin-header">
                    Date Completed:
                    <input type="text" className="admin-input" name="date" value={project.date}  />
                </label>
                <label className="admin-header">
                    Description:
                    <input type="text" className="admin-input" name="description" value={project.description} onChange={handleChange} />
                </label>
                <label className="admin-header">
                    Live URL:
                    <input type="text" className="admin-input" name="description" value={project.live} onChange={handleChange} />
                </label>
                <label className="admin-header">
                    Repo URL:
                    <input type="text" className="admin-input" name="description" value={project.repo} onChange={handleChange} />
                </label>
                <input type="submit" className="admin-button" value="Submit Project"></input>
            </form>
                    <Link to="../Admin">Back to Admin</Link>
            
        </div>
    );
}

export default AddProject;