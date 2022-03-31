import {
  FIND_ALL_TUITS,
  DELETE_TUIT,
  CREATE_TUIT,
  UPDATE_TUIT,
} from "../../../actions/tuit-actions";

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_TUITS:
      return action.tuits;
    case DELETE_TUIT:
      return state.filter((tuit) => tuit._id !== action.tuit._id);
    case CREATE_TUIT:
      return [action.newTuit, ...state];
    case UPDATE_TUIT:
      return state.map((tuit) =>
        tuit._id === action.tuit._id ? action.tuit : tuit
      );

    default:
      return state;
  }
};

export default tuitsReducer;
