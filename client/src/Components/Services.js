import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Debug from '../Images/debugging.png';
import Gamedev from '../Images/game-development.png';
import Webdev from '../Images/app-development.png';

const Services = () => {

    //setting the default references
    const [references, setReferences] = useState([]);

    //services
    const [services, setServices] = useState([]);

    const serviceIcons = [Debug, Gamedev, Webdev];


    //getting references from the backend
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}api/references`)
            .then(res => res.json())
            .then(result => {
                setReferences(result.data);
                console.log(result.data);
            })
            .catch(err => console.log(err));
        
        fetch(`${process.env.REACT_APP_API_URL}api/services`)
            .then(res => res.json())
            .then(result => {
                setServices(result.data);
                console.log(result.data);
            })
            .catch(err => console.log(err));
            
    }, []);

    return (
        <>
        <div className="services">
            {services.map(s => 
                <div className="service">
                    <img src={serviceIcons[services.indexOf(s)]} className="" /><br />
                    <span className="name">{s.name}</span>
                    <p>{s.description}</p>
                </div>
            )}
        </div>
         <div className="references">
                {references.map(r => 
                    <div className="reference">
                        <p>{r.testimonial}</p>
                        <span>{r.name}</span>
                    </div>
                )}
        </div>
        </>
    );
}

export default Services;