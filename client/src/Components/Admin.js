import React, { Component, useState } from "react";
import { Router, Link } from "react-router-dom";
import './Admin/adminpanel.css';

const Admin = () => {
    const id = React.useId();
    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>
            <section>
                <span className='admin-header'>Projects</span>
                    <div className="admin-box">
                        <Link to='./AddProject'>Add a Project</Link><br />
                        <Link to='./EditProject'>Edit a Project</Link>
                    </div>
            </section>
            <section>
                <span className='admin-header'>References</span>
                    <div className="admin-box">
                        <Link to='./AddReference'>Add a Reference</Link><br />
                        <Link to='./EditReference'>Edit a Reference</Link>
                    </div>
            </section>
            <section>
                <span className='admin-header'>Users</span>
                    <div className="admin-box">
                        <Link to='./AddUser'>Add a User</Link><br />
                        <Link to='./EditUser'>Edit a User</Link>
                    </div>
            </section>
        </div>
    );
}

export default Admin;