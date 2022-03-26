import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({ type: "like-tuit", tuit });
  };
  return (
    <div className="row">
      <span className="col-3">
        <i className="far fa-comment"></i> {tuit.stats.comments}
      </span>
      <span className="col-3">
        <i className="fas fa-retweet"></i> {tuit.stats.retuits}
      </span>
      <span className="col-3" onClick={likeTuit}>
        {tuit.liked && (
          <i className="fas fa-heart" style={{ color: "red" }}></i>
        )}
        {!tuit.liked && <i className="far fa-heart me-1"></i>}{" "}
        {tuit.stats.likes}
      </span>
      <span className="col-3">
        <i className="fas fa-external-link-alt"></i>
      </span>
    </div>
  );
};
export default TuitStats;
