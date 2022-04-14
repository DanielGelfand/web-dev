import * as service from "../services/tuits-service";

export const CREATE_TUIT = "CREATE_TUIT";
export const FIND_ALL_TUITS = "FIND_ALL_TUITS";
export const UPDATE_TUIT = "UPDATE_TUIT";
export const DELETE_TUIT = "DELETE_TUIT";

export const createTuit = async (dispatch, tuit) => {
  console.log("Frontend tuit:", tuit);
  const newTuit = await service.createTuit(tuit);
  console.log("Called to create tuit:", newTuit);
  dispatch({
    type: CREATE_TUIT,
    newTuit,
  });
};

export const findAllTuits = async (dispatch) => {
  const tuits = (await service.findAllTuits()).reverse();
  console.log("Tuits:", tuits);
  dispatch({
    type: FIND_ALL_TUITS,
    tuits,
  });
};
export const updateTuit = async (dispatch, tuit) => {
  // console.log("DISLIKE");
  const status = await service.updateTuit(tuit);
  dispatch({
    type: UPDATE_TUIT,
    tuit,
  });
};

export const deleteTuit = async (dispatch, tuit) => {
  const response = await service.deleteTuit(tuit);
  dispatch({
    type: DELETE_TUIT,
    tuit,
  });
};
