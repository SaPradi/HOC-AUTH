import React, { ComponentType, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface WithLoaderProps {
  loading: boolean;
  login: () => void;
}

const withLoaderAuth = <P extends object>(WrappedComponent: ComponentType<P & WithLoaderProps>) => {
  const WithLoaderAuth: React.FC<P> = (props) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = () => {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem('token', 'AUTH_TOKEN_USER');
        setLoading(false);
        navigate('/dashboard');
      }, 1000);
    };

    return <WrappedComponent {...props as P} loading={loading} login={login} />;
  };

  return WithLoaderAuth;
};

export default withLoaderAuth;
