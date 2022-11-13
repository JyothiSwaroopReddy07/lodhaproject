import * as React from "https://cdn.skypack.dev/react@17.0.1";
import "./Emergency.css";
import LoginNavBar from '/src/components/LoginNavBar/LoginNavBar'

function Emergency() {
  return (
    <>
    <LoginNavBar/>
    <div className="emergency">
    <p className="title"> 
        Emergency Services
    </p>
    <div className="wrapper">

      <Card
        img="/src/assests/pool.svg"
        title="Swimming Pool"
        desc="hello" />

      <Card
        img="/src/assests/gym.svg"
        title="Gym"
        desc="hello" />

      <Card
        img="/src/assests/indoorgames.svg"
        title="Indoor Games"
        desc="hello" />

      <Card
        img="/src/assests/yoga.svg"
        title="Yoga"
        desc="hello" />

      <Card
        img="/src/assests/cafe.svg"
        title="Cafe"
        desc="hello" />

      <Card
        img="/src/assests/kidsplay.svg"
        title="Kids Play Room"
        desc="hello" />
    </div>
    </div>
    </>
  )
}

function Card(props) {
  return (
    <div className="card" style={{ width: "300px", border: "none", marginTop: "50px", marginLeft: "20px",backgroundColor: "#f2d491"}} >
      <div className="card_body" style={{ alignItems: "center", justifyContent: "center" }}>
        <img src={props.img} class="card_image" style={{ width: "100px" }} /><hr></hr>
        <h2 className="card_title" style={{fontSize: "24px", fontWeight: "bold", color: "#000", textTranform:"capitalize"}}>{props.title}</h2>
        <p className="card_desc" style={{fontSize: "18px",fontWeight: "medium",color: "#36454F" }}>{props.desc}</p>
      </div>

    </div>
 
  )
}

export default Emergency;
