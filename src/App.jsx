import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Complaints from './pages/Complaints/Complaints'
import Notifications from './pages/Notifications/Notifications'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Meeting from './pages/Meeting/Meeting'
import GoogleForms from './pages/GoogleForms/GoogleForms'
import Emergency from './pages/Emergency/Emergency'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/User' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Complaints' element={<Complaints />} />
          <Route path = '/Meeting' element = {<Meeting />} />
          <Route path ='/Emergency' element = {<Emergency />} />
          <Route path='/Forms' element = {<GoogleForms />} />
          <Route path='/Notifications' element={<Notifications />} />
        </Routes>
      </Router>
    </>
  )
}
