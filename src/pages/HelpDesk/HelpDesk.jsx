import React from "react";
import './HelpDesk.css';

function HelpDesk() {
    return (
        <>
            <div>

                <p id="title2">POST A COMPLAINT</p>

                <div style={{ marginLeft: "55px", height: "3px", width: "200px", backgroundColor: "gold" }}></div>
                <div class="container" >
                    <div class="row mx-0 justify-content-center">
                        <div class="col-md-10 col-lg-9 px-lg-2 col-xl-8 px-xl-0">
                            <form
                                method="POST"
                                className="w-100 rounded p-4 border backgroundcolor HelpDeskSection"
                                action="/postComplaint"
                                enctype="multipart/form-data"
                            >
                                <label class="d-block mb-4">
                                    <span class="d-block mb-2 head">Complaint Title</span>
                                    <input
                                        name="email"
                                        type="text"
                                        id="complaint"
                                        class="form-control temp"
                                        placeholder="Complaint Title"
                                    />
                                </label>

                                <div class="mb-4">
                                    <label class="d-block mb-2 head">Related Files</label>
                                    <p style={{fontSize:"14px"}}>(.xlsx, .xls, images, .doc, .docx, .pdf are only accepted)</p>
                                    <div class="form-control h-auto temp">
                                        <input name="receipt" type="file" class="form-control-file" multiple accept=".xlsx,.xls,image/*,.doc, .docx,.pdf"/>
                                    </div>
                                </div>

                                <label class="d-block mb-4">
                                    <span class="d-block mb-2 head">What's wrong?</span>
                                    <textarea
                                        name="message"
                                        class="form-control temp"
                                        rows="3"
                                        placeholder="Please describe your problem"
                                    ></textarea>
                                </label>

                                <div class="mb-3">
                                    <button type="submit" class="btn btn-dark px-3 w-100 Help-desk-submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HelpDesk;