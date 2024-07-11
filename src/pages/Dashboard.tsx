import withClickTracking from '../hoc/withClickTracking';
import ButtonGeneric from './components/ButtonGeneric';

import './styles/dashboard.css';
import { useNavigate } from 'react-router-dom';

const TrackendButton = withClickTracking(ButtonGeneric);


const Dashboard:React.FC = () =>{

    const navigate = useNavigate()

    const logout = ():void => {
        localStorage.clear()

        navigate('/')

    }

    return (
        <div className="dashboard">
            <div className='content'>
                <p>Dashboard <span>ADMIN</span></p>
                <img src="src/assets/admin.png" alt="" />
            </div>
            <button onClick={logout}>Logout</button>

            <strong>HOC's Button</strong>
            <div className='hocs'>
                <TrackendButton trackingInfo="Button #1 clicked" label="Click Here"/>
                <TrackendButton trackingInfo="Button #2 clicked" label="Click Now"/>

            </div>

        </div>
    )

}

export default Dashboard;