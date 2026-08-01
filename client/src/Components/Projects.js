import React, { Component } from "react";
import { Link } from "react-router-dom";
import BRcover from '../Images/BurningRushCover.png';
import Weathercover from '../Images/WeatherCover.png';

let pros = [
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
];

const Projects = () => {
    return (
        <>
            <div>
                <span className="name">Projects</span>
                <p>Just a couple things I've worked on lately...</p>
            </div>
            <div className="projects">
            {pros.map(p =>
                <div className="project">
                    <span className="name2">{p.title}</span>
                    <p>{p.description}</p>
                    <span className="project-link"><Link to={p.live}>Check it out</Link></span>
                    <span className="project-link"><Link to={p.repo}>See the Code</Link></span>
                </div>
            )}
            </div>
           {/*
            <div className="project">
                <span className="name2">Untitled Weather App</span>
                <p>A weather app built with JavaScript, CSS animations and weatherAPI.</p>
                <span className="project-link"><Link to='https://jsl1.github.io/Assignment6/weather/'>Check it out.</Link></span>
                <span className="project-link"><Link to='https://github.com/JSL1/Assignment6'>See the Code</Link></span>
            </div>
            <div className='project'>
                <span className="name2">Burning Rush</span>
                <p>A vertical shooter built with HTML and PhaserJS. An arcade classic.</p>
                <span className="project-link"><Link to='https://jstp.itch.io/burning-rush'>Check it out.</Link></span>
                <span className="project-link"><Link to='https://github.com/JSL1/Burning-Rush'>See the Code</Link></span>
            </div>
            */}
        </>
    );
}

export default Projects;