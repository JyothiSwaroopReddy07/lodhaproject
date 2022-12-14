import React from "react";
import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import GoogleForms from "../GoogleForms/GoogleForms";
import "./Dashboard.css"
import Notifications from "../Notifications/Notifications";
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'
import GeneralNotifications from "../GeneralNotifications/GeneralNotifications";
import Complaints from "../Complaints/Complaints";
import Documents from "../Documents/Documents";


function Dashboard() {
    const [IsForms, setIsForms] = useState(true);
    const [IsMeeting, setIsMeeting] = useState(false);
    const [IsNotification, setIsNotification] = useState(false);
    const [IsComplaints, setIsComplaints] = useState(false); 
    const [IsDocuments, setIsDocuments] = useState(false);
    const changeMenu = (e, tab) => {
        if (tab == "Forms") {
            setIsForms(true);
            setIsMeeting(false);
            setIsNotification(false);
            setIsComplaints(false);
            setIsDocuments(false);
        }
        if (tab == "Meetings") {
            setIsMeeting(true);
            setIsForms(false);
            setIsNotification(false);
            setIsComplaints(false);
            setIsDocuments(false);
        }
        if (tab == "Notifications") {
            setIsNotification(true);
            setIsForms(false);
            setIsMeeting(false);
            setIsComplaints(false);
            setIsDocuments(false);
        } 
        if(tab == "Complaints"){
            setIsComplaints(true); 
            setIsForms(false); 
            setIsMeeting(false); 
            setIsNotification(false);
            setIsDocuments(false);
        }
        if(tab == "Documents"){
            setIsComplaints(false); 
            setIsForms(false); 
            setIsMeeting(false); 
            setIsNotification(false);
            setIsDocuments(true);
        }
    };

      
    return (
        <>
        <LoginNavBar/>
            <div>
                <div style={{display:"flex"}}>
                <img src="/src/assests/dashboard.png" style={{height:"35px", width:"35px", marginTop:"105px", marginLeft:"50px", marginBottom:"0px"}}></img>
                <p id="userDashboardTitle">USER DASHBOARD</p>
                </div>
                <div style={{ marginLeft: "55px", height: "3px", width: "275px", backgroundColor: "gold" }}></div>
                <div className="FacilityNavBar" style={{ backgroundColor: "rgb(36, 35, 35)" }}>

                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link className="FacilityLink" eventKey="/Home" onClick={(e) => changeMenu(e, "Forms")}>Forms</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className="FacilityLink" eventKey="/meet" onClick={(e) => changeMenu(e, "Meetings")}>Meeting</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="FacilityLink" eventKey="/notify" onClick={(e) => changeMenu(e, "Notifications")}>Notifications</Nav.Link>
                            
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="FacilityLink" eventKey="/complaints" onClick={(e) => changeMenu(e, "Complaints")}>Complaints</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="FacilityLink" eventKey="/docs" onClick={(e) => changeMenu(e, "Documents")}>Important Documents</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                {IsForms && <GoogleForms />}
                {IsMeeting && <Notifications />}
                {IsNotification && <GeneralNotifications />}
                {IsComplaints && <Complaints />}
                {IsDocuments && <Documents />}
            </div>
        </>
    );
}

export default Dashboard;