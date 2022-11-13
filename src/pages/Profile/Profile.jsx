import React from "react";
import './Profile.css';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'

function Profile() {
    const user = {
        Name : "sai krishna",
        Email: "kldsjklakl@gmail.com",
        flatNo: "502",
        MobNo: "98209859789",
        Block: "F",
        ParkingSlot: "500"
    }
    return (
        <>
        <LoginNavBar/>
            <div>
                <div className="UserProfileDiv">
                    <p id="userProfileTitle">USER PROFILE</p>

                    <div style={{ marginLeft: "55px", height: "3px", width: "150px", backgroundColor: "gold" }}></div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src="/src/assests/user.svg" id="userProfileImg" ></img>
                    </div>
                    <div className="ProfileInput" style={{marginTop:"40px"}}>
                        <p className="EditTitle">NAME</p>
                        <div style={{ marginTop: "2px", height: "3px", width: "75px", backgroundColor: "gold" }}></div>
                        <input value={user.Name} disabled className="EditInput"></input>
                        <button className="EditButton">Edit</button>
                    </div>
                    <div className="ProfileInput">
                        <p className="EditTitle">EMAIL ADDRESS</p>
                        <div style={{ marginTop: "2px", height: "3px", width: "150px", backgroundColor: "gold" }}></div>
                        <input value={user.Email} disabled className="EditInput"></input>
                        <button className="EditButton">Edit</button>
                    </div>
                    <div className="ProfileInput">
                        <p className="EditTitle">MOBILE NUMBER</p>
                        <div style={{ marginTop: "2px", height: "3px", width: "175px", backgroundColor: "gold" }}></div>
                        
                        <input value={user.MobNo} disabled className="EditInput"></input>
                        <button className="EditButton">Edit</button>
                    </div>
                    <div className="ProfileInput">
                        <p className="EditTitle">BLOCK</p>
                        <div style={{ marginTop: "2px", height: "3px", width: "75px", backgroundColor: "gold" }}></div>
                        
                        <input value={user.Block} disabled className="EditInput"></input>
                        <button className="EditButton">Edit</button>
                    </div>
                    <div className="ProfileInput">
                        <p className="EditTitle">FLAT NUMBER</p>
                        <div style={{ marginTop: "2px", height: "3px", width: "150px", backgroundColor: "gold" }}></div>
                        <input value={user.flatNo} disabled className="EditInput"></input>
                        <button className="EditButton">Edit</button>
                    </div>
                    
                    <div className="ProfileInput" >
                        <p className="EditTitle">PARKING SLOT</p>
                        <div style={{ marginTop: "2px", height: "3px", width: "150px", backgroundColor: "gold" }}></div>
                        <input value={user.Name} disabled className="EditInput"></input>
                        <button className="EditButton">Edit</button>
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <button className="UserProfileSubmit">UPDATE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;