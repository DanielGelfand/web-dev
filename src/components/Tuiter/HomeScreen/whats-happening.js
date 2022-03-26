import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./homescreen.css";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");

  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    dispatch({ type: "create-tuit", tuit: whatsHappening });
  };
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
          className="form-control bg-black wd-textarea"
          value={whatsHappening}
          onChange={(event) => setWhatsHappening(event.target.value)}
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
          onClick={tuitClickHandler}
        >
          Tuit
        </button>
      </div>
      <br />
    </div>
  );
};
export default WhatsHappening;
