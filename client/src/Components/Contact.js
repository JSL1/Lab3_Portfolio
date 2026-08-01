import React, { Component } from "react";
import { Link } from "react-router-dom";
import Mail from '../Images/mail.jpg';

const Contact = () => {
    return (
        <div className='contact'>
            <div>
            <span class='name'>Get in touch with me</span>
            <p>I'd love to hear from you.</p>
            <form action='#'>
                <label for='name'>Your name</label>
                <input type='text' id='name' name='name' />
                <label for='email' id='email'>Email Address</label>
                <input type='email' id='email' name='email' />
                <label for='message'>Your messsage</label>
                <textarea id='message' name='message'>
                </textarea>
                <button type='submit'>Submit</button>
            </form>
            </div>
            <div>
                <img src={Mail} />
            </div>
        </div>
    );
}

export default Contact;
