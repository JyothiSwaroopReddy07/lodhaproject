import React from "react";
import './GeneralNotifications.css';
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
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function GeneralNotifications() {
    const [modalShow, setModalShow] = React.useState(false);

    let generalNotifications = [
        {
            Heading: "Welcome Message",
            Description: "Hello this is sai Krishna",

        },
        {
            Heading: "Welcome Message",
            Description: "Hello this is sai Krishna",
        },
        {
            Heading: "Welcome Message",
            Description: "Hello this is sai Krishna",
        },
        {
            Heading: "Welcome Message",
            Description: "Hello this is sai Krishna",
        }
    ];
    return (
        <>
            <div className="NotifyItems" style={{ marginTop: "50px" }}>
                <p className='NotifyHeader' >GENERAL NOTIFICATIONS</p>
                <hr style={{ height: "1", backgroundColor: "black", width: "94%", marginLeft: "3%" }}></hr>
                {

                    generalNotifications.map(item => (
                        <>
                            <Button variant="primary" onClick={() => setModalShow(true)} className="modalButton">
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <span className="NotifyHeading">
                                        <u><strong>TITLE </strong></u> : {item.Heading}
                                    </span>
                                    <span className="NotifyView">
                                        <button className="Viewbutton" style={{ padding: "3px", borderRadius: "5px" }}>More &rarr;</button>
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

export default GeneralNotifications;