import React from "react";
import { Link } from "react-router-dom";
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
