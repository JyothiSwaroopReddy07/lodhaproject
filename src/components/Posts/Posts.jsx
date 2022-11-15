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
        </Card.Body>
      </Card>
    </>
  )
}

export default Posts;
