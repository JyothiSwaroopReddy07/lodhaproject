import React from "react";
import './GeneralNotifications.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import axios from "axios";


function GeneralNotifications() {
    const [modalShow, setModalShow] = useState(false);
    const [generalNotifications, setGeneralNotifications] = useState([]);
    const [titleVar, setTitleVar] = useState('');
    const [DescVar, setDescVar] = useState('');
    const fetchNotifications = async () => {
        const { data } = await axios.get("http://localhost:4000/api/v1/AllNotifications");
        setGeneralNotifications(data.notifications);
    }
    useEffect(() => {
        fetchNotifications();
        console.log(generalNotifications);
    }, [generalNotifications.length]);
    const handleHide = () => {
    setDescVar('');
    setTitleVar('');
        setModalShow(false);
    }
    const handleShow = (Title, Description) => {
        setModalShow(true);
        setTitleVar(Title); 
        setDescVar(Description);
    }
    return (
        <>
            <div className="NotifyItems" style={{ marginTop: "50px" }}>
                <p className='NotifyHeader' >GENERAL NOTIFICATIONS</p>
                <hr style={{ height: "1", backgroundColor: "black", width: "94%", marginLeft: "3%" }}></hr>
                {

                    generalNotifications.map((item, index) => {
                        return (
                            <div key={index}>
                                <Button variant="primary" onClick={() => handleShow(item.Title, item.Description)} className="modalButton">
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <span className="NotifyHeading">
                                            <div>
                                                <p style={{ textDecorationLine: "underline",textUnderlineOffset:"10px" }}>TITLE</p>
                                                <p>{item.Title}</p>
                                            </div>
                                        </span>
                                        <span className="NotifyView">
                                            <button className="Viewbutton" style={{ padding: "3px", borderRadius: "5px", marginTop:"20px" }}>More &rarr;</button>
                                        </span>
                                    </div>
                                </Button>
                                <hr style={{ width: "94%", marginLeft: "3%" }}></hr>

                            </div>
                        )
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
                            Description : {DescVar}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default GeneralNotifications;