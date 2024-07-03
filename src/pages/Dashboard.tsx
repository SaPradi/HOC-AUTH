import './styles/home.css'
import { useNavigate } from 'react-router-dom'
const Dashboard = () =>{


    const navigate = useNavigate()

    const logout = ():void => {
        localStorage.clear()

        navigate('/')

    }

    return (
        <div className="home">
            <div className='content'>
                <p>Dashboard <span>ADMIN</span></p>
                <img src="src/assets/admin.png" alt="" />
            </div>
            <button onClick={logout}>Logout</button>
           
        </div>
    )

}

export default Dashboard;