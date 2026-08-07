import './adminpanel.css';
import React, { Component, useState, useEffect } from "react";
import SaveIcon from '../../Assets/save.png';
import DeleteIcon from '../../Assets/delete.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './adminpanel.css';
import { Link } from 'react-router-dom';
import Confirmation from './Confirmation';

const EditUser = () => {
    
    const [users, setUsers] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);

    //getting references from the backend
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}api/users`)
            .then(res => res.json())
            .then(result => {
                setUsers(result.data);
                console.log(result.data);
            })
            .catch(err => console.log(err));
    }, []);

    //Changing in state
    const handleChange = (index, e) => {
        const {name, value } = e.target;
        setUsers(current => 
            current.map((user, i) => i === index ? {... user, [name]: value } : user));
    }

    //UPDATE
    const saveProject = async (user) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/users`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        firstname: user.firstname,
                        lastname: user.description,
                        email: user.date,
                        password: user.password,
                        created: user.created,
                        updated: Date.now().toString(),          
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

    //DELETE
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/users/${id}`, 
                {
                    method: "DELETE",
                }
            );

            const result = await response.json();
            console.log(result);

            if(result.success) {
                setUsers(current =>
                    current.filter(user => user.id !== id)
                );
                setShowConfirmation(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    
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
                            <img src={DeleteIcon} onClick={() => deleteUser(u.id)} />
                        </div>
                    </div>
                    {showConfirmation && <Confirmation />}
                </div>               
            )}
            
        </div>
    );
}

export default EditUser;