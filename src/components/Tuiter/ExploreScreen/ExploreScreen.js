import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

//import PostSummaryList from "../PostSummaryList/index.js";
const ExploreScreen = () => {
  return (
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-2 col-xl-2">
        <NavigationSidebar active="explore" />
      </div>
      <div
        className="col-10 col-md-10 col-lg-6 col-xl-6"
        style={{ position: "relative" }}
      >
        <ExploreComponent />
      </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4">
        <WhoToFollowList />
      </div>
    </div>
  );
};
export default ExploreScreen;
