import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import {useGlobalContext} from '/src/context/StateContext'

import {useNavigate} from 'react-router-dom';
import{
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import axios from "axios";
import NavBar from "/src/components/NavBar/NavBar";


const LoginSignUp = () => {

  const navigate = useNavigate();

  const { isAuthenticated,setUser, setIsAuthenticated, loading,setLoading } = useGlobalContext();

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const login = async(loginFlatNo, loginPassword) => {
    setLoading(true);
    const {data} = await axios.post("http://localhost:4000/api/v1/login",{
      FlatNo: loginFlatNo, Password: loginPassword });
    const user = data.user1;
    setLoading(false);
    if(user!==[] && !user){
      navigate('/login');
    }
    else{
      setUser(user);
      setIsAuthenticated(true);
      localStorage.setItem("User",user);
      localStorage.setItem("isAuthenticated",true);
      navigate('/UserDashboard');
    }
  }

  const register = async(OwnerName,RegisteredName,FlatNo,Password,Email,Mobile,ParkingSlot) => {
    setLoading(true);
    const {data} = await axios.post("http://localhost:4000/api/v1/register",{
      OwnerName: OwnerName,
      RegisteredName: RegisteredName,
      Email: Email,
      Mobile: Mobile,
      ParkingSlot: ParkingSlot,
      FlatNo: FlatNo, 
      Password: Password 
    });
    const user = data.user1;
    setLoading(false);
    if(user!==[] && !user){
      navigate('/register');
    }
    else{
      setUser(user);
      setIsAuthenticated(true);
      localStorage.setItem("User",user);
      localStorage.setItem("isAuthenticated",isAuthenticated);
      navigate('/UserDashboard');
    }
  }

  const loginSubmit = (e) => {
    const loginFlatNo = e.target.FlatNo.value;
    const loginPassword = e.target.Password.value;
    e.preventDefault();
    login(loginFlatNo,loginPassword);
  };

  const registerSubmit = (e) => {
    const OwnerName = e.target.OwnerName.value;
    const RegisteredName = e.target.RegisteredName.value;
    const FlatNo = e.target.FlatNo.value;
    const Password = e.target.Password.value;
    const Email = e.target.Email.value;
    const Mobile = e.target.Mobile.value;
    const ParkingSlot = e.target.ParkingSlot.value;
    e.preventDefault();
    register(OwnerName,RegisteredName,FlatNo,Password,Email,Mobile,ParkingSlot);
  };


  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");
      registerTab.current.classList.add("visible");
      loginTab.current.classList.remove("visible");
      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");
      registerTab.current.classList.remove("visible");
      loginTab.current.classList.add("visible");
      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <NavBar/>
          <div style={{ marginTop: "100px" }}>
            <div className="container">
              <div style={{marginBottom:"60px"}}>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")} className="LoginRegisterTitle">LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")} className="LoginRegisterTitle">REGISTER</p>
                </div>
                <button className="switchButton" ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <MDBContainer>
                  <MDBCard className='p-5 login-container LoginContainer'>

                    <MDBRow className='g-0 d-flex align-items-center'>

                      <MDBCol md='4'>
                        <MDBCardImage src='/src/assests/lodha11.webp' alt='logo' className='rounded-t-5 rounded-tr-lg-0' fluid />
                      </MDBCol>

                      <MDBCol md='8'>

                        <MDBCardBody className="mx-auto">
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5%" }}>
                            <img src="/src/assests/user.svg" style={{ width: "70px", height: "70px" }}></img>
                            <h1 className='LoginHeading'>User Login</h1>
                          </div>
                          <div>
                            <MDBInput wrapperClass='mb-4' placeholder='Flat Number' className='form1' id='uname' name="FlatNo" type='text' />
                          </div>
                          <MDBInput wrapperClass='mb-4' placeholder='Password' className='form1' id='pass' name="Password" type='password' />

                          <div className="d-flex justify-content-around mx-4 mb-4 form1">
                            <MDBCheckbox name='flexCheck' value='' label='Remember me' />
                            <Link to="/password/forgot">Forget Password ?</Link>
                          </div>

                          <MDBBtn className="mb-4 form1" id="loginButton" type="submit">Login</MDBBtn>

                        </MDBCardBody>

                      </MDBCol>

                    </MDBRow>

                  </MDBCard>
                </MDBContainer>
              </form>
              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
              <div>
                <MDBContainer>
                  <MDBCard className='p-5 login-container registerContainer' >

                    <MDBRow className='g-0 d-flex align-items-center'>

                      <MDBCol md='4'>
                        <MDBCardImage src='/src/assests/lodha11.webp' alt='logo' className='rounded-t-5 rounded-tr-lg-0' fluid />
                      </MDBCol>

                      <MDBCol md='8'>

                        <MDBCardBody className="mx-auto">
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5%" }}>
                            <img src="/src/assests/user.svg" style={{ width: "70px", height: "70px" }}></img>
                            <h1 className='RegisterHeading'>Register</h1>
                          </div>
                          <MDBInput wrapperClass='mb-4' placeholder='Owner Name' className='form1' name="OwnerName" id='name' type='text' />
                          <MDBInput wrapperClass='mb-4' placeholder='Property Registered Name' className='form1' name="RegisteredName" id='name' type='text' />
                          <div>
                            <MDBInput wrapperClass='mb-4' placeholder='Email address' className='form1' id='RegUname' name="Email" type='email' />
                          </div>



                          <MDBInput wrapperClass='mb-4' placeholder='Password' name="Password" className='form1' id='RegPass' type='password' />
                          <MDBInput wrapperClass='mb-4' placeholder='Mobile Number' name="Mobile" className='form1' id='mob' type='text' />
                          <MDBInput wrapperClass='mb-4' placeholder='Block' name="Block" className='form1' id='block' type='text' />
                          <MDBInput wrapperClass='mb-4' placeholder='Flat Number' name="FlatNo" className='form1' id='flat' type='number' />
                          <MDBInput wrapperClass='mb-4' placeholder='Parking Slot' name="ParkingSlot" className='form1' id='parking' type='text' />
                          <div className="d-flex justify-content-around mx-4 mb-4 form1">
                            <MDBCheckbox name='flexCheck' value='' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                          </div>

                          <MDBBtn className="mb-4 form1" id="RegisterButton" type="submit">Register</MDBBtn>

                        </MDBCardBody>

                      </MDBCol>

                    </MDBRow>

                  </MDBCard>
                </MDBContainer>
                </div>
              </form>

            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignUp;