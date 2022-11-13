import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from "react";
import Login from './pages/Login/Login'
import Complaints from './pages/Complaints/Complaints'
import Notifications from './pages/Notifications/Notifications'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Meeting from './pages/Meeting/Meeting'
import GoogleForms from './pages/GoogleForms/GoogleForms'
import Emergency from './pages/Emergency/Emergency'
import NavBar from '/src/components/NavBar/NavBar'
import KeyContactsAndMails from './pages/KeyContactsAndMails/KeyContactsAndMails'
import LoginSignUp from './pages/User/LoginSignUp'
import { useSelector } from "react-redux"
import FacilityManagement from './pages/FacilityManagement/FacilityManagement'
import FinanceAndAccount from './pages/FinanceAndAccount/FinanceAndAccount'
import HelpDesk from './pages/HelpDesk/HelpDesk'
import CulturalSection from './pages/CulturalSection/CulturalSection'
import LegalUpdate from './pages/LegalUpdate/LegalUpdate'
import LoginNavBar from './components/LoginNavBar/LoginNavBar';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard';
import GeneralNotifications from './pages/GeneralNotifications/GeneralNotifications';

export default function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [Authenticated, setAuthenticated] = useState(true);
  
  return (
    <>
      {Authenticated && <LoginNavBar />}
      {!Authenticated && <NavBar />}
      <Router>
        <Routes>
         <Route path='/' element={ !Authenticated ? <Home /> : <Dashboard />} />
          <Route path = '/UserProfile' element = {<Profile />} />
          <Route path='/login'element={<LoginSignUp location={location}/>}/>
          <Route path='/User' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Complaints' element={<Complaints />} />
          <Route path='/Meeting' element={<Meeting />} />
          <Route path='/Emergency' element={<Emergency />} />
          <Route path='/Forms' element={<GoogleForms />} />
          <Route path='/Notifications' element={<Notifications />} />
          <Route path='/KeyContacts' element={<KeyContactsAndMails />} />
          <Route path='/Finance' element={<FinanceAndAccount />} />
          <Route path='/FM' element={<FacilityManagement />} />
          <Route path = '/HelpDesk' element = {<HelpDesk />} />
          <Route path = '/Cultural' element = {<CulturalSection />} />
          <Route path='/LegalUpdate' element = {<LegalUpdate />} />
          <Route path = '/UserDashboard' element={<Dashboard />} />
          <Route path = '/GeneralNotifications' element = {<GeneralNotifications />} />
        </Routes>
      </Router>
    </>
  )
}

