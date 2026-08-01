import './adminpanel.css';
import React, { Component, useState } from "react";
import SaveIcon from '../../Assets/save.png';
import DeleteIcon from '../../Assets/delete.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './adminpanel.css';
import { Link } from 'react-router-dom';

const EditUser = () => {
    
    const [users, setUsers] = useState([
        {
            firstname: 'Jeremy',
            lastname: 'St Pierre',
            email: 'jeremy.st.pierre@gmail.com',
            password: 'adsdaas232323',
            created: Date.now(),
            updated: Date.now()
        }
    ]);

    const handleChange = (e) => {
        
    }
    
    return (
        <div className='admin-panel'>
            {users.map(u  => 
                <div className='admin-box'>
                    <TextField id="outlined-basic" label={"First name: " + u.firstname} variant="outlined" />
                    <TextField id="outlined-basic" label={"Last name: " + u.lastname} variant="outlined" />
                    <TextField id="outlined-basic" label={"Email: " + u.email} variant="outlined" />
                    <TextField id="outlined-basic" label={"Password: " + u.password} variant="outlined" />
                    <TextField slotProps={{ input: { readOnly: true, },}} id="outlined-basic" label={"Created: " + u.created} variant="outlined" />
                    <TextField slotProps={{ input: { readOnly: true, },}} id="outlined-basic" label={"Updated: " + u.updated} variant="outlined" />
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
            
        </div>
    );
}

export default EditUser;