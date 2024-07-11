import { ComponentType } from "react";
import { Navigate } from 'react-router-dom';

const withAuthProtection = <P extends object>(WrappedComponent: ComponentType<P>):ComponentType<P> => {

    return (props:P) => {
        const isAuthenticated = !!localStorage.getItem('token');
        return isAuthenticated ? <WrappedComponent {...props} /> : <Navigate to="/login" />;
    };

};

export default withAuthProtection;