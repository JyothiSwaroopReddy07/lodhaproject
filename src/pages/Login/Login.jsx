import React from 'react';
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
import './Login.css';

function Login() {
  return (
    <>
    <MDBContainer className='my-3'>
      <MDBCard className='p-5 login-container LoginContainer'>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='/src/assests/lodha11.webp' alt='logo' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody className="mx-auto">
              <div style={{display:"flex", justifyContent: "center", alignItems: "center", marginBottom: "5%"}}>
              <img src="/src/assests/user.svg" style={{width:"70px", height : "70px"}}></img>
              <h1 className='LoginHeading'>User Login</h1>
                </div>
              <div>
              <MDBInput wrapperClass='mb-4' placeholder='Email address' className='form1' id='uname' type='email' />
                </div>
              <MDBInput wrapperClass='mb-4' placeholder='Password' className='form1' id='pass' type='password' />

              <div className="d-flex justify-content-around mx-4 mb-4 form1">
                <MDBCheckbox name='flexCheck' value='' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>
              
              <MDBBtn className="mb-4 form1" id = "loginButton">Login</MDBBtn>
                 
            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
    </>
  );
}

export default Login;