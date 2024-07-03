
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Guard from './hoc/Guard';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App =() =>{

  return (

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Guard element={Dashboard}/>}/>
    </Routes>

  )
}

export default App
