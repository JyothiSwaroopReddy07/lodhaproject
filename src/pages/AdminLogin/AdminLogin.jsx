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
import './AdminLogin.css';
import NavBar from '/src/components/NavBar';

function AdminLogin() {
  return (
  <>
    <NavBar />
    <MDBContainer className='my-3' >
      <MDBCard className='p-5 login-container'>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='/src/assests/lodha11.webp' alt='logo' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody className="mx-auto">
              <h1 class='heading'>Admin Login</h1>
              <MDBInput wrapperClass='mb-4' placeholder='Email address' className='form1' id='uname' type='email' />
              <MDBInput wrapperClass='mb-4' placeholder='Password' className='form1' id='pass' type='password' />

              <div className="d-flex justify-content-around mx-4 mb-4 form1">
                <MDBCheckbox name='flexCheck' value='' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 form1" id="login" >Login</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  </>
  );
}

export default AdminLogin;