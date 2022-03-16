import React from "react";
import { Link } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import PostSummaryList from "./PostSummaryList";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const Tuiter = () => {
  return (
    <div>
      <h1>Tuiter</h1>
      <Link to="/hello">Hello</Link>|<Link to="/labs">Labs</Link>
      {/*<NavigationSidebar active="explore" />*/}
      {/*<ExploreComponent />*/}
      {/*<WhoToFollowList />*/}
      <ExploreScreen />
    </div>
  );
};

export default Tuiter;
