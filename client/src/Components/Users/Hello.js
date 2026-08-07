import React, { Component } from "react";
import { Link } from "react-router-dom";

const Hello = () => {
    return(
        <div className="hello-user">
            <div>Hello</div>
            <div><Link to="./Login/">Log in</Link></div>
        </div>
    );
}

export default Hello;