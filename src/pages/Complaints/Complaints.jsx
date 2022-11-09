import React from 'react';
import './Complaints.css';

import Posts from '/src/components/Posts/Posts';


function Complaints() {

  let AllComplaints = [
    {
      FlatNo: "501", 
      UserName: "JyothiSwaroopReddy",
      Description: "lorem iwronjksf slkvof vdiobd bfoijkf vkfdnivd bdnfboigijdn fnojioankdojwndon jdnsgonsjn zjxn zvojvsjvksn",
      Title: "Plumber Issue"
    }
  ];


  return (
    <>
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