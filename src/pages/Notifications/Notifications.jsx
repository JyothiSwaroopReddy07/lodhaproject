import React from 'react';
import './Notifications.css';
import Modals from '/src/components/Modals/Modals.jsx';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'

function Notifications() {
  let Notification = [
    {
      Heading: "welcome message",
      Description: "Hello this is sai Krishna",
      Link: "https://www.google.com",
      DateOfPosting: "26 Oct 2022"
    },
    {
      Heading: "Welcome Message",
      Description: "Hello this is sai Krishna",
      Link: "https://www.google.com",
      DateOfPosting: "26 Oct 2022"
    },
    {
      Heading: "welcome message",
      Description: "Hello this is sai Krishna",
      Link: "https://www.google.com",
      DateOfPosting: "26 Oct 2022"
    }
  ];
  return (
    <>
    <LoginNavBar/>
      <div className="MeetingItems" style={{ marginTop: "50px" }}>
      
          
        <p className='MeetingHeader' >UPCOMING MEETINGS</p>
        
        <hr style={{ height: "1", backgroundColor: "black", width: "94%", marginLeft: "3%" }}></hr>
        {

          Notification.map(item => <Modals props={item} />)
        }
      </div>
    </>
  )
}


export default Notifications;