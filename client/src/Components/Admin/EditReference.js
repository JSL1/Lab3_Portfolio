import './adminpanel.css';
import React, { Component, useState, useEffect } from "react";
import SaveIcon from '../../Assets/save.png';
import DeleteIcon from '../../Assets/delete.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './adminpanel.css';
import { Link } from 'react-router-dom';
import Confirmation from './Confirmation';

const EditReference = () => {
    const [references, setReferences] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    
    //getting references from the backend
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}api/references`)
            .then(res => res.json())
            .then(result => {
                setReferences(result.data);
                console.log(result.data);
            })
            .catch(err => console.log(err));
    }, []);

    //chaging the references in state
     const handleChange = (index, e) => {
        const {name, value } = e.target;
        setReferences(current => 
            current.map((reference, i) => i === index ? {... reference, [name]: value } : reference));
    }
    
    //DELETE
    const deleteReference = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/references/${id}`, 
                {
                    method: "DELETE",
                }
            );

            const result = await response.json();
            console.log(result);

            if(result.success) {
                setReferences(current =>
                    current.filter(reference => reference.id !== id)
                );
                setShowConfirmation(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

        //UPDATE
    const saveReference = async (reference) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/references`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "aplication/json"
                    },
                    body: JSON.stringify({
                        name: reference.name,
                        testimonial: reference.testimonial,
                        position: reference.position,
                        company: reference.company          
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
                        <img src={DeleteIcon} onClick={() => deleteReference(r.id)} />
                    </div>
                </div>
                                {showConfirmation && <Confirmation />}
                
                </div>
            )}
                    <Link to="../Admin">Back to Admin</Link>

        </div>
    );
}

export default EditReference;