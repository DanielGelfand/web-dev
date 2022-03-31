import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./homescreen.css";
import { createTuit } from "../../../actions/tuit-actions";

const WhatsHappening = () => {
  // let [whatsHappening, setWhatsHappening] = useState("");
  const [newTuit, setNewTuit] = useState({ tuit: "New tuit" });
  const dispatch = useDispatch();

  return (
    <div>
      <div className="d-flex">
        <img
          src="https://jackstech.net/ElonTwitter/Images/StarshipSunset.jpg"
          className="wd-follow-img m-2"
          alt="starship_sunset"
        />
        <textarea
          placeholder="What's happening?"
          className="form-control bg-black wd-textarea wd-darker-gray"
          onChange={(e) => setNewTuit({ ...newTuit, tuit: e.target.value })}
          style={{ color: "white" }}
        ></textarea>
      </div>
      <div>
        <i className="fas fa-image m-2" style={{ color: "#2a9fd6" }}></i>
        <i
          className="fas fa-chart-line wd-blue-color m-2"
          style={{ color: "#2a9fd6" }}
        ></i>
        <i
          className="far fa-smile wd-blue-color m-2"
          style={{ color: "#2a9fd6" }}
        ></i>
        <i
          className="fas fa-calendar wd-blue-color m-2"
          style={{ color: "#2a9fd6" }}
        ></i>
        <button
          className="btn btn-primary rounded-pill m-2 wd-whats-happening-btn fa-pull-right"
          onClick={() => createTuit(dispatch, newTuit)}
        >
          Tuit
        </button>
      </div>
      <br />
    </div>
  );
};
export default WhatsHappening;
