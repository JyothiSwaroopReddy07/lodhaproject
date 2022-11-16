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
  let timeStamp = Date.parse(props.Time);
  var date = new Date(timeStamp);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = date.getFullYear();
  var month = months[date.getMonth()];
  var dateVal = date.getDate();
  var formattedDate = dateVal + '-' + (date.getMonth() + 1) + '-' + year;
  
  return (
    <>
      <Card className="m-3 backgroundcoloring PostBackground">
        <Card.Header className="PostTitle">
          <div className='PostHeader'>
          <p className='PostsIssue'>{props.Issue}</p>
          <div>
          {props.Status ? <p style={{color: "green", fontWeight:"bold", fontSize:"16px", letterSpacing:"1px"}}>Done</p> : <p style={{color: "red",fontWeight:"bold", fontSize:"16px", letterSpacing:"1px"}}>Pending</p>}
          <p style={{color: "black", fontWeight:"bold", fontSize:"16px", letterSpacing:"1px"}}>{formattedDate}</p>
          </div>
          </div>
          </Card.Header>
        <Card.Body>
          <Card.Text className="PostDesc">
            {props.Description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Posts;
