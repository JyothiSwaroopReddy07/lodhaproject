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
  import validator from 'validator'




const LoginSignUp = () => {

  const navigate = useNavigate();

  const { isAuthenticated,setUser, setIsAuthenticated, loading,setLoading } = useGlobalContext();
  const [Curr, setCurr] = useState(false);
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const UserPass= useRef(null);
  const [isStrong, setIsStrong] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isMobileEmpty, setIsMobileEmpty] = useState(true);
  const [isValidMobile, setIsValidMobile] = useState(false);

  const login = async(loginFlatNo, loginPassword) => {
    setLoading(true);
    const {data} = await axios.post("http://localhost:4000/api/v1/login",{
      FlatNo: loginFlatNo, Password: loginPassword });
    const user = data.user;
    console.log("user", user);
    setLoading(false);
    if(user!==[] && !user){
      navigate('/login');
    }
    else{
      const user1 ={
        OwnerName: user[0].OwnerName,
        RegisteredName: user[0].RegisteredName,
        FlatNo: user[0].FlatNo,
        Block: user[0].Block,
        ParkingSlot: user[0].ParkingSlot,
        Mobile: user[0].Mobile,
        Dues: user[0].Dues,
        Email: user[0].Email,
        Role: user[0].Role
      }
      setUser(JSON.stringify(user1));
      setIsAuthenticated(true);
      localStorage.setItem("User",JSON.stringify(user1));
      localStorage.setItem("isAuthenticated",true);
      navigate('/UserDashboard');
    }
  }

  const register = async(OwnerName,RegisteredName,FlatNo,Password,Email,Mobile,ParkingSlot, Block) => {
    setLoading(true);
    const {data} = await axios.post("http://localhost:4000/api/v1/register",{
      OwnerName: OwnerName,
      RegisteredName: RegisteredName,
      Email: Email,
      Mobile: Mobile,
      ParkingSlot: ParkingSlot,
      FlatNo: FlatNo, 
      Password: Password,
      Block: Block
    });
    const user = data.user;
    console.log(user);
    setLoading(false);
    if(user!==[] && !user){
      navigate('/login');
    }
    else{
      const user1 ={
        OwnerName: user[0].OwnerName,
        RegisteredName: user[0].RegisteredName,
        FlatNo: user[0].FlatNo,
        Block: user[0].Block,
        ParkingSlot: user[0].ParkingSlot,
        Mobile: user[0].Mobile,
        Dues: user[0].Dues,
        Email: user[0].Email,
        Role: user[0].Role
      }
      setUser(JSON.stringify(user1));
      setIsAuthenticated(true);
      localStorage.setItem("User",JSON.stringify(user1));
      localStorage.setItem("isAuthenticated",true);
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
    const Block = e.target.Block.value;
    e.preventDefault();
    register(OwnerName,RegisteredName,FlatNo,Password,Email,Mobile,ParkingSlot,Block);
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

  const ShowPassword = (e)=>{
      setCurr(!Curr); 
    
  };
  
  const validate = ( value, len) => {
    if(len > 0){
      setIsEmpty(false);
    } 
    else{
      setIsEmpty(true);
    }
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
       setIsStrong(true);
    } else {
      setIsStrong(false);
    }
  }
  
  const MobileValidate = (value, len) => {
    if(len > 0){
      setIsMobileEmpty(false);
    } 
    else{
      setIsMobileEmpty(true);
    }
    if(validator.isMobilePhone(value, "en-IN")){
      setIsValidMobile(true);
    } 
    else{
      setIsValidMobile(false);
    }
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <NavBar/>
          <div style={{ marginTop: "100px" }}>
            <div className="container">
              <div style={{marginBottom:"60px"}} className="container">
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")} className="LoginRegisterTitle">LOGIN</p>
                  <div style={{width:"2px", height:"inherit", backgroundColor:"gold"}}></div>
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
                          <p className="Label">EMAIL ADDRESS</p>
                            <MDBInput wrapperClass='mb-4' placeholder='Flat Number' className='form1' id='uname' name="FlatNo" type='text' />
                          </div>
                          <div style={{display:"flex", justifyContent:"space-between"}}>
                          <p className="Label">PASSWORD</p>
                          <img src="/src/assests/password.png" onClick={(e) => ShowPassword(e)} style={{height:"20px", width:"20px",marginRight:"10%", marginTop:"10px"}}></img>
                          </div>
                          <MDBInput wrapperClass='mb-4' placeholder='Password' className='form1' id='pass' name="Password" type={Curr ? 'text':'password'} />

                          <div className="d-flex justify-content-around mx-4 mb-4 form1">
                            <Link to="/password/forgot">Forgot Password ?</Link>
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

                     

                      <MDBCol md='12'>

                        <MDBCardBody className="mx-auto">
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5%" }}>
                            <img src="/src/assests/user.svg" style={{ width: "70px", height: "70px" }}></img>
                            <h1 className='RegisterHeading'>Register</h1>
                          </div>
                          <p className="Label">OWNER NAME </p>
                          <MDBInput wrapperClass='mb-4' placeholder='Owner Name' className='form1' name="OwnerName" id='name' type='text' />
                          <p className="Label">PROPERTY REGISTERED NAME</p>
                          <MDBInput wrapperClass='mb-4' placeholder='Property Registered Name' className='form1' name="RegisteredName" id='name' type='text' />
                          <div>
                          <p className="Label">EMAIL ADRESS</p>
                            <MDBInput wrapperClass='mb-4' placeholder='Email address' className='form1' id='RegUname' name="Email" type='email' />
                          </div>

                          <div style={{display:"flex", justifyContent:"space-between"}}>
                          <p className="Label">PASSWORD</p>
                          <img src="/src/assests/password.png" onClick={(e) => ShowPassword(e)} style={{height:"20px", width:"20px",marginRight:"10%", marginTop:"10px"}}></img>
                          </div>
                          <MDBInput wrapperClass='mb-4' placeholder='Password' name="Password" className='form1' id='RegPass' type={Curr ? 'text': 'password'} ref={UserPass} onChange={(e) => validate(e.target.value, e.target.value.length)}/>
                          {
                            (isEmpty)? <></> : (isStrong ) ? <p style={{color:"green", letterSpacing:"1.5px", }}>Strong Password</p> : <p style={{color:"red", letterSpacing:"1.5px"}}>Weak Password</p>
                          }
                          <p className="Label">MOBILE NUMBER</p>
                          <MDBInput wrapperClass='mb-4' placeholder='Mobile Number' name="Mobile" className='form1' id='mob' type='text' onChange={(e) => MobileValidate(e.target.value, e.target.value.length)}/>
                          {
                            (isMobileEmpty) ? <></> : (isValidMobile) ? <p style={{color:"green", letterSpacing:"1.5px", }}>Valid Mobile Number</p> : <p style={{color:"red", letterSpacing:"1.5px"}}>Invalid Mobile Number</p> 
                          }
                          <p className="Label">BLOCK</p>
                          <MDBInput wrapperClass='mb-4' placeholder='Block' name="Block" className='form1' id='block' type='text' />
                          <p className="Label">FLAT NUMBER</p>
                         <MDBInput wrapperClass='mb-4' placeholder='Flat Number' name="FlatNo" className='form1' id='flat' type='number' />
                          <p className="Label">PARKING SLOT</p>
                          <MDBInput wrapperClass='mb-4' placeholder='Parking Slot' name="ParkingSlot" className='form1' id='parking' type='text' />
                          <p className="Label">NOTE</p>
                          <ul style={{width:"80%",textAlign:"left", marginLeft:"10%", fontSize:"14px",backgroundColor:"white", border:"1px solid black", borderRadius:"10px"}}>
                            Password must contain alteast 8 characters including 
                            <li>atleast One digit</li> 
                            <li>atleast One Special Character</li>
                            <li>atleast One Lowercase letter</li>
                          </ul>
                          <div className="d-flex justify-content-around mx-4 mb-4 form1">
                            
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