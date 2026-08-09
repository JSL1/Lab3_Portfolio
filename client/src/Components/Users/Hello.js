import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useSelector } from "react-redux";

const Hello = () => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
    };

    return(
        <div className="hello-user">
            <div>Hello. {user?.firstname}</div>
            <div>
                {!isAuthenticated ? (
                    <Link to="./Login/">Log In</Link>
                ) : (
                    <Link to="/" onClick={handleLogout}>Log Out</Link>
                )}
            </div>
        </div>
    );
}

export default Hello;