import React from 'react';
import './Complaints.css';
import Accordion from 'react-bootstrap/Accordion';
import Posts from '/src/components/Posts/Posts';


function Complaints() {

  let AllComplaints = [
    {
      FlatNo: "501", 
      UserName: "JyothiSwaroopReddy",
      Description: "lorem iwronjksf slkvof vdiobd bfoijkf vkfdnivd bdnfboigijdn fnojioankdojwndon jdnsgonsjn zjxn zvojvsjvksn",
      Title: "Plumber Issue"
    }
  ];


  return (
    <>
      <div className="middle" style = {{marginTop : "100px"}}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Post A Complaint</Accordion.Header>
            <Accordion.Body>
              <div class="container">
                <div class="row mx-0 justify-content-center">
                  <div class="col-md-10 col-lg-9 px-lg-2 col-xl-8 px-xl-0">
                    <form
                      method="POST"
                      className="w-100 rounded p-4 border backgroundcolor"
                      action="/postComplaint"
                      enctype="multipart/form-data"
                    >
                      <label class="d-block mb-4">
                        <span class="d-block mb-2">Complaint Title</span>
                        <input
                          name="email"
                          type="text"
                          id = "complaint"
                          class="form-control"
                          placeholder="Complaint Title"
                        />
                      </label>

                      <div class="mb-4">
                        <label class="d-block mb-2">Related Files</label>
                        <div class="form-control h-auto">
                          <input name="receipt" type="file" class="form-control-file" />
                        </div>
                      </div>

                      <label class="d-block mb-4">
                        <span class="d-block mb-2">What's wrong?</span>
                        <textarea
                          name="message"
                          class="form-control"
                          rows="3"
                          placeholder="Please describe your problem"
                        ></textarea>
                      </label>

                      <div class="mb-3">
                        <button type="submit" class="btn btn-dark px-3 w-100">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {
          AllComplaints.map(item => <Posts props={item} />)
        }
      </div>

    </>
  );
}

export default Complaints;