import { FC } from "react";
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    element: React.ComponentType<any>;
    [key: string]: any; 
}

const Guard: FC<ProtectedRouteProps> = ({ element: Component, ...rest }) => {
    const isAuthenticated = !!localStorage.getItem('token')
    // const isAuthenticated = false;

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default Guard;