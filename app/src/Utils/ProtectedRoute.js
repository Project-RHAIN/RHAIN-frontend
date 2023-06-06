import React from 'react'
import { Navigate } from 'react-router-dom';
import { checkToken } from './handleToken';

const ProtectedRoute = (props) => {
    const token = localStorage.getItem('token');
    let auth = checkToken(token);
    if (!auth) {
        return <Navigate to="/" replace state={{ message: "You must be logged in to access that!" }}/>;
    }

    return props.children;
}

export default ProtectedRoute;