import React from 'react'
import './Posts.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

function Posts({ props }) {
  return (
    <>
      <Card className="m-3 backgroundcoloring PostBackground">
        <Card.Header className="PostTitle">{props.Title}</Card.Header>
        <Card.Body>
          <Card.Title className="PostDesc"><img src={props.UserPic} /></Card.Title>
          <Card.Text className="PostDesc">
            {props.Description}
          </Card.Text>
          <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer>
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol>
                  <MDBCard
                    className="card-stepper"
                    style={{ borderRadius: "10px" }}
                  >
                    <MDBCardBody className="p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          <span className="lead fw-normal">
                            Complaint Status Tracker
                          </span>
                          <span className="text-muted small">
                            by DHFL on 21 Jan, 2020
                          </span>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                        <span className="dot"></span>
                        <hr className="flex-fill track-line" />
                        <span className="dot"></span>
                        <hr className="flex-fill track-line" />
                        <span className="dot"></span>
                        <hr className="flex-fill track-line" />
                        <span className="dot"></span>
                        <hr className="flex-fill track-line" />
                        <span className="d-flex justify-content-center align-items-center big-dot dot">
                          <MDBIcon icon="check text-white" />
                        </span>
                      </div>

                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-column align-items-start">
                          <span>15 Mar</span>
                          <span>Order placed</span>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <span>15 Mar</span>
                          <span>Order placed</span>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <span>15 Mar</span>
                          <span>Order Dispatched</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <span>15 Mar</span>
                          <span>Out for delivery</span>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                          <span>15 Mar</span>
                          <span>Delivered</span>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </Card.Body>
      </Card>
    </>
  )
}

export default Posts;
