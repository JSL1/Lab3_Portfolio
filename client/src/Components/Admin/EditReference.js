import './adminpanel.css';
import React, { Component, useState } from "react";
import SaveIcon from '../../Assets/save.png';
import DeleteIcon from '../../Assets/delete.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './adminpanel.css';
import { Link } from 'react-router-dom';

const EditReference = () => {
    const [references, setReferences] = useState([
        {
            name: '',
            testimonial: '',
            position: '',
            company: ''
        }
    ]);

    const handleChange = (e) => {

    }

    return (
        <div className='admin-panel'>
            {references.map(r =>
                <div className='admin-box'>
                    <TextField id="outlined-basic" label={"Name: " + r.name} variant="outlined" />
                    <TextField id="outlined-basic" label={"Testimonial: " + r.testimonial} variant="outlined" />
                    <TextField id="outlined-basic" label={"Position: " + r.position} variant="outlined" />
                    <TextField id="outlined-basic" label={"Company: " + r.company} variant="outlined" />
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

export default EditReference;