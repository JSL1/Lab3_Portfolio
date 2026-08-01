import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Vibes from '../Images/goodvibes.jpg';

const Home = () => {
    return (
        <div className='homepage'>
            <div>
                <img src={Vibes} classname='leading-img' />
            </div>
            <div>
                <span className='name'>Hey there.</span>
                <p className='about-me'>I'm Jeremy; a software engineer from southern Ontario.</p>
                <Link to='/AboutMe' className='name'>Learn more</Link>
            </div>
        </div>
    );
}

export default Home;