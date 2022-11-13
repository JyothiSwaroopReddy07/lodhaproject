import React from 'react';
import { useEffect } from 'react';
import './Complaints.css';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'
import Posts from '/src/components/Posts/Posts';
import {useNavigate} from 'react-router-dom';


function Complaints() {

  const navigate = useNavigate();
  let AllComplaints = [
    {
      FlatNo: "501", 
      UserName: "JyothiSwaroopReddy",
      Description: "lorem iwronjksf slkvof vdiobd bfoijkf vkfdnivd bdnfboigijdn fnojioankdojwndon jdnsgonsjn zjxn zvojvsjvksn",
      Title: "Plumber Issue"
    }
  ];
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("isAuthenticated")===false)){
      navigate('/login')
    }
  },[JSON.parse(localStorage.getItem("isAuthenticated"))])

  return (
    <>
    <LoginNavBar/>
      <div className="middle" style = {{marginTop : "100px"}}>
      <p id="title3">COMPLAINTS</p>
      <div style={{ marginLeft: "5px", height: "3px", width: "130px", backgroundColor: "gold" }}></div>
        {
          AllComplaints.map(item => <Posts props={item} />)
        }
      </div>

    </>
  );
}

export default Complaints;