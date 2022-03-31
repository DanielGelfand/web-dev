import { useDispatch } from "react-redux";
import { updateTuit } from "../../actions/tuit-actions";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <span className="col-3">
        <i className="far fa-comment"></i> {tuit.stats.comments}
      </span>
      <span className="col-3">
        <i className="fas fa-retweet"></i> {tuit.stats.retuits}
      </span>
      <span
        className="col-4"
        // onClick={() =>
        //   !tuit.liked &&
        //   updateTuit(dispatch, {
        //     ...tuit,
        //     liked: true,
        //     stats: {
        //       ...tuit.stats,
        //       likes: tuit.stats.likes + 1,
        //     },
        //   })
        // }
      >
        <span
          onClick={() =>
            !tuit.liked &&
            updateTuit(dispatch, {
              ...tuit,
              liked: true,
              stats: {
                ...tuit.stats,
                likes: tuit.stats.likes + 1,
              },
            })
          }
        >
          {tuit.liked && (
            // <i className="fas fa-heart" style={{ color: "red" }}></i>
            <i className="fas fa-thumbs-up" style={{ color: "#0dcaf0" }}></i>
          )}
          {!tuit.liked && <i className="fas fa-thumbs-up"></i>}{" "}
          {tuit.stats.likes}
        </span>
        <span
          onClick={() =>
            !tuit.disliked &&
            updateTuit(dispatch, {
              ...tuit,
              disliked: true,
              stats: {
                ...tuit.stats,
                dislikes: tuit.stats.dislikes + 1,
              },
            })
          }
        >
          {tuit.disliked && (
            <i
              className="fas fa-thumbs-down me-1"
              style={{ marginLeft: 5, color: "red" }}
            ></i>
          )}
          {!tuit.disliked && (
            <i
              className="fas fa-thumbs-down me-1"
              style={{ marginLeft: 5 }}
            ></i>
          )}

          {tuit.stats.dislikes}
        </span>
      </span>
      <span className="col-2">
        <i className="fas fa-external-link-alt"></i>
      </span>
    </div>
  );
};
export default TuitStats;
