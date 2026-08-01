import React, { Component } from "react";
import { Link } from "react-router-dom";
import Debug from '../Images/debugging.png';
import Gamedev from '../Images/game-development.png';
import Webdev from '../Images/app-development.png';
const refs =[
    {
        name: 'James B',
        testimonial: 'Jeremy did a really great job on my website and now my sales are out of control! cha-ching!',
        position: 'Sales Manager',
        company: 'Newark Auto'
    },
    {
        name: 'Dean T',
        testimonial: 'Burning Rush is so fun I play it every day!',
        position: 'Lead Developer',
        company: 'Strictly Software'
    },
    {
        name: 'Mike G',
        testimonial: 'Jeremy St Pierre is extremely professional and easy to work with. I would hire him again in an instant.',
        position: 'Product Manager',
        company: 'SkyNet'
    }
];

const Services = () => {
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
                {refs.map(r => 
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