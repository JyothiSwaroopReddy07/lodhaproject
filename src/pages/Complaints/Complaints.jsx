import React from 'react';
import './Complaints.css';
import Accordion from 'react-bootstrap/Accordion';
import Posts from '/src/components/Posts/Posts';
import NavBar from '/src/components/NavBar';


function Complaints() {

  let AllComplaints = [
    {
      UserPic: 'data:image/jpeg;base64,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',
      UserName: "JyothiSwaroopReddy",
      Description: "lorem iwronjksf slkvof vdiobd bfoijkf vkfdnivd bdnfboigijdn fnojioankdojwndon jdnsgonsjn zjxn zvojvsjvksn",
      Title: "Plumber Issue"
    }
  ];


  return (
    <>
      <NavBar/>
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