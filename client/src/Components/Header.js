import React, { Component } from 'react';
import Logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo"><span>Jeremy St Pierre</span></div>
            {/*
                For my "Logo" I initially made a logo using freelogodesign, but I wasn't happy with it.
                I kept the color schene and I made a "logo" using a cool font and CSS effect.
                Compare with Images/logo.png
                
                The font: https://www.dafont.com/brother-signature.font

            */}
            <div className='nav'>
                <div className="nav-link">
                    {/* 
                        <Link> is React Router's version of <a>. It is not a hyperlink, as hyperlinks are not capable of client-side routing.
                    */}
                    <Link to='./'><span className='nav-link'>Home</span></Link>
                </div>
                <div className="nav-link">
                    <Link to='./AboutMe'><span className='nav-link'>About Me</span></Link>
                </div>
                <div className="nav-link">
                    <Link to='./Services'><span className='nav-link'>Services and References</span></Link>
                </div>
                <div className="nav-link">
                    <Link to='./Projects'><span className='nav-link'>Projects</span></Link>
                </div>
                <div className="nav-link">
                    <Link to='./Contact'><span className='nav-link'>Contact</span></Link>
                </div>
                <div className="nav-link">
                    <Link to='./Admin'><span className='nav-link'>Admin</span></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;