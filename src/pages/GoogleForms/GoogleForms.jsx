import React from "react";
import './GoogleForms.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.Title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Description : {props.Description}
                </p>
                <p>
                    Link : <a href={props.Link} target="_blank">Link</a>
                </p>
               
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function GoogleForms() {
    const [modalShow, setModalShow] = React.useState(false);

    let googleForms = [
        {
            Heading: "Welcome Message",
            Description: "Hello this is sai Krishna",
            Link: "https://www.google.com",
            
        },
        {
            Heading: "Welcome Message",
            Description: "Hello this is sai Krishna",
            Link: "https://www.google.com",
        },
        {
            Heading: "Welcome Message",
            Description: "Hello this is sai Krishna",
            Link: "https://www.google.com",

        },
        {
            Heading: "Welcome Message",
            Description: "Hello this is sai Krishna",
            Link: "https://www.google.com",

        }
    ];
    return (
        <>
            <div className="FormItems" style={{ marginTop: "50px" }}>
                <p className='FormHeader' >GOOGLE FORMS</p>
                <hr style={{ height: "1", backgroundColor: "black", width: "94%", marginLeft: "3%" }}></hr>
                {

                    googleForms.map(item => (
                        <>
                            <Button variant="primary" onClick={() => setModalShow(true)} className="modalButton">
                                <div style={{display:"flex", flexDirection:"row"}}>
                                    <span className="FormHeading">
                                          <u>Survey Title</u> : {item.Heading}
                                    </span>
                                    <span className="FormView">
                                       <button className="Viewbutton" style={{padding:"3px", borderRadius:"5px"}}>More &rarr;</button>
                                    </span>
                                </div>
                            </Button>
                            <hr style={{ width: "94%", marginLeft: "3%" }}></hr>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                Desc={item.Description}
                                Title={item.Heading}
                                Link={item.Link}
                            />
                        </>
                    ))

                }
            </div>
        </>
    );
}

export default GoogleForms;