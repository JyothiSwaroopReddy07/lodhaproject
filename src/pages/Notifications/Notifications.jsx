import React, { useState, useEffect } from "react";
import './Notifications.css';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";


function Notifications() {
  const [modalShow, setModalShow] = useState(false);
  const [Notification, setNotification] = useState([]);
  const [titleVar, setTitleVar] = useState('');
  const [DescVar, setDescVar] = useState('');
  const [LinkVar, setLinkVar] = useState('');
  const [HostVar, setHostVar] = useState('');
  const [DateVar, setDateVar] = useState('');
  const [TimeVar, setTimeVar] = useState('');
  const fetchMeetings = async () => {
    const { data } = await axios.get("http://localhost:4000/api/v1/AllMeetings");
    setNotification(data.meetings);
  }
  useEffect(() => {
    fetchMeetings();
    console.log(Notification);
  }, [Notification.length]);
  const handleHide = () => {
    setDescVar('');
    setTitleVar('');
    setLinkVar('');
    setDateVar('');
    setTimeVar('');
    setHostVar('');
    setModalShow(false);
  }
  const handleShow = (Title, Description, Link, Host, Date, Time) => {
    setModalShow(true);
    setTitleVar(Title);
    setDescVar(Description);
    setDateVar(Date);
    setTimeVar(Time);
    setHostVar(Host);
    setLinkVar(Link);
  }
  const getFormattedTime = (DateOfMeeting) => {
  let timeStamp = Date.parse(DateOfMeeting);
  var date = new Date(timeStamp);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = date.getFullYear();
  var month = months[date.getMonth()];
  var dateVal = date.getDate();
  var formattedDate = dateVal + 'th ' + month + ', ' + year;
  return formattedDate;
  }
  
  return (
    <>
      <LoginNavBar />
      <div className="MeetingItems" style={{ marginTop: "50px" }}>


        <p className='MeetingHeader' >UPCOMING MEETINGS</p>

        <hr style={{ height: "1", backgroundColor: "black", width: "94%", marginLeft: "3%" }}></hr>
        {

          Notification.map((item) => {
            return (
              <>
                <div>
                  <Button variant="primary" onClick={() => handleShow(item.Title, item.Description, item.Link, item.Host, item.Date, item.Time)} className="NotifyBar">
                    <div className="ModalNotify">
                      <span className='Date'>
                        <p style={{ textDecorationLine: "underline", textUnderlineOffset: "10px",textDecorationThickness:"2px" }}>MEETING TITLE</p>
                        <p>{item.Title}</p>
                      </span>
                      <span className='Date'>
                        {getFormattedTime(item.Date) + "      | " + item.Time}

                      </span>
                    </div>
                  </Button>

                </div>
                <hr style={{ width: "94%", marginLeft: "3%" }}></hr>
              </>
            );
          })
        }
        <Modal
          show={modalShow}
          onHide={handleHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {titleVar}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Host :  {HostVar}
            </p>
            <p>
              Description : {DescVar}
            </p>
            <p>
              Link : <a href={LinkVar} target="_blank">Link</a>
            </p>
            <p>
              Date : {DateVar}
            </p>
            <p>
              Time : {TimeVar}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}


export default Notifications;