import React, {useState, useEffect} from "react";
import './Profile.css';
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'

function Profile() {
    const [user, setUser]  = useState(JSON.parse(localStorage.getItem("isAuthenticated"))|| null);
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("User")));
    }, [JSON.parse(localStorage.getItem("User"))])

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
                        <input value={user.OwnerName} disabled className="EditInput"></input>
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
                        
                        <input value={user.Mobile} disabled className="EditInput"></input>
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
                        <input value={user.FlatNo} disabled className="EditInput"></input>
                        <button className="EditButton">Edit</button>
                    </div>
                    
                    <div className="ProfileInput" >
                        <p className="EditTitle">PARKING SLOT</p>
                        <div style={{ marginTop: "2px", height: "3px", width: "150px", backgroundColor: "gold" }}></div>
                        <input value={user.RegisteredName} disabled className="EditInput"></input>
                        <button className="EditButton">Edit</button>
                    </div>

                    <div className="ProfileInput" >
                        <p className="EditTitle">PARKING SLOT</p>
                        <div style={{ marginTop: "2px", height: "3px", width: "150px", backgroundColor: "gold" }}></div>
                        <input value={user.ParkingSlot} disabled className="EditInput"></input>
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