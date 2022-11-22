import React, { Fragment, useState, useEffect } from "react";
import "./ForgotPassword.css";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import {useGlobalContext} from "/src/context/StateContext";
import NavBar from "/src/components/NavBar/NavBar";

const ForgotPassword = () => {

  const {loading, setLoading} = useGlobalContext();

  const forgot = async(email,flatnum)=>{
    const {data}= await axios.get("http://localhost:4000/api/v1/forgotpassword");
    if(data.success === true){

    }
    else{
        
    }
  }
  const forgotPasswordSubmit = (e) => {
    const email = e.target.Email.value;
    const flatnum = e.target.FlatNo.value;
    forgot(email,flatnum);
  };

  

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <NavBar/>
          <MetaData title="Forgot Password" />
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Forgot Password</h2>

              <form className="forgotPasswordForm" onSubmit={forgotPasswordSubmit} >
                <div className="forgotPasswordEmail">
                  <label>EMAIL</label>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="Email"
                  />
                  <div>
                  <label>FLAT NO</label>
                  <input
                    type="text"
                    placeholder="Flat Number"
                    required
                    name="FlatNo"
                  />
                  </div>
                </div>
                <button type="submit">Update Password</button>
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ForgotPassword;