import React, { Component , useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './adminpanel.css';
import SaveIcon from '../../Assets/save.png';
import DeleteIcon from '../../Assets/delete.png';
import { Link } from 'react-router-dom';

const EditProject = () => {
    const [projects, setProjects] = useState([
        {
            title: 'Untitled Weather App',
            description: 'A weather app built with JavaScript, CSS animations and weatherAPI.',
            date: '',
            live: 'https://jsl1.github.io/Assignment6/weather',
            repo: 'https://github.com/JSL1/Assignment6'
        },
        {
            title: 'Burning Rush',
            description: 'A vertical shooter built with HTML and PhaserJS. An arcade classic',
            live: 'https://jstp.itch.io/burning-rush',
            repo: 'https://github.com/JSL1/Burning-Rush'
        }
    ]);

    const handleChange = (e) => {

    }

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
                        <img src={SaveIcon} />
                    </div>
                    <div className='edit-button'>
                        <img src={DeleteIcon} />
                    </div>
                </div>
            </div>
        )}
        <Link to="../Admin">Back to Admin</Link>
        </div>
    );
}

export default EditProject;