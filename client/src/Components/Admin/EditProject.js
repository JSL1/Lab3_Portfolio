import React, { Component , useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './adminpanel.css';
import SaveIcon from '../../Assets/save.png';
import DeleteIcon from '../../Assets/delete.png';
import { Link } from 'react-router-dom';
import Confirmation from './Confirmation';

const EditProject = () => {
    const [projects, setProjects] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);

    //READ
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}api/projects`)
            .then(res => res.json())
            .then(result => {
                setProjects(result.data);
                console.log(result.data);
            })
            .catch(err => console.log(err));
    }, []);
    
    const handleChange = (index, e) => {
        const {name, value } = e.target;
        setProjects(current => 
            current.map((project, i) => i === index ? {... project, [name]: value } : project));
    }
    
    //DELETE
    const deleteProject = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/projects/${id}`, 
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            const result = await response.json();
            console.log(result);

            if(result.success) {
                setProjects(current =>
                    current.filter(project => project.id !== id)
                );
                setShowConfirmation(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    //UPDATE
    const saveProject = async (project) => {
        try {
            console.log(`${process.env.REACT_APP_API_URL}api/users/${project.id}`);
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/projects`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: project.title,
                        description: project.description,
                        date: project.date,
                        live: project.live,
                        repo: project.repo                
                    })
                }
            );
            const result = await response.json();
            console.log(result);
            setShowConfirmation(true);
        } catch(err) {
            console.log(err);
        }
    };



    return (
        <div className='admin-panel'>
        {projects.map(p =>
            <div className='admin-box'>
                <TextField id="outlined-basic" label={p.title} variant="outlined" />
                <TextField
                    id="outlined-multiline-static"
    
                    label="Project Description"
                    multiline
                    rows={4}
                    defaultValue={p.description}
                />
                <TextField id="outlined-basic" label="Live Demo (URL)" variant="outlined" />
                <TextField id="outlined-basic" label="Repo (URL)" variant="outlined" />
                <div className='admin-controls'>
                    <div className='edit-button'>
                        <img src={SaveIcon} onClick={() => saveProject(p)}/>
                    </div>
                    <div className='edit-button'>
                        <img src={DeleteIcon} onClick={() => deleteProject(p.id)}/>
                    </div>
                </div>
                {showConfirmation && <Confirmation />}
                
            </div>
        )}
        <Link to="../Admin">Back to Admin</Link>
        </div>
    );
}

export default EditProject;