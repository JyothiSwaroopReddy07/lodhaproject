import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import {
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


const LoginSignUp = ({ history, location }) => {
  const dispatch = useDispatch();


  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginFlatNo, setLoginFlatNo] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;


  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);

    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {

      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, history, isAuthenticated, redirect]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

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
          <div style={{ marginTop: "100px", }}>
            <div className="container">
              <div >
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")} className="LoginRegisterTitle">LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")} className="LoginRegisterTitle">REGISTER</p>
                </div>
                <button className="switchButton" ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <MDBContainer className='my-3'>
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
                            <MDBInput wrapperClass='mb-4' placeholder='Email address' className='form1' id='uname' type='email' />
                          </div>
                          <MDBInput wrapperClass='mb-4' placeholder='Password' className='form1' id='pass' type='password' />

                          <div className="d-flex justify-content-around mx-4 mb-4 form1">
                            <MDBCheckbox name='flexCheck' value='' label='Remember me' />
                            <Link to="/password/forgot">Forget Password ?</Link>
                          </div>

                          <MDBBtn className="mb-4 form1" id="loginButton">Login</MDBBtn>

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
                <MDBContainer className='my-3' style={{marginTop:"100px !important"}}>
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
                          <MDBInput wrapperClass='mb-4' placeholder='Name' className='form1' id='name' type='text' />
                          <div>
                            <MDBInput wrapperClass='mb-4' placeholder='Email address' className='form1' id='RegUname' type='email' />
                          </div>



                          <MDBInput wrapperClass='mb-4' placeholder='Password' className='form1' id='RegPass' type='password' />
                          <MDBInput wrapperClass='mb-4' placeholder='Mobile Number' className='form1' id='mob' type='text' />
                          <MDBInput wrapperClass='mb-4' placeholder='Block' className='form1' id='block' type='text' />
                          <MDBInput wrapperClass='mb-4' placeholder='Flat Number' className='form1' id='flat' type='number' />
                          <MDBInput wrapperClass='mb-4' placeholder='Parking Slot' className='form1' id='parking' type='text' />
                          <div className="d-flex justify-content-around mx-4 mb-4 form1">
                            <MDBCheckbox name='flexCheck' value='' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                          </div>

                          <MDBBtn className="mb-4 form1" id="RegisterButton">Register</MDBBtn>

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