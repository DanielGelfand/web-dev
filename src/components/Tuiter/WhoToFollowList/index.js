import WhoToFollowListItem from "./WhoToFollowListItem.js";
import { useSelector } from "react-redux";
const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <b>Who to follow</b>
        </li>
        {who.map((listItem) => (
          <WhoToFollowListItem who={listItem} />
        ))}
      </ul>
    </div>
  );
};

export default WhoToFollowList;
