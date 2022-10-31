import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserLogin from './pages/UserLogin/UserLogin'
import AdminLogin from './pages/AdminLogin/AdminLogin'
import ItSupportLogin from './pages/ItSupportLogin/ItSupportLogin'
import Complaints from './pages/Complaints/Complaints'
import Notifications from './pages/Notifications/Notifications'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/User' element={<UserLogin />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Admin' element={<AdminLogin />} />
          <Route path='/ItSupport' element={<ItSupportLogin />} />
          <Route path='/Complaints' element={<Complaints />} />
          <Route path='/Notifications' element={<Notifications />} />
        </Routes>
      </Router>
    </>
  )
}
