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
import Emergency from './pages/Emergency/Emergency'import NavBar from '/src/components/NavBar/NavBar'
import KeyContactsAndMails from './pages/KeyContactsAndMails/KeyContactsAndMails'
import LoginSignUp from './pages/User/LoginSignUp'
import { useSelector } from "react-redux"
import NavBar from '/src/components/NavBar/NavBar'

export default function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login'element={<LoginSignUp location={location}/>}/>
          <Route path='/User' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Complaints' element={<Complaints />} />
          <Route path = '/Meeting' element = {<Meeting />} />
          <Route path ='/Emergency' element = {<Emergency />} />
          <Route path='/Forms' element = {<GoogleForms />} />
          <Route path='/Notifications' element={<Notifications />} />
          <Route path='/KeyContacts' element={<KeyContactsAndMails /> } />
        </Routes>
      </Router>
    </>
  )
}

