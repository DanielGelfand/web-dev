import React from "react";
import "./index.css";

const WhoToFollowListItem = ({
  who = {
    avatarIcon: "../../../images/nasa.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <>
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 p-0">
            <img className="wd-follow-img" src={who.avatarIcon} />
          </div>

          <div className="col-6 ml-0 p-0 wd-left-margin-5px">
            <span className="fw-bold">
              {" "}
              {who.userName}
              <i className="fas fa-check-circle"></i>
            </span>
            <br />
            <span className="wd-darker-gray">@{who.handle}</span>
            <br />
          </div>
          <div className="col-3 m-0">
            <button className="btn btn-primary rounded-pill wd-follow-btn">
              Follow
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default WhoToFollowListItem;
