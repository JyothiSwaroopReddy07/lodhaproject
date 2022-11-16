import React, { useState, useEffect } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import { complaintColumns } from "./columns";
import { useTableSearch } from "./useTableSearch";
import './AllComplaints.css';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'
import 'antd/dist/antd.css';
import { Accordion } from "react-bootstrap";
const { Search } = Input;
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const fetchUsers = async () => {
  const { data } = await axios.get(
    "http://localhost:4000/api/v1/AllComplaints"
  );
  const users = data.complaints;
  return users;
};

export default function AllComplaints() {
  const [searchVal, setSearchVal] = useState(null);
  const [Issues, setIssues] = useState([]);
  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers
  });

  
  const delete_Issue = async(ele)=>{
    const issue = await axios.post("http://localhost:4000/api/v1/delete_issue",{
      issue: ele.Name
    })
    setIssues([]);
  }
  
  const issue = async(issue)=>{
    const { data } = await axios.post("http://localhost:4000/api/v1/new_issue",{
      issue: issue
    })
    console.log(data.success)
    setIssues([]);
  }
  const issueSubmit = (e)=>{
    e.preventDefault();
    issue(e.target.issue.value);
  }
  const fetchIssues = async()=>{
    const { data }  = await axios.get("http://localhost:4000/api/v1/issue_types");  
    setIssues(data.issues);
  }
  useEffect(()=>{
    fetchIssues();
  },[Issues.length])

  return (
    <>
    <LoginNavBar />
    <div className="KeyContactDiv">
      <p id="title10"> ALL COMPLAINTS</p>
      <div style={{ marginLeft: "5px", height: "3px", width: "200px", backgroundColor: "gold" }}></div>
      <Accordion >
      <Accordion.Item id="IssueAccord" style={{ marginTop: "50px", width: "90%", border:"2px solid #d3d3d3", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <Accordion.Header>
      <p className="IssueTitle">Add New Issue Type</p>
      </Accordion.Header>
      <Accordion.Body>
      <div>
        <form onSubmit={issueSubmit} className="ComplaintForm">
          <div style={{display:"flex"}}>
          <input placeholder="Issue Type" type="text" name="issue" className="IssueInput"/>
          <button type="submit" className="IssueButton">Add</button>
          </div>
        </form>
      </div>
      <div className="ToastDiv">
        
        {
          
          Issues.map(({Name})=>{
           return(
           <Toast onClose={(e)=>{e.preventDefault();delete_Issue({Name})}} animation={false} className="ToastIssue">
              <Toast.Header>
                {Name}
              </Toast.Header>
            </Toast>);
          })
          
        }
      </div>
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Search
        onChange={e => setSearchVal(e.target.value)}
        placeholder="Enter Flat No"
        enterButton
        size="large"
        style={{width: "90%", marginTop:"50px", border:"1px solid black", borderRadius:"5px"}}
      />
      
      <Table
        rowKey="name"
        dataSource={filteredData}
        columns={complaintColumns}
        loading={loading}
        pagination={true}
        style={{marginTop:"20px", width: "90%", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",backgroundColor:"black !important"}}
      />
      </div>
      <div style={{height:"100px", color: "white"}}>

      </div>
    </>
  );
}
