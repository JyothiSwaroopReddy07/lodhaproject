import React, {useState, useEffect} from "react";
import './CulturalSection.css';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'


function CulturalSection() {

    return (
        <>
        <LoginNavBar/>
            <div>

                <p id="title4">CULTURAL SECTION</p>

                <div style={{ marginLeft: "55px", height: "3px", width: "200px", backgroundColor: "gold" }}></div>
                <div class="container" >
                    <div class="row mx-0 justify-content-center">
                        <div class="col-md-10 col-lg-9 px-lg-2 col-xl-8 px-xl-0">
                            <form
                                method="POST"
                                className="w-100 rounded p-4 border backgroundcolor CulturalSection"
                                action="/postCultural"
                                enctype="multipart/form-data"
                            >
                                <label class="d-block mb-4">
                                    <span class="d-block mb-2 head">Cultural Activity Name </span>
                                    <input
                                        name="email"
                                        type="text"
                                        id="activity"
                                        class="form-control temp"
                                        placeholder="Activity Title"
                                    />
                                </label>

                                <div class="mb-4">
                                    <label class="d-block mb-2 head">Related Files</label>
                                    <div class="form-control h-auto temp">
                                        <input name="receipt" type="file" class="form-control-file" />
                                    </div>
                                </div>

                                <label class="d-block mb-4">
                                    <span class="d-block mb-2 head"> Activity Description </span>
                                    <textarea
                                        name="message"
                                        class="form-control temp"
                                        rows="3"
                                        placeholder="Give Description About Activity"
                                    ></textarea>
                                </label>

                                <div class="mb-3">
                                    <button type="submit" class="btn btn-dark px-3 w-100 CulturalSubmit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CulturalSection;