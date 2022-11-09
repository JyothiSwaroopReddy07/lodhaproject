import React from "react";
import './LegalUpdate.css';

function LegalUpdate() {
    return (
        <>
            <div>

                <p id="title5">LEGAL UPDATE</p>

                <div style={{ marginLeft: "55px", height: "3px", width: "150px", backgroundColor: "gold" }}></div>
                <div class="container" >
                    <div class="row mx-0 justify-content-center">
                        <div class="col-md-10 col-lg-9 px-lg-2 col-xl-8 px-xl-0">
                            <form
                                method="POST"
                                className="w-100 rounded p-4 border backgroundcolor LegalUpdateSection"
                                action="/postLegalUpdate"
                                enctype="multipart/form-data"
                            >
                                <label class="d-block mb-4">
                                    <span class="d-block mb-2 head">Enter Title</span>
                                    <input
                                        name="email"
                                        type="text"
                                        id="LegalTitle"
                                        class="form-control temp"
                                        placeholder="Enter the Legal Update Title"
                                    />
                                </label>

                                <div class="mb-4">
                                    <label class="d-block mb-2 head">Related Files</label>
                                    <div class="form-control h-auto temp">
                                        <input name="receipt" type="file" class="form-control-file" />
                                    </div>
                                </div>

                                <label class="d-block mb-4">
                                    <span class="d-block mb-2 head"> Update Description </span>
                                    <textarea
                                        name="message"
                                        class="form-control temp"
                                        rows="3"
                                        placeholder="Give Description About Legal Update"
                                    ></textarea>
                                </label>

                                <div class="mb-3">
                                    <button type="submit" class="btn btn-dark px-3 w-100 LegalSubmit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LegalUpdate;