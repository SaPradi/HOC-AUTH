import { useNavigate } from 'react-router-dom';
import './styles/login.css';
import { useState } from 'react';

const Login = () =>{

    const [loading,setLoading] = useState(false);

    const navigate = useNavigate()
    

    const login = ()=>{
        setLoading(true)

        setTimeout(()=>{
            localStorage.setItem('token','AUTH_TOKEN_USER')
            setLoading(false)
            navigate('/dashboard')
        },1000)

    }

    return (
        <div className="login">


            <div className="content">
                <h1>LOGIN</h1>
                <div className="form">
                    <input type="text" name="" id="" placeholder='username' required/>
                    <input type="password" name="" id="" placeholder='password' required/>
                    <button onClick={login}  disabled={loading} >
                    {loading ? 'Cargando...' : 'SAVE'}
                    </button>
                </div>
                <small> <a href="/">Forgot your password? </a></small>
            </div>


        </div>
    )

}

export default Login;