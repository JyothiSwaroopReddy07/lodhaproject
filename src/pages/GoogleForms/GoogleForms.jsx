import React, { useState, useEffect } from "react";
import './GoogleForms.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'
import axios from "axios";


function GoogleForms() {
    const [modalShow, setModalShow] = useState(false);
    const [googleForms, setGoogleForms] = useState([]);
    const [titleVar, setTitleVar] = useState('');
    const [DescVar, setDescVar] = useState('');
    const [LinkVar, setLinkVar] = useState('');
    const fetchForms = async () => {
        const { data } = await axios.get("http://localhost:4000/api/v1/AllForms");
        setGoogleForms(data.forms);
    }
    useEffect(() => {
        fetchForms();
        console.log(googleForms);
    }, [googleForms.length]);
    const handleHide = () => {
        setDescVar('');
        setTitleVar('');
        setLinkVar('');
        setModalShow(false);
    }
    const handleShow = (Title, Description, Link) => {
        setModalShow(true);
        setTitleVar(Title);
        setDescVar(Description);
        setLinkVar(Link);
    }
    return (
        <>
            <LoginNavBar />
            <div className="FormItems" style={{ marginTop: "50px" }}>
                <p className='FormHeader' >GOOGLE FORMS</p>
                <hr style={{ height: "1", backgroundColor: "black", width: "94%", marginLeft: "3%" }}></hr>
                {

                    googleForms.map((item) => (
                        <>
                            <Button variant="primary" onClick={() => handleShow(item.Title, item.Description, item.Link)} className="modalButton">
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <span className="FormHeading">
                                        <p style={{ textDecorationLine: "underline", textUnderlineOffset: "10px" }}>SURVEY TITLE</p>
                                        <p>{item.Title}</p>
                                    </span>
                                    <span className="FormView">
                                        <button className="Viewbutton" style={{ padding: "3px", borderRadius: "5px", marginTop: "20px" }}>More &rarr;</button>
                                    </span>
                                </div>
                            </Button>
                            <hr style={{ width: "94%", marginLeft: "3%" }}></hr>

                        </>
                    ))

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
                        <p>
                            Link : <a href={LinkVar} target="_blank">Link</a>
                        </p>

                    </Modal.Body>
                    <Modal.Footer>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                            <button className="btn btn-primary " type="submit" onClick={(e) => UpdateForm(e)}>Edit Form</button>
                            <button className="btn btn-danger" type="submit" style={{ marginLeft: "50px" }} onClick={(e) => deletForm(e)}>Delete Form</button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default GoogleForms;