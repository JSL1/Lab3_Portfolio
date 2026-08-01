import React, {Component} from 'react';
import Me from '../Images/Me.jpg';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className='about-me'>
            <div>
                <img src={Me} />
            </div>
            <div>
                <span className='name'>Let me tell you...</span>
                <p>I'm a web and game developer who enjoys building things that people can actually use and have fun with. I work with React, JavaScript, Phaser, and Unity, and I've spent years creating my own projects, experimenting with new ideas, and improving my skills along the way. Whether it's a website, a browser game, or a larger game project, I like taking something from a simple concept to a finished product.</p>
                <span className='name'>Mission Statement</span>
                <p>I want to make software and games that are fun, useful, and memorable. I'm always looking for ways to learn, improve, and take on new challenges while creating projects that people genuinely enjoy using.</p>
            </div>
        </div>
    );
}

export default AboutMe;