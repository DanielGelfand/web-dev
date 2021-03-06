import React, { useEffect } from "react";
import TuitListItem from "./tuit-list-item";
import { useSelector, useDispatch } from "react-redux";
// import "./tuits.css";
import { findAllTuits, createTuit } from "../../../actions/tuit-actions";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => findAllTuits(dispatch), []);

  return (
    <ul className="list-group">
      {tuits.map &&
        tuits.map((tuit) => <TuitListItem key={tuit._id} tuit={tuit} />)}
    </ul>
  );
};

export default TuitList;
