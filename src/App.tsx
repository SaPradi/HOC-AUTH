
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import withAuthProtection from './hoc/withAuthProtection';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import withPageTracking from './hoc/withPageTracking';


const ProtectedDashboard = withAuthProtection(Dashboard);
const TrackedPage = withPageTracking(Home)

const App:React.FC = () =>{

  return (

      <Routes>
        <Route path='/' element={<TrackedPage pageName='home'/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<ProtectedDashboard/>}/>
    </Routes>

  )
}

export default App
