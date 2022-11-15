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
    if(User.Role==='admin')
    {
      const { data } = await axios.get("http://localhost:4000/api/v1/AllComplaints");
      return data.complaints;
    }
    const {data} = await axios.post("http://localhost:4000/api/v1/complaint",{FlatNo: User.FlatNo});
    return data.complaints;
  }
  useEffect(()=>{
    const data = fetchComplaints();
    console.log("con", data);
    setComplaints(data)
    console.log(complaints);
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