import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json";
const WhoToFollowList = () => {
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
