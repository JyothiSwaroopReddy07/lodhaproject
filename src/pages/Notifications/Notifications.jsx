import React from 'react';
import './Notifications.css';
import Modals from '/src/components/Modals/Modals.jsx';

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
      <div className="items" style={{ marginTop: "100px" }}>
        <p className='header' >NOTIFICATIONS</p>
        <hr style={{ height: "1", backgroundColor: "black", width: "94%", marginLeft: "3%" }}></hr>
        {

          Notification.map(item => <Modals props={item} />)
        }
      </div>
    </>
  )
}


export default Notifications;