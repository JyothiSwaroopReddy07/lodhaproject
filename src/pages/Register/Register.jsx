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
import './Register.css';

function Register() {
  return (
    <>
      <MDBContainer className='my-3'>
        <MDBCard className='p-5 login-container'>

          <MDBRow className='g-0 d-flex align-items-center'>

            <MDBCol md='4'>
              <MDBCardImage src='/src/assests/lodha11.webp' alt='logo' className='rounded-t-5 rounded-tr-lg-0' fluid />
            </MDBCol>

            <MDBCol md='8'>

              <MDBCardBody className="mx-auto">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "5%" }}>
                  <img src="/src/assests/user.svg" style={{ width: "70px", height: "70px" }}></img>
                  <h1 className='heading'>Register</h1>
                </div>
                <MDBInput wrapperClass='mb-4' placeholder='Name' className='form1' id='name' type='text' />
                <div>
                  <MDBInput wrapperClass='mb-4' placeholder='Email address' className='form1' id='uname' type='email' />
                </div>



                <MDBInput wrapperClass='mb-4' placeholder='Password' className='form1' id='pass' type='password' />
                <MDBInput wrapperClass='mb-4' placeholder='Mobile Number' className='form1' id='mob' type='text' />
                <MDBInput wrapperClass='mb-4' placeholder='Block' className='form1' id='block' type='text' />
                <MDBInput wrapperClass='mb-4' placeholder='Flat Number' className='form1' id='flat' type='number' />
                <MDBInput wrapperClass='mb-4' placeholder='Parking Slot' className='form1' id='parking' type='text' />
                <div className="d-flex justify-content-around mx-4 mb-4 form1">
                  <MDBCheckbox name='flexCheck' value='' label='Remember me' />
                  <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 form1" id="login">Register</MDBBtn>

              </MDBCardBody>

            </MDBCol>

          </MDBRow>

        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default Register;