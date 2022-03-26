import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "../../TuitStats/tuit-stats";

const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    console.log("DELETING");
    console.log(tuit._id);
    dispatch({ type: "delete-tuit", tuit });
  };

  return (
    <div>
      <li className="list-group-item d-flex">
        <img
          className="wd-follow-img wd-float-left me-2"
          src={tuit.avatarImg}
          alt="avatar"
        />
        <div className="wd-float-left">
          <div className="mb-1">
            <div>
              <i
                onClick={() => deleteTuit(tuit)}
                className="fas fa-times fa-pull-right"
              ></i>
              <b>{tuit.postedBy.username}</b>
              {tuit.verified && <i className="fas fa-check-circle ms-1"></i>}
              <span className="wd-color-lightgrey ms-1">@{tuit.handle}</span>
            </div>
            {tuit.tuit}
          </div>
          {tuit.attachments && tuit.attachments.image && (
            <img
              className="wd-tuit-list-img"
              src={tuit.attachments.image}
              alt="attachment"
            />
          )}
          {tuit.attachments && tuit.attachments.video && (
            <iframe
              className="wd-tuit-list-img"
              height="300px"
              src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
              title="Embed_Video"
            ></iframe>
          )}
          <TuitStats tuit={tuit} />
        </div>
      </li>
    </div>
  );
};

export default TuitListItem;
