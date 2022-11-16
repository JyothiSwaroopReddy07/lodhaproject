import axios from "axios";
import React, { useState, useEffect } from "react";
import './CreateForm.css';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar';
import { useGlobalContext } from '/src/context/StateContext';

function CreateForm() {
    const { User, setLoading, loading } = useGlobalContext();

    const CreateForms = async (Title, Description, Link) => {
        setLoading(true);
        const { data } = await axios.post("http://localhost:4000/api/v1/form/new", {
            Title: Title,
            Description: Description,
            Link: Link
        });
        console.log("success");
    }
    const CreateFormSubmit = (e) => {
        const Title = e.target.Title.value;
        const Description = e.target.Description.value;
        const Link = e.target.Link.value;
        e.preventDefault();
        CreateForms(Title, Description, Link);
    };



    return (
        <>
            <LoginNavBar />
            <div>

                <p id="title2">CREATE  GOOGLE-FORMS</p>

                <div style={{ marginLeft: "55px", height: "3px", width: "250px", backgroundColor: "gold" }}></div>
                <div class="container" >
                    <div class="row mx-0 justify-content-center">
                        <div class="col-md-10 col-lg-9 px-lg-2 col-xl-8 px-xl-0">
                            <form
                                className="w-100 rounded p-4 border backgroundcolor HelpDeskSection"
                                onSubmit={CreateFormSubmit}
                            >

                                <label class="d-block mb-4">
                                    <span class="d-block mb-2 head">Form Title</span>
                                    <input
                                        name="Title"
                                        type="text"
                                        id="activity"
                                        class="form-control temp"
                                        placeholder="Form Title"
                                    />
                                </label>

                                <label class="d-block mb-4">
                                    <span class="d-block mb-2 head">Form Link</span>
                                    <input
                                        name="Link"
                                        type="text"
                                        id="activity"
                                        class="form-control temp"
                                        placeholder="Form Link"
                                    />
                                </label>

                                <label class="d-block mb-4">
                                    <span class="d-block mb-2 head">Description</span>
                                    <textarea
                                        name="Description"
                                        class="form-control temp"
                                        rows="3"
                                        placeholder="Survey Description"
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

export default CreateForm;