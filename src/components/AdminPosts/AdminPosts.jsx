import React from 'react'
import './AdminPosts.css'
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
import { useGlobalContext } from '/src/context/StateContext';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function AdminPosts({ props }) {
    const [singleUser, setSingleUser] = useState([])
    const user = async () => {
        const { data } = await axios.get("http://localhost:4000/api/v1/singleUser", { params: { FlatNo: props.FlatNo } });
        const singleuser = data.user1[0];
        console.log(data);
        console.log(singleuser);
        setSingleUser(singleuser)
        return singleuser;
    }

    useEffect(() => {
        user()
    }, []);
    /*const refreshPage = ()=>{
      window.location.reload();
    }
    
    const updateComplaint = async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/updatecomplaint", { params: { complaint: props } });
      refreshPage();
    }
  */
    const UpdateComplaint = (e) => {
        e.preventDefault();
        // const desc = document.getElementById((props._id).toString()).innerText;
        // console.log("Update description", desc);
        // props.Description = desc;
        // updateComplaint();

    }

    return (
        <>
            <Card className="m-3 backgroundcoloring PostBackground">
                <form
                    onSubmit={UpdateDescription}
                >
                    <Card.Header className="PostTitle">
                        <div className='PostHeader'>
                            <div>
                                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                                    <label className='PostHeading'>Flat Number  </label>
                                    <span className='PostsIssue'>{singleUser.FlatNo}</span>
                                    <label className='PostHeading'>Name  </label>
                                    <span className='PostsIssue'>{singleUser.OwnerName}</span>
                                    <label className='PostHeading'>Mobile  </label>
                                    <span className='PostsIssue'>{singleUser.Mobile}</span>
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <label className='PostHeading'>Issue  </label>
                                    <span className='PostsIssue' style={{ color: 'blue', }}>{props.Issue}</span>
                                </div>
                            </div>

                            <div>
                                {props.Status ? <p style={{ color: "green", fontWeight: "bold", fontSize: "16px", letterSpacing: "1px" }}>Done</p> : <select name="Status" className='statusOptions'>
                                    <option value="0">
                                        Pending
                                    </option>
                                    <option value="1" style={{ color: "green" }}>
                                        Done
                                    </option>
                                </select>/*<p style={{ color: "red", fontWeight: "bold", fontSize: "16px", letterSpacing: "1px" }}>Pending</p>*/}
                                <p style={{ color: "black", fontWeight: "bold", fontSize: "16px", letterSpacing: "1px" }}>{props.Time}</p>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className="PostDesc">

                            <p className='DescriptionTitle'>DESCRIPTION</p>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div contentEditable style={{ width: "100%" }} id={props._id}>{props.Description}</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                                <button className="btn btn-primary " type="submit" onClick={(e) => UpdateComplaint(e)}>Edit Complaint</button>
                                <button className="btn btn-danger" type="submit" style={{ marginLeft: "50px" }} onClick={(e) => DeleteComplaint(e)}>Delete Complaint</button>
                            </div>

                        </Card.Text>
                    </Card.Body>
                </form>
            </Card>
        </>
    )
}

export default AdminPosts;
