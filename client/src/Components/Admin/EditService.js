import './adminpanel.css';
import React, { Component, useState, useEffect } from "react";
import SaveIcon from '../../Assets/save.png';
import DeleteIcon from '../../Assets/delete.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Confirmation from './Confirmation';

const EditService = () => {
    const [services, setServices] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}api/services`)
            .then(res => res.json())
            .then(result => {
                setServices(result.data);
                console.log(result.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleChange = (index, e) => {
        const {name, value } = e.target;
        setServices(current => 
            current.map((service, i) => i === index ? {...services, [name]: value } : service));        
    }

    const deleteService = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/references/${id}`, 
                {
                    method: "DELETE",
                }
            );

            const result = await response.json();
            console.log(result);

            if(result.success) {
                setServices(current =>
                    current.filter(service => service.id !== id)
                );
                setShowConfirmation(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const saveService = async (service) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/services`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "aplication/json"
                    },
                    body: JSON.stringify({
                        name: service.name,
                        description: service.description
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
            {services.map(s =>
                <div className='admin-box'>
                    <TextField id="outlined-basic" label={"Name: " + s.name} variant="outlined" />
                    <TextField id="outlined-basic" label={"Description: " + s.description} variant="outlined" />
                <div className='admin-controls'>
                    <div className='edit-button'>
                        <img src={SaveIcon} />
                    </div>
                    <div className='edit-button'>
                        <img src={DeleteIcon} onClick={() => deleteService(s.id)} />
                    </div>
                </div>
                                {showConfirmation && <Confirmation />}
                
                </div>
            )}
                    <Link to="../Admin">Back to Admin</Link>
        </div>
    );
}

export default EditService;