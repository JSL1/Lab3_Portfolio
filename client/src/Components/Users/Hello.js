import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Hello = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return(
        <div className="hello-user">
            <div>Hello</div>
            <div><Link to="./Login/">Log in</Link></div>
        </div>
    );
}

export default Hello;