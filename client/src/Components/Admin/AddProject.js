import React, { Component, useState } from "react";
import './adminpanel.css';
import { Link } from 'react-router-dom';
import Confirmation from "./Confirmation";

const AddProject = () => {

    const [showConfirmation, setShowConfirmation] = useState(false);
    

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

    const createProject = async () => {
        try {
            const response = await fetch(`${ProcessingInstruction.env.REACT_APP_API_URL}api/projects`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application.json"
                },
                body: JSON.stringify(project)
            });
            const result = await response.json();
            setShowConfirmation(true);
        } catch(err) {
            console.log(err);
        }
    };

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
                <input type="submit" className="admin-button" value="Submit Project" onClick={createProject}></input>
                {showConfirmation && <Confirmation />}
            </form>
                    <Link to="../Admin">Back to Admin</Link>
            
        </div>
    );
}

export default AddProject;