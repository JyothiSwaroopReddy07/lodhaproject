import axios from "axios";
import React, {useState, useEffect} from "react";
import './HelpDesk.css';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar';
import {useGlobalContext} from '/src/context/StateContext';

function HelpDesk() {
    const {User, setLoading, loading} = useGlobalContext();
    const [Issues, setIssues] = useState([]);
    const PostComplaint = async(FlatNo, Issue, Description) => {
        setLoading(true);
        const {data} = await axios.post("http://localhost:4000/api/v1/complaint/new",{
            FlatNo: FlatNo,
            Issue: Issue,
            Description : Description
        });
        console.log("success");
      }
      const complaintSubmit = (e) => {
        const user = JSON.parse(User);
        const FlatNo = user.FlatNo;
        const Issue = e.target.Issue.value;
        const Description = e.target.Description.value;
        e.preventDefault();
        console.log("user", FlatNo,Issue,Description);
        PostComplaint(FlatNo, Issue, Description);
      };
    
    const fetchIssues = async()=>{
        const { data }  = await axios.get("http://localhost:4000/api/v1/issue_types");  
        setIssues(data.issues);
    }
    useEffect(()=>{
        fetchIssues();
    },[Issues.length])
      
    return (
        <>
        <LoginNavBar/>
            <div>

                <p id="title2">POST A COMPLAINT</p>

                <div style={{ marginLeft: "55px", height: "3px", width: "200px", backgroundColor: "gold" }}></div>
                <div class="container" >
                    <div class="row mx-0 justify-content-center">
                        <div class="col-md-10 col-lg-9 px-lg-2 col-xl-8 px-xl-0">
                            <form
                                className="w-100 rounded p-4 border backgroundcolor HelpDeskSection"
                                onSubmit={complaintSubmit}
                            >
                                
                                <label class="d-block mb-4">
                                    <span class="d-block mb-2 head">Issue Type</span>
                                    <select className="dropDownSelect" name="Issue">
                                        {
                                            Issues.map(({Name}) => (
                                                <option value={Name}>{Name}</option>
                                            ))
                                        }
                                    </select>
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
                                        name="Description"
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