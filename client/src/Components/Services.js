import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Debug from '../Images/debugging.png';
import Gamedev from '../Images/game-development.png';
import Webdev from '../Images/app-development.png';


const Services = () => {

    //setting the default references
    const [references, setReferences] = useState([]);

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

    return (
        <>
        <div className='services'>
            <div className="service">
                <img src={Webdev} /><br />
                <span className="name">Web Development</span>
                <p>Custom websites built with modern technologies, focused on performance, usability, and responsive design. From simple landing pages to full web applications, I create solutions tailored to your needs.</p>
            </div>
            <div className="service">
                <img src={Gamedev} /><br />
                <span className="name">HTML5 Gane Development</span>
                <p>Development of interactive browser-based games using HTML5, JavaScript, and modern game frameworks. Ideal for web portals, educational games, promotional content, and indie game projects.</p>
            </div>
            <div className="service">
                <img src={Debug} /><br />
                <span className="name">Debugging & Troubleshooting</span>
                <p>Identifying and fixing bugs, performance issues, and unexpected behavior in existing code. Whether it's a website, web application, or game project, I can help track down problems and get things running smoothly again.</p>
            </div>
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