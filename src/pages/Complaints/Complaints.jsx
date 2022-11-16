import React from 'react';
import { useEffect, useState } from 'react';
import './Complaints.css';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'
import Posts from '/src/components/Posts/Posts';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useGlobalContext} from "/src/context/StateContext"


function Complaints() {

  const { User } = useGlobalContext();
  const [complaints, setComplaints] = useState([]);
  const fetchComplaints = async()=>{

    const user = JSON.parse(User);
      const {data} = await axios.get("http://localhost:4000/api/v1/complaint",{params : {FlatNo: user.FlatNo}});
      setComplaints(data.complaints);
  }
  useEffect(()=>{
    fetchComplaints();
  },[]);

  return (
    <>
    <LoginNavBar/>
      <div className="middle" style = {{marginTop : "100px"}}>
      <p id="title3">COMPLAINTS</p>
      <div style={{ marginLeft: "5px", height: "3px", width: "130px", backgroundColor: "gold" }}></div>
        {
          
          complaints.map(item => <Posts props={item} />)
        }
      </div>

    </>
  );
}

export default Complaints;