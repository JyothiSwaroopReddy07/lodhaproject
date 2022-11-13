import React from "react";
import './Meeting.css';

function Meeting() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <img src="/src/assests/meeting.png" style={{ height: "35px", width: "35px", marginTop: "105px", marginLeft: "50px", marginBottom: "0px" }}></img>
        <p id="userDashboardTitle">SET UP MEETING</p>
      </div>
      <div style={{ marginLeft: "55px", height: "3px", width: "275px", backgroundColor: "gold" }}></div>
      <div class="container MeetingDiv">
        <div class="row mx-0 justify-content-center">
          <div class="col-md-10 col-lg-9 px-lg-2 col-xl-8 px-xl-0">

            <form
              method="POST"
              className="w-100 rounded p-4 border MeetingSection"
              action="/setUpMeeting"
              enctype="multipart/form-data"

            >
              <p id="MeetingFormTitle">MEETING DETAILS</p>
              <div style={{ marginLeft: "0px", height: "3px", width: "200px", backgroundColor: "goldenrod" }}></div>
              <label class="d-block mb-4">
                <span class="d-block mb-2 labels" style={{ marginTop: "40px" }}>Meeting Title</span>
                <input
                  name="meetingTitle"
                  type="text"
                  id="meetingTitle"
                  class="form-control textInput MeetingInput"
                  placeholder="Meeting Title"

                />
              </label>

              <label class="d-block mb-4">
                <span class="d-block mb-2 labels">Meeting Link</span>
                <textarea
                  name="meetingLink"
                  id="meetingLink"
                  rows="1"
                  class="form-control MeetingInput"
                  placeholder="Enter the Meeting Link "
                ></textarea>
              </label>

              <label class="d-block mb-4">
                <span class="d-block mb-2 labels">Meeting Description</span>
                <textarea
                  name="meetingDesc"
                  id="meetingDesc"
                  rows="3"
                  class="form-control MeetingInput"
                  placeholder="Enter the Meeting Description "
                ></textarea>
              </label>

              <label class="d-block mb-4">
                <span class="d-block mb-2 labels"> Meeting Host Name </span>
                <input
                  name="host"
                  type="text"
                  class="form-control textInput MeetingInput"
                  id="meetingHost"
                  placeholder="Enter the Host Name"
                ></input>
              </label>

              <label class="d-block mb-4">
                <span class="d-block mb-2 labels"> Meeting Date </span>
                <input
                  name="date"
                  type="date"
                  class="form-control MeetingInput"
                  id="meetingDate"
                  placeholder="Select Date"

                ></input>
              </label>

              <label class="d-block mb-4">
                <span class="d-block mb-2 labels"> Meeting Time </span>
                <input
                  name="time"
                  type="time"
                  class="form-control MeetingInput"
                  id="meetingTime"
                  placeholder="Select Time"
                  defaultValue="00:00"
                ></input>
              </label>

              <label class="d-block mb-4">
                <span class="d-block mb-2 labels">Related Files</span>
                <p style={{fontSize:"14px"}}>(.xlsx, .xls, images, .doc, .docx, .pdf are only accepted)</p>
                <input
                  name="meetingFiles"
                  type="file"
                  id="meetingTitle"
                  class="form-control MeetingInput"
                  placeholder="Meeting Title"
                  multiple
                  accept=".xlsx,.xls,image/*,.doc, .docx,.pdf"
                />
              </label>


              <div class="mb-3">
                <button type="submit" class="btn btn-dark px-3 w-100 submitButton">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meeting;