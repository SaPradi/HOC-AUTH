import './styles/login.css';
import withLoaderAuth from '../hoc/withLoaderAuth';
import Button from './components/Button';

const ButtonWithLoaderAuth = withLoaderAuth(Button);

const Login:React.FC = () =>{


    return (
        <div className="login">


            <div className="content">
                <h1>LOGIN</h1>
                <div className="form">
                    <input type="text" value='Pepito122' name="username" id="username" placeholder='username' required/>
                    <input type="password" value="password" name="password" id="password" placeholder='password' required/>
                    <ButtonWithLoaderAuth label="Save" />
                </div>
                <small> <a href="/">Forgot your password? </a></small>
            </div>


        </div>
    )

}

export default Login;