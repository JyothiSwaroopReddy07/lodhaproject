import React, { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './KeyContactsAndMails.css';
import {useGlobalContext} from "/src/context/StateContext";

function KeyContactsAndMails() {

  const navigated = useNavigate();
  const {isAuthenticated, user} = useGlobalContext();

  useEffect(()=>{
    if(isAuthenticated===false){
      navigated("/login");
    }
  },[isAuthenticated]);


  const UserData = [
    ["501", "Jyothi Swaroop Reddy", "bjsreddy742002@gmail.com", "9849863395", "431/A", "Swaroop"],
    ["502", "dsgnjsng", "bjsreddy@gmail.com", "2496856069", "433/A", "Swar"],
    ["503", "eortrotyhmkgj", "bjsredd2002@gmail.com", "2483940403", "432/A", "op"],
    ["504", "mnmvncvcbn", "bjsreddy742@gmail.com", "1309324892", "430/A", "Swap"],
  ];
  const userColumns = ["Flat No", "Owners Name", "Email", "Phone", "Parking Slot", "Property Registered Name"];

  const [value, setValue] = useState('');
  const [dataSource, setDataSource] = useState(UserData);
  const [tableFilter, setTableFilter] = useState([]);

  const filterData = (e) => {
    if (e.target.value !== '') {

      setValue(e.target.value);
      const filterTable = dataSource.filter((ele) => {
        if (ele[0].length >= value.length && ele[0].indexOf(value) >= 0) {
          return true;
        }
        return false;
      })
      console.log(filterData);
      setTableFilter([...filterTable]);
    }
    else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  }

  return (
    <>
      <div style={{ marginTop: "60px" }}>

        <div className="container mt-5" style={{ padding: "0px", width: "100%" }}>

          <br /><br />
         
          <p id="title">KEY CONTACTS AND MAILS</p>
          <div style={{ marginLeft: "5px", height: "3px", width: "300px", backgroundColor: "gold" }}></div>
          <div className="input-group mt-5 mb-3" style={{ border: "1px solid black", width: "90%", borderRadius: "6px", }}>
            <i className="fa fa-search" style={{ color: "gold", height: "30px", width: "30px", padding: "6px", paddingLeft: "10px" }}></i>
            <input style={{ height: "30px", border: "none", padding: "5px" }} type="text" className="form-control" placeholder="search flat number" aria-describedby="basic-addon1" aria-label="Username" value={value} onChange={filterData} ></input>
          </div>
          <Table responsive style={{ margin: "5px 0px 20px 10px", width: "90%", backgroundColor: "snow", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "10px" }}>
            <thead>
              <tr>
                <th>#</th>
                {userColumns.map((ele, index) => (
                  <th key={index}>{ele}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                value.length > 0 ? tableFilter.map((ele, i) => {
                  return (<tr>
                    <td>{i + 1}</td>
                    {ele.map((ele1, index) => (
                      <td key={index}>{ele1}</td>
                    ))}
                    <td><button className="btn btn-primary key-contact-btn" >Edit</button></td>
                    <td><button className="btn btn-danger key-contact-btn">Delete</button></td>
                  </tr>)
                }) : dataSource.map((ele, i) => {
                  return (<tr>
                    <td>{i + 1}</td>
                    {ele.map((ele1, index) => (
                      <td key={index}>{ele1}</td>
                    ))}
                    <td><button className="btn btn-primary key-contact-btn">Edit</button></td>
                    <td><button className="btn btn-danger key-contact-btn">Delete</button></td>
                  </tr>)
                })
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>

  );
}

export default KeyContactsAndMails;
